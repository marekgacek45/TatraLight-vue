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
              
                   <div class="border-box overflow-y-scroll">


                    <div v-for="(image, index) in images" :key="index">
      <img :src="image.path" :alt="image.filename"></div>

                       <Footer customClass="py-3"></Footer>
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

defineProps({
    images:Array
})

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

</style>
