

<template>

    <div>
      <h1>État du store</h1>
      <p>formData: {{ formData }}</p>
    </div>
</template>

<script>
  export default {
    computed: {
      formData() {
        return this.$store.getters.formData;
      },
    },
  }
</script>

<style scoped>

</style>
