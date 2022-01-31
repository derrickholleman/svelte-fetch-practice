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
    {#each movies.slice(0, 5) as movie (movie.id)}
      <Movie {movie} />
    {/each}
  {/if}
</div>
