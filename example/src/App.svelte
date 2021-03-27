<script lang="ts">
  import { ripple, setGlobalRippleColor } from "svelte-material-ripple";

  setGlobalRippleColor("orange");
</script>

<main>
  <button use:ripple class="mat-button">Material Button</button>
</main>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mat-button {
    position: relative;
    border: none;
    outline: none;
    padding: 0.75em 1em;
    background-color: #ab47bc;
    color: white;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 0.25em;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.34);
    transition: all 200ms;
    font-family: "Roboto";
    font-size: 0.9em;
    overflow: hidden;
  }

  .mat-button:active {
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.48);
  }
</style>
