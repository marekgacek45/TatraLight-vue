<template>
    <ul class="flex gap-1 sm:gap-2">
        <li>
            <Link href="/">
                <img
                    src="/assets/logo/logo--white.png"
                    alt="logo firmy TatraLight"
                    class="w-28"
                />
            </Link>
        </li>
        <li>
            <Link href="/o_nas" class="nav-link"> O nas </Link>
        </li>
        <li>
            <Link href="/realizacje" class="nav-link"> Realizacje </Link>
        </li>
        <li>
            <Link href="/kontakt" class="nav-link"> kontakt </Link>
        </li>
    </ul>
</template>

<style scoped>
.nav-link {
    @apply border border-transparent rounded-lg px-2 py-2 uppercase transition-all hidden sm:block;
}
.nav-link:hover {
    @apply border-secondaryColor border-opacity-50;
}
</style>
