<script lang="ts">
    import type { Talk } from "$lib/types";
    import Speakers from "./Speakers.svelte";
    export let talks: Talk[];
    console.log(talks)
</script>

<div>
    Talks!
</div>
<ul>
    {#each talks as talk }
    <div class="container mx-auto bg-blue-400 m-4">
        <li>
            <h1><span>{talk.title}</span></h1>
            <h2><span>{talk.time}</span></h2>
        </li>
    </div>
    {/each}
</ul>