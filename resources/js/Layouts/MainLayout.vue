<template>
    <transition name="fade" mode="out-in" appear>
        <!--WRAPPER/CONTAINER-->
        <div class="flex flex-col xl:flex-row gap-4">
            <!--HEADER-->
            <header class="border-box xl:w-6/12 h-[96vh] relative " :class="bgImage">
                <NavBar />
                <slot name="headerContent"></slot>
            </header>
            <!--MAIN-->
            <!-- <main class="relative flex flex-col gap-4 xl:w-6/12 lg:h-[96vh] "> -->
            <main class="relative flex flex-col gap-4 xl:w-6/12 xl:h-[96vh] ">
                <slot name="mainContent"> </slot>
            </main>
        </div>
    </transition>
</template>

<script setup>

defineProps({
    bgImage:String
})


</script>

<style>
html{
    @apply text-fontDark
}
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
