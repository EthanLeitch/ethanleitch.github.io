<script lang="ts">
    import TrashButton from "$lib/components/custom/iconbutton/trash.svelte";
    import GripVertical from "lucide-svelte/icons/grip-vertical";

    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";

   import { initiative } from "$lib/stores/stoneburner";

    export let id = 0;
    $: self = findInArray(id);

    function findInArray(target: number) {
        return $initiative.find(item => item.id === target) || {"id": 0, "name": "", "res": null, "atk": null};
    }

    function destroySelf() {
        $initiative = $initiative.filter(m => m !== self);
    }
</script>

<Card class="p-2.5">
    <CardTitle>
        <div class="flex flex-row space-between space-x-2.5">
            <Input type="text" placeholder="Name" bind:value={self.name} class="flex-3" /> <!-- bind:value={findInArray(id)} -->
            <Input type="number" placeholder="ATK" step=2 bind:value={self.atk} class="flex-none w-16"/>
            <Input type="number" placeholder="RES" bind:value={self.res} class="flex-none w-16"/>
            <TrashButton on:click={destroySelf}/>
        </div>
    </CardTitle>
</Card>