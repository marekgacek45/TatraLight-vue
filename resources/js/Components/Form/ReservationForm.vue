<template>
    <form
        v-if="!sendForm"
        @submit.prevent="submitForm"
        method="post"
        class="mt-6"
    >
    <div class="flex gap-6">
        <div class="w-1/2">

        
        <Field>
            <Input
                id="name"
                type="text"
                placeholder="Imię i Nazwisko"
                v-model="form.name"
                required
                />
                <Error v-if="form.errors.name">{{ form.errors.name}}</Error>
        </Field>
    </div>
    <div class="w-1/2">

   <Field>
            <Input
                id="phone"
                type="tel"
                placeholder="Telefon"
                v-model="form.phone"
                
            />
            <Error v-if="form.errors.phone">{{ form.errors.phone}}</Error>
        </Field>
       
    </div>
    </div>
    <Field>
            <Input
                id="email"
                type="email"
                placeholder="Email"
                v-model="form.email"
                required
            />
            <Error v-if="form.errors.email">{{ form.errors.email}}</Error>
        </Field>
       
        <div>
            <textarea
                rows="4"
                class="text-black w-full border-1 border-primaryColor rounded-lg focus:ring-3 focus:ring-primaryColor focus:border-primaryColor"
                id="message"
                placeholder="Wiadomość"
                v-model="form.message"
            ></textarea>
            <Error v-if="form.errors.message">{{ form.errors.message}}</Error>
        </div>

       <div class="mt-2">
           
           <PrimaryButton type="submit" :disabled="form.processing">Wyślij</PrimaryButton>
        </div>
      
    </form>

    <div v-else>
        <FormSuccess></FormSuccess>
    </div>
</template>

<script setup>
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
import Field from "@/Components/Form/Field.vue";
import Input from "@/Components/Form/Input.vue";
import FormSuccess from "@/Components/Form/FormSuccess.vue";
import TextArea from "@/Components/Form/TextArea.vue";
import Error from "@/Components/Form/Error.vue"

import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";



const form = useForm({
    name: "",
    email: "",
    // phone: "",
    // date: "",
    message: "",
});

defineProps({ errors: Object })

const sendForm = ref(false);

const submitForm = () => {
    form.post("/kontakt", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
        },
    });
};
</script>
