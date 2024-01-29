<template>
    <transition name="fade" mode="out-in" appear>
        <div class="flex flex-col xl:flex-row gap-4">
            <header class="border-box xl:w-6/12 h-[96vh] relative">
                <Header></Header>
            </header>

            <main class=" xl:w-6/12 2xl:h-[96vh] relative flex flex-col gap-4 ">
                <slot name="mainContent"> </slot>

                
            </main>
        </div>
    </transition>
</template>

<script setup>
import Footer from "@/Pages/Shared/Footer.vue";
</script>

<style>
.border-box {
    @apply border border-primaryColor rounded-lg border-opacity-50 hover:border-opacity-100 duration-300 overflow-hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>
