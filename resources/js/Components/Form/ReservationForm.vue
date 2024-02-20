<template>
    <form
        v-if="!sendForm"
        @submit.prevent="recaptcha"
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
                    <Error v-if="form.errors.name">{{
                        form.errors.name
                    }}</Error>
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
                    <Error v-if="form.errors.phone">{{
                        form.errors.phone
                    }}</Error>
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
            <Error v-if="form.errors.email">{{ form.errors.email }}</Error>
        </Field>

        <div>
            <textarea
                rows="4"
                class="text-black w-full border-1 border-primaryColor rounded-lg focus:ring-3 focus:ring-primaryColor focus:border-primaryColor"
                id="message"
                placeholder="Wiadomość"
                v-model="form.message"
                required
            ></textarea>
            <Error v-if="form.errors.message">{{ form.errors.message }}</Error>
        </div>
<div class="my-2">

    <span class="text-xs">
        Ta strona jest chroniona przez reCAPTCHA i obowiązuje ją
        <a href="https://policies.google.com/privacy" target="_blank">Polityka Prywatności</a> and
        <a href="https://policies.google.com/terms" target="_blank">Warunki Korzystania </a>z usługi Google.</span>
    </div>

        <div class="mt-2">
            <PrimaryButton type="submit" :disabled="form.processing"
                >Wyślij</PrimaryButton
            >
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
import Error from "@/Components/Form/Error.vue";

import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const form = useForm({
    name: "",
    email: "",
    message: "",
    phone:"",
    captcha_token: null,
});

defineProps({
    form: Object,
    errors: Object,
    recaptcha_site_key: String,
});

const sendForm = ref(false);

const recaptcha = async () => {
    await recaptchaLoaded();

    form.captcha_token = await executeRecaptcha("login");
    submit();
};

const submit = () => {
    form.post("/send-mail", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
            console.log('udało się');
        },
    });
};
</script>


<!-- <template>
    <div class="flex justify-center items-center mt-40">
      <form @submit.prevent="submit">
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="form.email" />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message"></textarea>
        </div>
        <div>
          <button type="submit" :disabled="form.processing">Send</button>
        </div>
      </form>
    </div>

    <div v-if="sendForm" class="text-center mt-12"><h1 class="text-red-600 text-5xl">formularz został wysłany</h1></div>

  </template>
  
  <script setup>
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue';

const form = useForm({
  email: '',
  message: '',
})

const sendForm = ref(false);

const submit = () => {
    form.post("/send-mail", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
            console.log('udało się');
        },
    });
};


</script> -->