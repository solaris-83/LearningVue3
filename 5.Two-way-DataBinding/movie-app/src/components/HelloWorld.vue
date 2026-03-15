<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

let movies = reactive([
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 }
]);

let newMovie = reactive({title : '', year : null})


const titlePlaceholder = 'Movie title'
const yearPlaceholder = 'Year'

function addMovie() {
  if (!newMovie.title || !newMovie.year) 
    return
  movies.push({title : newMovie.title, year : newMovie.year})
  newMovie.title = ''
  newMovie.year = null
}

function removeLastMovie() {
  if (movies.length > 0)
    movies.pop()
}

const isAddButtonDisabled = computed(() => 
   !newMovie.title || !newMovie.year
)

const isRemoveButtonDisabled = computed(() => 
   movies.length === 0
)

</script>

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
              <input id="yearInput" type="number" class="form-control" v-model="newMovie.year" :placeholder="yearPlaceholder">
            </div>

            <div class="col-md-2">
              <button @click="addMovie()" :disabled="isAddButtonDisabled" class="btn btn-primary w-100">
                Add Movie
              </button>
              <button @click="removeLastMovie()" :disabled="isRemoveButtonDisabled" class="btn btn-danger w-100">
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
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody id="movieTable">
          <tr v-for="item in movies" :key="item.title">
            <th>{{ item.title }}</th>
            <th>{{ item.year }}</th>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>
