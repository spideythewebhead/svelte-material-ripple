<script lang="ts">
  import { ripple } from "./useRipple";

  // a css color format
  export let color = "rgba(144, 144, 144, 0.48)";
</script>

<span class="ripple-container" use:ripple={color}>
  <slot />
</span>

<style>
  .ripple-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
</style>
