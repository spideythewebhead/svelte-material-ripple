<script lang="ts">
  import { ripple } from "./useRipple";
  // a css color format
  export let color = "rgba(0,0,0,.48)";
</script>

<span class="ripple-container" use:ripple={color}>
  <slot />
</span>

<style>
  .ripple-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: inherit;
  }
</style>
