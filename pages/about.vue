<template>
  <v-layout
    column
  >
    <v-flex
      md8
      sm12
      xs8
    >
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "about",
        created() {
            this.$root.$emit("loading", false);
            this.$root.$emit("about", true)
        }
    }
</script>

<style scoped>
  .about-card-text {
    letter-spacing: 0.5px;
  }

  .data-div {
    margin-top: 10px;
  }
</style>
