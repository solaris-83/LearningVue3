<template>
    <div style="border: red 1px solid">
       Name:  {{ name }} <br/>
       Email:  {{ email }} <br/>
       Phone: {{ phone }}<br/>
       Variable string: {{ variable }}<br/>
       <button @click="updateFavorite" :class="isFavorite ? 'btn-success' : 'btn-warning'">
        {{ isFavorite ? 'Add to' : 'Remove from ' }} contacts list
       </button>

       <button @click="updateFavoriteWithParam" :class="isFavorite ? 'btn-success' : 'btn-warning'">
        {{ isFavorite ? 'Add to' : 'Remove from ' }} contacts list
       </button>

       <button @click="updateFavoriteWithArrayParam" :class="isFavorite ? 'btn-success' : 'btn-warning'">
        {{ isFavorite ? 'Add to' : 'Remove from ' }} contacts list
       </button>

       <button @click="updateFavoriteWithObject" :class="isFavorite ? 'btn-success' : 'btn-warning'">
        {{ isFavorite ? 'Add to' : 'Remove from ' }} contacts list
       </button>
    </div>
</template>

<style>
.btn-success
{
    background-color: green;
    color: white;
}
.btn-warning
{
    background-color: yellow;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonCounter from './ButtonCounter.vue';

const props = defineProps({ 
    name : {type: String, required : true, default : 'Missing name' }, 
    email : String, 
    phone : Number, 
    variable: String,
    isFavorite: Boolean }) // specify a validation for Props

const emits = defineEmits(["update-favorite", "update-favorite-with-param", "update-favorite-with-array-param", "update-favorite-with-object"])

    function handleClick(name : String){
        console.log(name)
    }

function updateFavorite() {
    emits("update-favorite")
}

function updateFavoriteWithParam() {
    emits("update-favorite-with-param", props.isFavorite)
}

function updateFavoriteWithArrayParam() {
    emits("update-favorite-with-array-param", [props.isFavorite, props.name])
}

function updateFavoriteWithObject() {
    emits("update-favorite-with-object", { isFavorite: props.isFavorite, name: props.name })
}
</script>