<template>
    <nav
        class="border-box absolute top-10 left-10 flex justify-center items-center py-2 px-2 sm:px-4 space-x-5 bg-bgDark text-fontLight text-sm uppercase  " 
    >
        <Hamburger @click="showModal = !showModal" />

        <teleport to="body">
            <HamburgerMenu :showModal="showModal" />
        </teleport>

        <NavLinks/>
    </nav>
</template>

<script setup>

import Hamburger from "./Hamburger.vue";
import { ref, onMounted, watch } from "vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import NavLinks from './NavLinks.vue'

const showModal = ref(false);

const body = document.querySelector("body");

onMounted(() => {
    watch(showModal, (newValue) => {
        if (newValue) {
            body.classList.add("overflow-y-hidden");
        } else {
            body.classList.remove("overflow-y-hidden");
        }
    });
});
</script>


