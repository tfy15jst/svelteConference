<script lang="ts">
    import type { Day } from "$lib/types";
    import Speakers from "./Speakers.svelte";
    import Talks from "./Talks.svelte";
    export let days: Day[];
</script>

<div>
    Days!
</div>
<ul>
    {#each days as day }
    <div class="container mx-auto bg-green-400 m-4">
        <li>
            <h1><span>{day.title}</span></h1>
            <h2><span>{day.description}</span></h2>
            <Talks talks={day.talks}/>
            <Speakers speakers={day.speakers}/>
        </li>
    </div>
    {/each}
    
</ul>