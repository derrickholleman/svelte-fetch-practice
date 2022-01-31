<script>
  import Movie from "./Movie.svelte";
  import { onMount } from "svelte";

  let movies = [];

  onMount(async () => {
    try {
      const moviesRes = await fetch("https://ghibliapi.herokuapp.com/films/");
      const moviesJSON = await moviesRes.json();
      movies = moviesJSON;
    } catch (err) {
      throw new Error(err.message);
    }
  });
</script>

<div>
  {#if movies}
    {#await movies}
      <p>Loading...</p>
    {:then moviesRes}
      {#each moviesRes.slice(0, 5) as movie (movie.id)}
        <Movie {movie} />
      {/each}
    {:catch error}
      <p>{error.message}</p>
    {/await}
  {/if}
</div>
