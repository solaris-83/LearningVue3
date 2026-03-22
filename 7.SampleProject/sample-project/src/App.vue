<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// Local import
import ButtonCounter from './components/ButtonCounter.vue';
import { reactive, ref } from 'vue';

const email = ref('pippo@gmail.com')
let variableString = ref('')

const contacts = reactive([{
  "email": "pippo@gmail.com",
  "name": "pippo",
  "phone": 12223,
  "variable": variableString,
  "isFavorite": false
},
{
  "email": "pluto@gmail.com",
  "name": "pluto",
  "phone": 3333,
  "variable": variableString,
  "isFavorite": true
},
{
  "email": "paperino@gmail.com",
  "name": "paperino",
  "phone": 4444,
  "variable": variableString,
  "isFavorite": true
}])

function updateFavoriteWithParam(isFavoriteFromChild: boolean)  {
  console.log(isFavoriteFromChild)
  return !isFavoriteFromChild
}

function updateFavoriteWithArrayParam(oldValueFromChild : any[], phoneNumber: number)  {
  console.log(`${oldValueFromChild} ${phoneNumber}`)
  return !oldValueFromChild[0]
}

function updateFavoriteWithObject(objectFromChild)  {
  console.log(objectFromChild)
  return !objectFromChild.isFavorite
}

</script>

<template>
  <!--<HelloWorld />-->
  <my-child-component :email="email" :phone="234444" name="fdffdfdffff121111" />
  <!-- for not string (e.g. Number ) we have to use v-bind -->
  <hr>
  <p>Variable string: </p><input type="text" placeholder="Enter a value" v-model="variableString" />

  <my-child-component v-for="contact in contacts" 
  @update-favorite="contact.isFavorite = !contact.isFavorite"
  @update-favorite-with-param="contact.isFavorite = updateFavoriteWithParam($event)"
  @update-favorite-with-array-param="contact.isFavorite = updateFavoriteWithArrayParam($event, contact.phone)"
  @update-favorite-with-object="contact.isFavorite = updateFavoriteWithObject($event)"
    :key="contact.name" :email="contact.email" :phone="contact.phone" :name="contact.name" :variable="variableString"
    :isFavorite="contact.isFavorite" />

 

  <ButtonCounter />
  <ButtonCounter />
</template>
