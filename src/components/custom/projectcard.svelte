<script lang="ts">
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import EditButton from "$lib/components/custom/iconbutton/edit.svelte";

    let title = "";
    let link = "";

    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;

    export { className as class };
    
    //let badges: [{"name": "", "colour": ""}] = [];
    export { title, link }
</script>

<Card class={cn("p-4", className)}>
    <CardTitle>
        {title}
    </CardTitle>
    <CardContent>
        <slot/> 
    </CardContent>
    <CardFooter class="p-0">
        <p><u><a href={"https://github.com/EthanLeitch/" + link + "?tab=readme-ov-file#" + link} target="_blank">View on GitHub</a></u></p>

        <!--{#each badges as badge}
            <Badge class={badge.colour}>{badge.name}</Badge>
        {/each}-->
    </CardFooter>
</Card>