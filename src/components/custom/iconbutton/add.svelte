<script lang="ts">
    /*import type { HTMLInputAttributes } from "svelte/elements";
    import { cn } from "$lib/utils.js";

    type $$Props = HTMLInputAttributes;

    export let size: $$Props["size"] = undefined;*/

    import Add from "lucide-svelte/icons/circle-plus";
    import { Button } from "$lib/components/ui/button/index.js";
</script>
   
<Button variant="outline" size="default" style="primary" on:click>
    <Add
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
    />
    <span class="sr-only">Add</span>
</Button>