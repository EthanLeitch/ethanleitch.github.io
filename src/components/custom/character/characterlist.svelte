<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    type $$Props = HTMLInputAttributes;

    export let title: $$Props["title"] = undefined;

    import AddButton from "$lib/components/custom/iconbutton/add.svelte";
    import Character from "$lib/components/custom/character/character.svelte";
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";

    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    import Button from "$lib/components/ui/button/button.svelte";

    import { initiative } from "$lib/stores/stoneburner";

    const dropTargetStyle = {outline: 'rgba(0, 0, 0, 0.7) solid 2px'}
    let index = 1;

    function addCharacter() {
        index++;
        $initiative = [...$initiative, {"id": index, "name": "", "res": null, "atk": null}];
    }

    function handleDndConsider(e) {
        $initiative = e.detail.items;
    }
    function handleDndFinalize(e) {
        $initiative = e.detail.items;
    }
</script>

<Card class="p-2.5 flex-1 overflow-y-auto">
    <div class="flex flex-col space-between space-y-2.5">
        <CardTitle>{title}</CardTitle>

        <section use:dndzone="{{items: $initiative, dropTargetStyle}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}" style="overflow: scroll;" class="space-between space-y-2.5">
            {#each $initiative as character (character.id)}
                <!-- Workaround for https://github.com/isaacHagoel/svelte-dnd-action/issues/186 -->
                {#if character.isDndShadowItem}
                    <div><Character/></div>
                {:else}
                    <div><Character id={character.id}/></div>
                {/if}
            {/each}
        </section>

        <AddButton on:click={addCharacter}/>
        <Button disabled>Next Round</Button>
    </div>
</Card>