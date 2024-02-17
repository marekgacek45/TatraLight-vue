<template>
   <div class="flex justify-center items-center gap-2">
                            <img
                                src="/assets/logo/logo--sign-dark.png"
                                alt=""
                                class="w-3 opacity-50"
                            />
                                <h3 class=" text-3xl xl:text-2xl 2xl:text-3xl text-center uppercase  text-fontHeading heading"><slot></slot></h3>

                            
                            <img
                                src="/assets/logo/logo--sign-dark.png"
                                alt=""
                                class="w-3 opacity-50"
                            />
                        </div>
</template>

<style scoped>
.heading {
    @apply text-3xl xl:text-2xl 2xl:text-3xl text-center uppercase  text-fontHeading;
}
</style>