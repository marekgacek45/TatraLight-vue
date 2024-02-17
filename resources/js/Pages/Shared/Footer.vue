<template>
    <footer
        class="border-box lg:mb-4 xl:mb-0  flex flex-col gap-2 sm:gap-0 sm:flex-row justify-evenly items-center bg-bgDark text-fontLight"
        :class="customClass"
    >
        <Link href="/polityka_prywatnosci" class="link"
            >Polityka Prywatności</Link
        >
        <img src="/assets/logo/logo--sign.png" alt="" class="decoration" />
        <Link href="/" class="link">
        <span
            ><span class="text-sm">©{{ year }}</span> Tatralight</span
        ></Link>
        <img src="/assets/logo/logo--sign.png" alt="" class="decoration" />
        <a href="https://marekgacekdev.pl" target="_blank" class="link"
            >created by Marek Gacek</a
        >
    </footer>
</template>

<script setup>
defineProps({ customClass: String });

const today = new Date();
const year = today.getFullYear();
</script>

<style scoped>
.link {
    @apply text-sm hover:scale-105 transition-transform;
}

.decoration {
    @apply w-4 opacity-50;
}
</style>
