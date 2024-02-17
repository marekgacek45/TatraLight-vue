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
                
                heading: ["LEMONMILK", "sans-serif"],
                text: ["Open Sans", "sans-serif"],
            },
            screens: {
                xs: "390px",
            },
            colors: {
                primaryColor: "#16514f",
                secondaryColor: "#efe5d9",
               


                bgLight:"#efe5d9",
                bgDark:"#16514f",

                fontLight:'#efe5d9',
                fontDark:'#333333',
                fontHeading:'#16514f',
            },
        },
    },

    plugins: [forms],
};
