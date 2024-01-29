import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xs: "450px",
            },
            colors: {
                primaryColor: "#16514f",
                secondaryColor: "#efe5d9",
                overlayColor: "#185c5a",
                antracit: "#383e42",
                beige: "#efe5d9",


                bgLight:"#efe5d9",
                bgDark:"#16514f",

                fontLight:'#efe5d9',
                fontDarK:'#000000',
                fontHeading:'#16514f',
            },
        },
    },

    plugins: [forms],
};
