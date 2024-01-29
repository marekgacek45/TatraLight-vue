<template>
    
    <div class="absolute inset-0 w-full h-full bg-black opacity-30 -z-10"></div>

        <video autoplay loop muted poster="/assets/images/poster-small.webp" class="video md:hidden ">
            <source src="/assets/videos/home-small.mp4" type="video/mp4">
            Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
        <video autoplay loop muted poster="/assets/images/poster-big.webp" class="video hidden md:block">
            <source src="/assets/videos/home-big.mp4" type="video/mp4">
            Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>


        </template>



<style scoped>
.video{
    @apply absolute inset-0 w-full h-full object-cover -z-50
}
</style>