<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    import AddButton from "$lib/components/custom/iconbutton/add.svelte";
    import Character from "$lib/components/custom/character/character.svelte";

    let characters = [
        0
    ];
	let index = 0;

    function addCharacter() {
        //console.log(characters);
        index++;
        characters = [...characters, index];
        console.log(characters);
    }
</script>

{#each characters as character}
	<Character id={character}/>
{/each}

<AddButton on:click={addCharacter}/>