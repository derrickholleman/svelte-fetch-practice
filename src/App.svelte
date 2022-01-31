<script>
  import Movies from "./Movies.svelte";
  import RandomNumbers from "./RandomNumbers.svelte";
</script>

<main>
  <h1>Svelte Fetch Practice</h1>

  <h2>Movies</h2>
  <Movies />

  <h2>Random Number</h2>
  <RandomNumbers />
</main>

<style>
  h1 {
    margin: 1rem auto 2rem auto;
  }
  h2 {
    margin: 2rem auto 1rem auto;
  }
</style>
