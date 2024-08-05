<script lang="ts">
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";

    let title = "";

    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;

    export { className as class };
    
    //let badges: [{"name": "", "colour": ""}] = [];
    export { title }
</script>

<Card class={cn("p-4", className)}>
    <CardTitle>
        {title}
    </CardTitle>
    <CardContent>
        <slot/> 
    </CardContent>
    <!--<CardFooter>
        {#each badges as badge}
            <Badge class={badge.colour}>{badge.name}</Badge>
        {/each}
    </CardFooter>-->
</Card>