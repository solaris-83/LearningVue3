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

let title = ref('')
let year = ref()
const titlePlaceholder = 'Movie title'
const yearPlaceholder = 'Year'

function addMovie() {
  if (!title.value || !year.value) 
    return
  movies.push({title : title.value, year : year.value})
  title.value = ''
  year.value = null
}

const isAddButtonDisabled = computed(() => 
   !title.value || !year.value
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
              <input id="titleInput" class="form-control" v-model="title" :placeholder="titlePlaceholder">
            </div>

            <div class="col-md-3">
              <input id="yearInput" type="number" class="form-control" v-model="year" :placeholder="yearPlaceholder">
            </div>

            <div class="col-md-2">
              <button @click="addMovie()" :disabled="isAddButtonDisabled" class="btn btn-primary w-100">
                Add Movie
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
