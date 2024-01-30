<template>
    <div>
        <!--HEAD-->
        <Head title="Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne">

            <meta name="description" content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni." />
        </Head>
<!--LAYOUT-->
        <MainLayout>
<!--HEADER-->
<template #headerContent>
<VideoBackground/>
<HeadingBox heading="TatraLight">Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!</HeadingBox>
</template>
<!--MAIN-->
            <template #mainContent>

                <div class="grid-wrapper px-2">
              
                <a v-for="(image, index) in images" :key="index" :class="getRandomClass()">
      <img :src="image.path" :alt="image.filename">
      <!-- inne elementy UI lub informacje o obrazie -->
                </a>
                    
            </div>

                
            </template>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import VideoBackground from './Shared/Header/VideoBackgorund.vue'
import Footer from "./Shared/Footer.vue";

import HeadingBox from "@/Components/HeadingBox.vue"; 

import { ref } from 'vue';

const props = defineProps(['images']);

const getRandomClass = () => {
  const classes = ['tall', 'wide', 'big'];
  return classes[Math.floor(Math.random() * classes.length)];
};

</script>

<style scoped>

.container-box{
    @apply flex flex-col md:flex-row gap-4 h-full
}

.text-box {
    @apply md:w-7/12 py-12 md:py-0 px-8 md:px-4 2xl:px-12 flex flex-col justify-center gap-6;
}

.heading {
    @apply text-3xl uppercase mb-6 sm:mb-0 text-fontHeading;
}

.text {
    @apply space-y-4 ;
}

.image-box{
    @apply  md:w-5/12 max-h-[400px]
}

.image-box img{
    @apply  h-full w-full object-cover object-center hover:scale-110 duration-300
}

.grid-wrapper > a {
	display: flex;
	justify-content: center;
	align-items: center;
}
.grid-wrapper > a> img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform .6s;
}

.grid-wrapper {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit,  1fr);
	grid-auto-rows: 100px;
	grid-auto-flow: dense;
}

.grid-wrapper .wide {
	grid-column: span 1;
}
.grid-wrapper .tall {
	grid-row: span 2;
}
.grid-wrapper .big {
	grid-column: span 2;
	grid-row: span 2;
}

@media (min-width: 450px) { 
	.grid-wrapper {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 200px;
		grid-auto-flow: dense;
	}
}



</style>
