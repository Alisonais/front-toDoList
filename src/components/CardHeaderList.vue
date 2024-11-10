<script setup lang="ts">
interface props {
  totalTask: number,
  taskComplete: number
}


const props = defineProps<props>();

</script>

<template>
  <header class="w-[400px] md:w-[600px] lg:w-[800px] py-3  flex justify-between my-10 mx-3 border-b-[1px] border-zinc-500/50 ">
    <span class="text-blue-500 text-sm font-bold ">Tarefas criadas
      <span class="bg-zinc-700 text-gray-50 px-1.5 rounded-lg">{{ totalTask }}</span>
    </span>
    <span class="text-blue-700 text-sm font-bold ">Concluidas
      <span class="bg-zinc-700 text-gray-50 px-1.5 rounded-lg">{{ taskComplete }} de {{ totalTask }}</span>
    </span>
  </header>
</template>
