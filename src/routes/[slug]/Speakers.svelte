<script lang="ts">
    import type { Speaker } from "$lib/types";
    export let speakers: Speaker[];
</script>

<ul class="container mx-auto bg-red-400 m-4">
    {#each speakers as speaker}
        <li>{speaker.name}</li>
        <li>{speaker.title}</li>
        <li><img src={speaker.imageUrl}/></li>
    {/each}
</ul>