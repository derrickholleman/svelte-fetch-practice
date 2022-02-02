import { writable } from "svelte/store";

export const movies = writable([]);

const moviesFetch = async () => {
  try {
    const moviesRes = await fetch("https://ghibliapi.herokuapp.com/films/");
    const moviesJSON = await moviesRes.json();
    movies.set(moviesJSON);
  } catch (err) {
    console.error(err);
  }
};
moviesFetch();
