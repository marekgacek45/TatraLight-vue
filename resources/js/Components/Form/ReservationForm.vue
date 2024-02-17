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
    captcha_token: null,
});

defineProps({
    form: Object,
    errors: Object,
    recaptcha_site_key: String,
});

const sendForm = ref(false);

const recaptcha = async () => {
    // (optional) Wait until recaptcha has been loaded.
    await recaptchaLoaded();

    // Execute reCAPTCHA with action "login".
    form.captcha_token = await executeRecaptcha("login");
    submit();
    // Do stuff with the received token.
};

const submit = () => {
    form.post("/kontakt", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
        },
    });
};
</script>
