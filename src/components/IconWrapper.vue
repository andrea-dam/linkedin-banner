<template>
    <div class="relative flex flex-col items-center justify-center gap-1">
        <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-50 p-2.5">
            <Icon :icon="icon" :class="[iconSize, 'w-full']" />
        </div>
        <span class="absolute -bottom-8 text-xl font-semibold text-neutral-50 drop-shadow-md">{{ iconName }}</span>
    </div>
</template>

<script setup>
defineProps({ icon: String, iconSize: String, iconName: String });
</script>
