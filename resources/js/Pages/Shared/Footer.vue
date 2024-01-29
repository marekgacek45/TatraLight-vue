<template>
    <footer class="border-box lg:mb-4 xl:mb-0 px-16 2xl:px-48 py-4  flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center bg-bgDark text-fontLight">
        <Link href="polityka_prywatnosci" class="link">Polityka Prywatności</Link>
        <img src="/assets/logo/logo--sign.png" alt="" class="decoration">
        <span><span class="text-sm">©{{year}}</span> Tatralight</span>
        <img src="/assets/logo/logo--sign.png" alt="" class="decoration">
        <a href="https://marekgacek.pl" target="_blank" class="link">created by Marek Gacek</a>
    </footer>
</template>


<script setup>

const today = new Date();
const year = today.getFullYear()

</script>


<style scoped>
.link{
   @apply text-sm hover:scale-105 transition-transform
}

.decoration{
    @apply w-3 opacity-30
}
</style>