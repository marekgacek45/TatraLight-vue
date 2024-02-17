<template>
    <div>
        <!--HEAD-->
        <Head
            title="Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne"
        >
            <meta
                name="description"
                content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
            />
        </Head>
        <!--LAYOUT-->
        <MainLayout>
            <!--HEADER-->
            <template #headerContent>
                <VideoBackground />
                <HeadingBox heading="TatraLight"
                    >Pozwól nam wnieść światło do Twojego biznesu i
                    przekształcić przestrzeń w coś wyjątkowego!</HeadingBox
                >
            </template>
            <!--MAIN-->
            <template #mainContent>
                <div class="border-box h-full flex flex-col justify-center items-center text-center gap-4 lg:gap-12 py-12 lg:py-0">

                    <h1 class=" font-heading text-6xl">Niestety nie ma takiej strony</h1>
                    
                    <button  @click="back">powrót</button>
                </div>

                <Footer customClass="py-3"></Footer>
            </template>
        </MainLayout>
    </div>
</template>





<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import VideoBackground from "./Shared/Header/VideoBackgorund.vue";
import Footer from "./Shared/Footer.vue";

import HeadingBox from "@/Components/HeadingBox.vue";

const props = defineProps({ status: Number })





const back = () => {
  window.history.back()
}
</script>