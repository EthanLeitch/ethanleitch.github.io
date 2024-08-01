<script lang="ts">
    import TrashButton from "$lib/components/custom/iconbutton/trash.svelte";

    import { Card, CardTitle, CardContent, CardFooter } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";

    export let id = 0;

    function destroyThisMan() {
        alert('destroyed');
    }
</script>

<Card>
    <CardTitle>
        <Input type="text" placeholder="Name" class="max-w-xs" />
        <TrashButton on:click={destroyThisMan}/>
        id: {id}
    </CardTitle>
</Card>