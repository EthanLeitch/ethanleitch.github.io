<script lang="ts">
    import Trash from "lucide-svelte/icons/trash-2";
    import { Button } from "$lib/components/ui/button/index.js";
  </script>
   
  <Button variant="destructive" size="icon" on:click>
    <Trash
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
    />
    <span class="sr-only">Delete</span>
</Button>