<script lang="ts">
  import { ripple } from "./useRipple";

  // a css color format
  export let color = "rgba(255, 255, 255, 0.48)";
</script>

<span class="ripple-container">
  <slot />

  <span class="ripple" use:ripple={color} />
</span>

<style>
  * {
    box-sizing: border-box;
  }

  .ripple-container {
    position: relative;
    display: inline-block;
  }

  .ripple {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>
