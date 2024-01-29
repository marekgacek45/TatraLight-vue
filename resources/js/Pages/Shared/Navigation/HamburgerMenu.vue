<template>
    <transition>
        <div
            v-if="showModal"
            class="bg-bgLight fixed lg:absolute top-0 bottom-0 right-0 left-0 z-40 overflow-hidden"
        >
            <div class="modal flex justify-center items-center flex-col gap-5">
                <img src="/assets/logo/logo--sign.png" alt="logo firmy TatraLight" class="w-5 opacity-50">
                <Link href="/menu" class="link" @click="addOverflow">O nas</Link>
                
                <Link href="/o-nas" class="link" @click="addOverflow">Realizacje</Link>
                <Link href="/o-nas" class="link" @click="addOverflow">Dołącz do nas</Link>
                <Link href="/kontakt" class="link" @click="addOverflow">Kontakt</Link>
                <img src="/assets/logo/logo--sign.png" alt="logo firmy TatraLight" class="w-5 opacity-50">
            </div>
        </div>
    </transition>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    showModal: Boolean,
});
const body = document.querySelector("body");

const addOverflow = () => {
    body.classList.remove("overflow-y-hidden");
};
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @apply rounded-xl z-40 bg-bgDark;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.link {
    @apply text-fontLight text-5xl text-center  sm:text-6xl lg:text-7xl uppercase opacity-80 hover:opacity-100 transition-opacity;
}
</style>
