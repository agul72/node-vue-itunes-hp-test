<template>
  <tr>
    <td><img :src="album.thumb" alt=""></td>
    <td>{{ album.title }}</td>
    <td><a :href="album.review" target="_blank">Preview</a></td>
  </tr>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    album: {
      type: Object,
      required: true
    },
  }
}
</script>

