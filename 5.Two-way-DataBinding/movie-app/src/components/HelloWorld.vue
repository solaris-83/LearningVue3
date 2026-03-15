<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

let movies = reactive([
  { checked: true, title: "Inception", year: 2010 },
  { checked: false, title: "Interstellar", year: 2014 },
  { checked: false, title: "The Matrix", year: 1999 }
]);

let newMovie = reactive({ checked: false, title: '', year: null })

let showMessage = ref(false)

const titlePlaceholder = 'Movie title'
const yearPlaceholder = 'Year'

function addMovie(): void {
  if (!newMovie.title || !newMovie.year)
    return
  movies.push({ checked: newMovie.checked, title: newMovie.title, year: newMovie.year })
  newMovie.title = ''
  newMovie.year = null
}

function removeMovie(): void {
  let cnt = movies.filter((m) => m.checked)
  cnt.forEach(m => {
    let idx = movies.indexOf(m)
    if (idx > -1)
      movies.splice(idx, 1)
  })
}

const isAddButtonDisabled = computed(() =>
  !newMovie.title || !newMovie.year
)

const isRemoveButtonDisabled = computed(() =>
  movies.filter((movie) => movie.checked).length == 0
)

watch(movies, () => {
  showMessage.value = movies.length >= 5;
})

</script>

<style>
.active {
  color: red;
}
</style>

<template>
  <div class="bg-light">
    <div class="container mt-5">

      <h2 class="mb-4">Movie List</h2>

      <!-- Add Movie Form -->
      <div class="card mb-4">
        <div class="card-body">

          <div class="row g-2">
            <div class="col-md-5">
              <input id="titleInput" class="form-control" v-model="newMovie.title" :placeholder="titlePlaceholder">
            </div>

            <div class="col-md-3">
              <input id="yearInput" type="number" class="form-control" v-model="newMovie.year"
                :placeholder="yearPlaceholder">
            </div>

            <span :style="{ fontWeight: 'bold', color: 'red' }" v-if="showMessage">You can only add 5
              movies</span>

            <div class="col-md-2">
              <button @click="addMovie()" v-show="!showMessage" :disabled="isAddButtonDisabled"
                class="btn btn-primary w-100">
                Add Movie
              </button>
              <button @click="removeMovie()" :disabled="isRemoveButtonDisabled" class="btn btn-danger w-100">
                Remove Movie
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- Movie Table -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody id="movieTable">
          <tr v-for="item in movies" :key="item.title">
            <th><input type="checkbox" v-model="item.checked"></input></th>
            <th><span :class="{ active: item.checked }">{{ item.title }}</span></th>
            <th><span :class="{ active: item.checked }">{{ item.year }}</span></th>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>
