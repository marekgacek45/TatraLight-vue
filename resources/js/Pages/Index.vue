<template>
  <div>
      <!--HEAD-->
      <Head
          title="Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne"
      >
          <meta
              name="description"
              content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
          />
      </Head>
      <!--LAYOUT-->
      <MainLayout>
          <!--HEADER-->
          <template #headerContent>
              <VideoBackground />
              <HeadingBox heading="TatraLight"
                  >Pozwól nam wnieść światło do Twojego biznesu i
                  przekształcić przestrzeń w coś wyjątkowego!</HeadingBox
              >
          </template>
          <!--MAIN-->
          <template #mainContent>
              <div class="container-box">
                  <div class="border-box text-box">
                      <h3 class="heading">
                         Od naklejki po Reklamy Świetlne
                      </h3>
                      <div class="flex justify-center">
                          <img
                              src="/assets/logo/logo--sign-dark.png"
                              alt=""
                              class="w-5 opacity-30"
                          />
                      </div>
                      <div class="text">
                          <p>
                              Jesteśmy pasjonatami unikalnych rozwiązań w
                              dziedzinie reklamy świetlnej i nietuzinkowych
                              dekoracji.
                          </p>
                          <p>
                              Nasza oferta obejmuje nie tylko litery 3D,
                              kasetony, lightboxy i neony, ale także wiele
                              innych innowacyjnych pomysłów, które sprawią, że
                              Twoja przestrzeń stanie się niezwykle wyjątkowa.
                          </p>
                      </div>
                  </div>
                  <div class="border-box image-box">
                      <img
                          src="/assets/images/big/tl-big_30.webp"
                          alt="nasza realizacja w Fitness Factory" class="hidden sm:block"
                      />
                      <img
                          src="/assets/images/small/tl-small_30.webp"
                          alt="nasza realizacja w Fitness Factory" class="sm:hidden"
                      />
                  </div>
              </div>

              <div class="container-box">
                  <div class="border-box image-box order-1 md:order-none">
                      <img
                          src="/assets/images/big/tl-big_18.webp"
                          alt="nasze realizacja weselna"
                          class="hidden sm:block"
                      />
                      <img
                          src="/assets/images/small/tl-small_18.webp"
                          alt="nasze realizacja weselna"
                          class="sm:hidden"
                      />
                  </div>

                  <div class="border-box text-box">
                      <h3 class="heading">
                          Nasze Dekoracje Przyciągają Uwagę
                      </h3>
                      <div class="flex justify-center">
                          <img
                              src="/assets/logo/logo--sign-dark.png"
                              alt=""
                              class="w-5 opacity-30"
                          />
                      </div>
                      <div class="text">
                          <p>
                              Dla nas każdy projekt to sztuka, dlatego
                              tworzymy niepowtarzalne oznaczenia i dekoracje,
                              dopasowane do indywidualnych potrzeb klientów.
                              Nasze rozwiązania nie tylko przyciągają uwagę,
                              ale również zachwycają jakością wykonania i
                              pomysłowością.
                          </p>
                          <p>
                              Z nami Twoja przestrzeń nabierze nowego blasku,
                              a Twoja marka zyska niezapomniany charakter. i
                              do tej czesci potrzebuje krotki naglowek
                          </p>
                      </div>
                  </div>
              </div>

              <Footer customClass="py-3"></Footer>
          </template>
      </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import VideoBackground from "./Shared/Header/VideoBackgorund.vue";
import Footer from "./Shared/Footer.vue";

import HeadingBox from "@/Components/HeadingBox.vue";
</script>

<style scoped>
.container-box {
  @apply flex flex-col md:flex-row gap-4 h-full;
}

.text-box {
  @apply md:w-7/12 py-8 md:py-0 px-8 md:px-4 lg:px-16 xl:px-4 2xl:px-8 flex flex-col justify-center gap-6;
}

.heading {
  @apply text-3xl xl:text-2xl 2xl:text-3xl text-center uppercase  text-fontHeading;
}

.text {
  @apply space-y-4 font-medium text-base xl:text-sm 2xl:text-base;
}

.image-box {
  @apply md:w-5/12 max-h-[412px];
}

.image-box img {
  @apply h-full w-full object-cover object-center hover:scale-110 duration-300;
}
</style>