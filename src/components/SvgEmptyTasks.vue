<script setup lang="ts">

import SvgEmpty from '@/assets/Clipboard.svg';
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <img class="size-16 inline-block" :src="SvgEmpty" alt="">
    <div class="flex flex-col items-center">
      <span class="font-bold text-base text-zinc-700">Você ainda não tem tarefas cadastradas</span>
      <span class="text-base text-zinc-700" >Crie tarefas e organize seu dia</span>
    </div>
  </div>
</template>
