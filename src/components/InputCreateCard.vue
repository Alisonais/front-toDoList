<script setup lang="ts">
import { PlusCircledIcon } from '@radix-icons/vue';
import { ref } from 'vue';
import Button from './ui/button/Button.vue';
import Input from './ui/input/Input.vue';

interface props {
  onCreate: (task:string)=> void;
};

const props = defineProps<props>();

const task = ref('');

function handleSendTaskClearInput(){
  props.onCreate(task.value);
  task.value = '';
}


</script>

<template>
  <div class="relative flex flex-row gap-1 md:gap-4 lg:gap-8 w-[350px] md:w-[600px] lg:w-[800px]  justify-between top-[-20px]">
    <Input v-model="task" class="bg-zinc-800 border-zinc-950 text-zinc-300" placeholder="Adicione uma nova tarefa" />
    <Button :onclick="()=>handleSendTaskClearInput()" :disabled="task === ''" class="flex gap-1 bg-blue-800 lg:h-12 hover:bg-blue-600 hover:text-white/70 disabled:bg-cyan-950 ">
      Criar
      <PlusCircledIcon />
    </Button>
  </div>
</template>
