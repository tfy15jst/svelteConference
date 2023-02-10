<script>
    import Conference from "./Conference.svelte";
    import Days from "./Days.svelte";

    export let data;
    let { conference } = data;
</script>

<main>
    <div>
        <Conference {conference}/>
        <Days days={conference.days}/>
    </div>
</main>