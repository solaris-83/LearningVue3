<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// Local import
import ButtonCounter from './components/ButtonCounter.vue';
import { reactive, ref } from 'vue';

const email = ref('pippo@gmail.com')
let variableString = ref('')

const contacts = reactive([{
  "email" : "pippo@gmail.com", 
  "name" : "pippo", 
  "phone" : 12223,
  "variable" : variableString, 
  "isFavorite" : false
},
{
  "email" : "pluto@gmail.com", 
  "name" : "pluto", 
  "phone" : 3333,
  "variable" : variableString, 
  "isFavorite" : true
},
{
  "email" : "paperino@gmail.com", 
  "name" : "paperino", 
  "phone" : 4444,
  "variable" : variableString, 
  "isFavorite" : true
}])

</script>

<template>
 <!--<HelloWorld />-->
  <my-component :email="email" :phone="234444" name="fdffdfdffff121111"/>  <!-- for not string (e.g. Number ) we have to use v-bind -->
  <hr>
  <p>Variable string: </p><input type="text" placeholder="Enter a value" v-model="variableString" />
  <div v-for="contact in contacts" :key="contact.name">
    <my-component :email="contact.email":phone="contact.phone" :name="contact.name" :variable="variableString" :isFavorite="contact.isFavorite"/>
  </div>
  <ButtonCounter/>
  <ButtonCounter/>
</template>
