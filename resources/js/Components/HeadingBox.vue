<template>
    <div class="absolute bottom-32 left-10  ">

<h1 class=" text-5xl xs:text-6xl sm:text-8xl text-fontLight heading">{{heading}}</h1>
<p class="pt-2 text-sm xs:text-base sm:text-lg font-extralight heading text-fontLight mr-16"><slot></slot></p>
</div>
</template>



<script setup>

defineProps({
    heading:String
})



</script>

<style scoped>
.heading{
    text-shadow: 2px 2px 5px black;
}
</style>