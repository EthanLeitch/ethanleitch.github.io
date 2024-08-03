<script>
    import { initiative } from "$lib/stores/stoneburner.ts";
</script>

<style>
    section {
        width: 50%;
        padding: 0.3em;
        border: 1px solid black;
        /* this will allow the dragged element to scroll the list although starting in version 0.9.41 the lib would detect any scrollable parent*/
        overflow: scroll;
        height: 200px;
    }
    div {
        width: 50%;
        padding: 0.2em;
        border: 1px solid blue;
        margin: 0.15em 0;
    }
</style>

<p>{$initiative.toString()}</p> <!-- bind:value={findInArray(id)} -->