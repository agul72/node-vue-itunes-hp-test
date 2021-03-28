<template>
  <div class="home">
    <SetQueryParam
        @fetch-albums="fetchAlbums"
    />
    <br>
    <input type="text" v-model="filter" placeholder="Enter filter">
    <hr>
    <Loader v-if="loading"/>
    <AlbumList
        v-else-if="filteredAlbums.length"
        v-bind:albums="filteredAlbums"
    />
    <p v-else>No albums!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SetQueryParam from "../components/SetQueryParam";
import AlbumList from "../components/AlbumList";
import Loader from "../components/Loader";

export default {
  name: 'Home',
  components: {
    AlbumList,
    SetQueryParam,
    Loader
  },
  data() {
    return {
      albums: [],
      loading: false,
      filter: ''
    }
  },
  mounted() {

  },
  computed: {
    filteredAlbums() {
      if (this.filter) {
        return this.albums.filter(album =>
            album.title.toLowerCase().includes(this.filter.toLowerCase()));
      }
      return this.albums;
    }
  },
  methods: {
    fetchAlbums(queryParam) {
      fetch('/api/search/' + queryParam)
          .then(res => res.json())
          .then(json => {
            console.log(json);
            this.albums = json;
            this.loading = false;
          });
      this.filter = '';
    }
  },
}
</script>

<style >
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input[type=text] {
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid seagreen;
  width: 50%;
}
</style>
