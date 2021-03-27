<script lang="ts">
  import { Ripple } from "svelte-material-ripple";
</script>

<main>
  <Ripple>
    <button class="mat-button">Material Button</button>
  </Ripple>
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
  }

  .mat-button:active {
    box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.48);
  }
</style>
