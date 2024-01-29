<template>
    <div
        class="hamburger group"
        @click="toggle" style="z-index: 1000000000000000"
    >
        <div class="bar1 group-hover:translate-y-1"></div>
        <div class="bar2"></div>
        <div class="bar3 group-hover:-translate-y-1"></div>
    </div>
</template>

<script>
export default {
    methods: {
        toggle() {
            this.$el.classList.toggle("change");
        },
    },
};
</script>

<style scoped>
.hamburger {
    @apply inline-block border border-secondaryColor bg-secondaryColor border-opacity-50 rounded-lg px-2 py-1  hover:bg-opacity-80 transition-colors cursor-pointer
}

.bar1,
.bar2,
.bar3 {
    @apply bg-primaryColor w-5 duration-300;
    height: 1px;
    margin: 5px 0;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}
.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>
