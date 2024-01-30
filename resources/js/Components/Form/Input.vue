<template>
    <input
    :value="modelValue" @input="updateValue" class="text-black w-full border-1 border-primaryColor rounded-lg focus:ring-3 focus:ring-primaryColor focus:border-primaryColor"
        
    />
    
</template>

<script setup>
const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
