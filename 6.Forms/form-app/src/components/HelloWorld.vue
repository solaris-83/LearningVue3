<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

function handleSubmit() {
  console.log(formObj)
}

function validateEmail(){
  formObj.isMailValid = formObj.email.includes('@')
}

const formObj = reactive({
  email: "", 
  name : "",
  phone : "",
  subscribe: false, 
  gender : "",
  isMailValid: true
})


</script>

<style>

</style>

<template>
 <div class="container">
  <form @submit.prevent="handleSubmit()">
    <div class="bg-info p-5 rounded m-5">
      <div class ="h2 text-center"> Learn Vue - Forms</div>
      <hr/>
      <div class="input-group mb-3">
        <span class="input-group-text">Email</span>
        <input type="text" class="form-control" @blur="validateEmail()" v-model.trim="formObj.email"/>
        <div v-show="!formObj.isMailValid">Email is not valid</div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Name</span>
        <input type="text" class="form-control" v-model.trim="formObj.name"/>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Phone</span>
        <input type="text" class="form-control" v-model.number="formObj.phone"/>
      </div>

      <div class="input-group mb-3">
        <input type="checkbox" class="form-check-input" v-model="formObj.subscribe"/>
        <label class="form-check-label">&nbsp; Subscribe here</label>
      </div>

      <div class="border p-1">
        <label class="form-label">Gender</label><br/>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="formObj.gender" 
          value="male" name="inlineRadioButton">Male </input>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="formObj.gender" 
          value="female" name="inlineRadioButton">Female </input>
        </div>
        </div>

        <br/>
        <hr/>
        <select id="gender" v-model="formObj.gender" class="form-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

      <div class="text-center pb-3">
        <button class="btn btn-secondary m-2 w-50">Submit</button>
      </div>
    </div>
  </form>
 </div>
</template>
