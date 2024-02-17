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
        <MainLayout bgImage="bg-[url('/assets/images/small/tl-small_5.webp')] sm:bg-[url('/assets/images/big/tl-big_5.webp')] bg-cover bg-center bg-gray-300 bg-blend-multiply">
            <!--HEADER-->
            <template #headerContent>
                
                <HeadingBox heading="Realizacje"
                    >Inspiruj się naszymi projektami i zobacz, jak możemy wnieść światło i magię do Twojego biznesu!</HeadingBox
                >
            </template>
            <!--MAIN-->
            <template #mainContent>
             
             <div class="overflow-x-auto " style="z-index: 10000000000;">
             
                 <silent-box class="silentbox group" :gallery="gallery" ></silent-box>
             </div>
             <Footer customClass="py-4"></Footer>
             
                          
                         </template>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import VideoBackground from "./Shared/Header/VideoBackgorund.vue";

import HeadingBox from "@/Components/HeadingBox.vue";


import { ref } from 'vue'

const props = defineProps({
  images: Array
})

const gallery = ref(props.images)







</script>

<style >


  
 .silentbox > a {
	display: flex;
	justify-content: center;
	align-items: center;
    overflow: hidden;
    
    
}
.silentbox > a> img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform .6s;
    @apply rounded-xl hover:scale-110
}



.silentbox {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit,  1fr);
	grid-auto-rows: 100px;
	grid-auto-flow: dense;
    
}



@media (min-width: 450px) { 
	.silentbox {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 200px;
		grid-auto-flow: dense;
	}
}

#silentbox-overlay__arrow-buttons .arrow:hover, #silentbox-overlay__arrow-buttons .arrow:focus{
    @apply border-l-2 border-t-2 border-primaryColor
}

#silentbox-overlay__close-button .icon:before:hover, #silentbox-overlay__close-button .icon:after:hover{
    @apply bg-white;
}


</style>
