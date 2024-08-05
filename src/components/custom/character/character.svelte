<script lang="ts">
    import TrashButton from "$lib/components/custom/iconbutton/trash.svelte";
    import EditButton from "$lib/components/custom/iconbutton/edit.svelte";

    import GripVertical from "lucide-svelte/icons/grip-vertical";
    import { Button } from "$lib/components/ui/button/index.js";

    import { Label } from "$lib/components/ui/label";

    import { Switch } from "$lib/components/ui/switch/index";

    // Class theme
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;

    export { className as class };

    // shadcn imports
    import { Card, CardTitle, CardContent, CardFooter, Title } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";

    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Collapsible from "$lib/components/ui/collapsible/index.ts";

    import * as Dialog from "$lib/components/ui/dialog/index.ts";

    // Internal logic
    import { initiative } from "$lib/stores/stoneburner";

    export let id = "";
    export let position: 'left' | 'right' = 'left';

    $: self = findInArray(id);

    function findInArray(target: string) {
        // console.log("Attempted to find", id);
        return $initiative[position].find(item => item.id === target) || {"id": "", "name": "", "notes": "", "res": null, "res_max": null, "atk": null, "atk_max": null};
    }

    function destroySelf() {
        $initiative[position] = $initiative[position].filter(m => m !== self);
    }

    function write(event) {
        self.res_max = event.target.value;
        console.log(self);
    }
</script>

<Card class={cn("p-2.5", className)}>
    <CardTitle>
        <Collapsible.Root class="space-y-2.5">
                <div class="flex flex-row space-between space-x-2.5 items-center flex-wrap sm:flex-nowrap">
                    <div><GripVertical class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/></div>
                    <Input type="text" placeholder="Name" bind:value={self.name} class="basis-1/2" /> <!-- bind:value={findInArray(id)} -->
                    <Input type="number" placeholder="⚔️" step=2 min=0 bind:value={self.atk} max={self.atk_max} class="basis-1/6"/>
                    <Input type="number" placeholder="❤️" min=0 bind:value={self.res} max={self.res_max} class="basis-1/6"/>
                    

                    <Collapsible.Trigger asChild let:builder>
                        <Button builders={[builder]} variant="ghost" size="icon" class="basis-6">
                        <ChevronsUpDown class="h-4 w-4" />
                        <span class="sr-only">Toggle</span>
                        </Button>
                    </Collapsible.Trigger>
                </div>

                <Collapsible.Content>
                    <div class="flex flex-row space-x-2.5">
                        <Textarea placeholder="Notes" bind:value={self.notes} />

                        <div class="flex flex-col space-y-2.5">
                            <div>
                                <Dialog.Root>
                                    <Dialog.Trigger><EditButton/></Dialog.Trigger>

                                    <Dialog.Content>
                                        <Dialog.Header>
                                            <Dialog.Title>Edit {self.name}</Dialog.Title>
                                        </Dialog.Header>

                                        <Label for="atk_max">⚔️ Max Attack</Label>
                                        <Input type="number" id="atk_max" step=2 min=0 placeholder="Max Attack" bind:value={self.atk_max} />
                                        <Label for="res_max">❤️ Max Resilience</Label>
                                        <Input type="number" id="res_max" min=0 placeholder="Max Resilience" bind:value={self.res_max} />

                                        <Dialog.Footer>
                                            <Dialog.Close><Button type="submit">Done</Button></Dialog.Close>
                                        </Dialog.Footer>
                                    </Dialog.Content>
                                </Dialog.Root>
                            </div>
                            <div><TrashButton on:click={destroySelf}/></div>
                        </div>
                    </div>
                </Collapsible.Content>
            
        </Collapsible.Root>
    </CardTitle>
</Card>