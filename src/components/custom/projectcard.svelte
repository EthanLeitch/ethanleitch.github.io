<script lang="ts">
    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import ExternalLink from "lucide-svelte/icons/external-link";

    let title = "";
    let link = "";

    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;

    export { className as class };

    let badges: [{"name": "", "class": ""}] = [];
    export { title, link, badges }
</script>

<Card class={cn("p-4 flex flex-col", className)}>
    <CardTitle>
        {title}
    </CardTitle>
    <CardContent class="p-0 py-3 px-2">
        <slot/>
    </CardContent>
    <CardFooter class="p-0 px-2 flex flex-row gap-2 align-bottom mt-auto">
        {#if badges}
            {#each badges as badge}
                <Badge class={badge.class}>{badge.name}</Badge>
            {/each}
        {/if}
        <p><u><a href={"https://github.com/EthanLeitch/" + link + "?tab=readme-ov-file#" + link} target="_blank">GitHub ↗</a></u></p>

        <!--{#each badges as badge}
            <Badge class={badge.colour}>{badge.name}</Badge>
        {/each}-->
    </CardFooter>
</Card>
