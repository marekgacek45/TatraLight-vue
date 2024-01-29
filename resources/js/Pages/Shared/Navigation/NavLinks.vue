<template>
    <Link href="/">
        <img
            src="/assets/logo/logo--white.png"
            alt="logo firmy TatraLight"
            class="w-28"
    /></Link>

    <Link href="/o_nas" class="hidden sm:block nav-link"> O nas </Link>
    <Link href="/realizacje" class="hidden sm:block nav-link">
        Realizacje
    </Link>
    <Link href="/kontakt" class="hidden sm:block nav-link"> kontakt </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<style scoped>
.nav-link {
    @apply border border-transparent rounded-lg px-2 py-2 uppercase transition-all;
}
.nav-link:hover {
    @apply border-secondaryColor border-opacity-50;
}
</style>
