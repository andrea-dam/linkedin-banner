<template>
    <div class="flex h-[396px] w-[1584px] justify-between bg-[url('/blurry-gradient-haikei.svg')] bg-center shadow-lg">
        <div class="w-5/12"></div>
        <div class="w-7/12 drop-shadow-md">
            <div class="mt-8 flex flex-col font-display text-neutral-50">
                <h1 class="text-7xl font-bold">Andrea Damiani</h1>
                <h2 class="mt-3 text-5xl italic">Sviluppatore Web Full Stack, Musicista</h2>
            </div>

            <div class="flex w-fit gap-7 pt-10">
                <IconWrapper icon="vscode-icons:file-type-html" icon-name="HTML" icon-size="text-5xl" />
                <IconWrapper icon="vscode-icons:file-type-css" icon-name="CSS" icon-size="text-5xl" />
                <IconWrapper icon="logos:javascript" icon-name="JavaScript" icon-size="text-5xl" />
                <IconWrapper icon="devicon:typescript" icon-name="TypeScript" icon-size="text-5xl" />
                <IconWrapper icon="logos:vue" icon-name="Vue.js" icon-size="text-5xl" />
                <IconWrapper icon="logos:tailwindcss-icon" icon-name="Tailwind" icon-size="text-5xl" />
                <IconWrapper icon="vscode-icons:file-type-php3" icon-name="PHP" icon-size="text-7xl" />
                <IconWrapper icon="logos:laravel" icon-name="Laravel" icon-size="text-5xl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import IconWrapper from "./components/IconWrapper.vue";
</script>
