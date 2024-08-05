<script lang="ts">
    import Pencil from "lucide-svelte/icons/pencil";
    import { Button } from "$lib/components/ui/button/index.js";
  </script>
   
  <Button variant="outline" size="icon" on:click>
    <Pencil
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
    />
    <span class="sr-only">Edit Character Attributes</span>
</Button>