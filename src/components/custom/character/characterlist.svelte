<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    type $$Props = HTMLInputAttributes;

    export let title: $$Props["title"] = undefined;
    //export let title: $$Props["position"] = undefined;

    import AddButton from "$lib/components/custom/iconbutton/add.svelte";
    import Character from "$lib/components/custom/character/character.svelte";
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";

    import {dndzone} from "svelte-dnd-action";
    import Button from "$lib/components/ui/button/button.svelte";

    import { initiative } from "$lib/stores/stoneburner";

    const dropTargetStyle = {outline: 'rgba(0, 0, 0, 0.7) solid 2px'}
    
    let position: 'left' | 'right' = 'left';
    let index = 1;

    function addCharacter() {
        index++;
        $initiative[position] = [...$initiative[position], {"id": (position + index), "name": "", "res": null, "atk": null}];
        //console.log("addCharacter(): Set ID to", (position + index));
    }

    function nextRound() {
        $initiative['left'] = $initiative['left'].concat($initiative['right']);
        $initiative['right'] = [];
    }

    function handleDndConsider(e) {
        $initiative[position] = e.detail.items;
    }
    function handleDndFinalize(e) {
        $initiative[position] = e.detail.items;
    }

    export { position }
    
    $initiative['right'] = [];
</script>

<Card class="p-2.5 flex-1 overflow-y-auto">
    <div class="flex flex-col space-between space-y-2.5">
        <CardTitle>{title}</CardTitle>

        <section use:dndzone="{{items: $initiative[position], dropTargetStyle}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}" style="overflow: scroll;" class="space-between space-y-2.5">
            {#each $initiative[position] as character (character.id)}
                <!-- Workaround for https://github.com/isaacHagoel/svelte-dnd-action/issues/186 -->
                {#if character.isDndShadowItem}
                    <div><Character/></div>
                {:else}
                    <div><Character id={character.id} position={position}/></div>
                {/if}
            {/each}

            <div class="flex flex-col space-between space-y-2.5">
            {#if position === 'left'}
                <AddButton on:click={addCharacter}/>
            {:else}
                <Button on:click={nextRound}>Next Round</Button>
            {/if}
            </div>
        </section>

            
    </div>
</Card>