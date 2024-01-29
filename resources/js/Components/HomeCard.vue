<template>
  
        <Link :href="href" as="div" class="border-box h-full w-full group  relative opacity-90 hover:opacity-100 duration-300  cursor-pointer  bg-cover bg-center bg-no-repeat " :class="bgImage">
          

               <div
               class="bg-bgDark absolute bottom-0 right-0 px-4 py-2 flex items-center justify-center gap-3 rounded-tl-2xl opacity-100"
               >
               <h6 class="text-fontLight uppercase font-heading tracking-widest">
                   {{ title }}
                </h6>
                <div
                class="border border-fontLight rounded-full p-1 overflow-hidden flex relative"
                >
                
                <img src="/assets/icons/arrow-right.svg" alt=""  class="group-hover:translate-x-10 duration-300 fill-secondaryColor w-3 h-3">
                <img src="/assets/icons/arrow-right.svg" alt=""   class="absolute -translate-x-7 group-hover:translate-x-0 duration-300 fill-secondaryColor w-3 h-3">
                
            </div>
            </div>
        
        
        
        </Link>
    
</template>

<script setup>

defineProps({
    href:String,
    title:String,
    bgImage:String,
})
</script>