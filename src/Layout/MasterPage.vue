<template>
  <div>
    <!-- Nav -->
    <NavBar />

    <!-- Content -->
    <slot />
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "MasterPage",
  components: { NavBar },
};
</script>