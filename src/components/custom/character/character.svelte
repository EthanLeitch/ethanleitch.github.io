<script lang="ts">
    import TrashButton from "$lib/components/custom/iconbutton/trash.svelte";
    import GripVertical from "lucide-svelte/icons/grip-vertical";

    // Class theme
	/*import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;

    export { className as class };*/

    // shadcn imports
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";

    // Internal logic
    import { initiative } from "$lib/stores/stoneburner";

    export let id = "";
    export let position: 'left' | 'right' = 'left';

    $: self = findInArray(id);

    function findInArray(target: string) {
        console.log("Attempted to find", id);
        return $initiative[position].find(item => item.id === target) || {"id": "", "name": "", "res": null, "atk": null};
    }

    function destroySelf() {
        $initiative[position] = $initiative[position].filter(m => m !== self);
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