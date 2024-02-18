<script setup>

import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    name:""
})

const submit= () =>{
    form.post(route('contact'))
}

</script>


<template>
    <div>
        <h1>test</h1>

        <form @submit.prevent="submit" >


<input type="text" v-model="form.name">

<button type="submit">submit</button>

        </form>
    </div>
</template>