<script>
  import { onMount } from "svelte";
  let number;
  let loading

  onMount(async () => {
      loading = true
    try {
      const numbersRes = await fetch(
          // needed to enable 'Moesif Origin & CORS Changer' extension to get around CORS
        "http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1000&count=1"
      );
      const numbersJSON = await numbersRes.json();
      number = numbersJSON.join(" ");
      loading = false
    } catch (err) {
      throw new Error(err.message);
    }
  });
</script>

<div>
    {#if !loading}
    Your random number is: {number}
    {:else}
    <p>Loading...</p>
    {/if}
</div>
