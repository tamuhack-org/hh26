// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
// https://astro.build/config
export default defineConfig({
    image: {
        layout: "constrained",
        breakpoints: [
            480, 640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200,
            3840,
        ],
    },
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Poppins",
            cssVariable: "--font-poppins",
            weights: [400, 600, 700],
            styles: ["normal"],
        },
    ],
});
