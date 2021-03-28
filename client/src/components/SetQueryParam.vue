<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="queryParam" placeholder="Enter artist name">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "SetQueryParam",
  data() {
    return {
      queryParam: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.queryParam.trim()) {

        this.$emit('fetch-albums', this.queryParam);
        this.queryParam = '';
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  width: 100%;
  justify-content: center;
}
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
