<template>
  <table>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Link</th>
    </tr>
    <AlbumItem
        v-for="(album, i) of albums"
        v-bind:album="album"
        v-bind:key="i"
    />
  </table>
</template>

<script>
import AlbumItem from "./AlbumItem";

export default {
  name: "AlbumList",
  components: {AlbumItem},
  props: ['albums'],
  methods: {}
}
</script>

<style scoped>
table {
  width: 90%;
}

table, th, tr {
  text-align: center;
  padding: 5px;
}

tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: lightskyblue;
}

th {
  background-color: #4CAF50;
  color: white;
  padding: 10px 0;
}
</style>
