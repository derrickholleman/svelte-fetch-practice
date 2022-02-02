<script>
  import Movie from "./Movie.svelte";
  import { movies } from './stores/movieStore'
</script>

<div>
  {#if $movies}
    {#each $movies.slice(0, 5) as movie (movie.id)}
      <Movie {movie} />
    {/each}
  {/if}
</div>
