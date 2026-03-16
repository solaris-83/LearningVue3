<template>
    <div style="border: red 1px solid">
       Name:  {{ name }} <br/>
       Email:  {{ email }} <br/>
       Phone: {{ phone }}<br/>
       Variable string: {{ variable }}<br/>
       <button @click="handleClick(name)" :class="isFavorite ? 'btn btn-success' : 'btn btn-warning'">
        {{ isFavorite ? 'Add to' : 'Remove from ' }} contacts list
       </button>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonCounter from './ButtonCounter.vue';

const props = defineProps({ 
    name : {type: String, required : true, default : 'Missing name' }, 
    email : String, 
    phone : Number, 
    variable: String,
    isFavorite: Boolean }) // specify a validation for Props

    function handleClick(name : String){
        console.log(name)
    }
</script>