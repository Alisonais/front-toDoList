<script setup lang="ts">
import type { ITask } from '@/types';
import { CheckCircledIcon, CircleIcon } from '@radix-icons/vue';
import ModalDelete from './ModalDelete.vue';
import SvgEmptyTasks from './SvgEmptyTasks.vue';
import { Card } from './ui/card';
import CardDescription from './ui/card/CardDescription.vue';


interface props {
  cards: {
    id: number;
    description: string;
    completed: number;
  }[],
  onComplete: (card:ITask) => void
  onRemove: (id: number) => void
};

const props = defineProps<props>();

</script>

<template>

  <div v-show="cards.length === 0" >
    <SvgEmptyTasks />
  </div>

  <div  v-show="cards" class="flex flex-col gap-4 mb-10">
    <Card  v-for="card in cards" :key="card.id"
      :class=" card.completed === 0
      ? 'flex flex-row items-center justify-between gap-2 rounded-[12px] bg-zinc-800 border-[1px] border-zinc-600 p-4 w-[350px] md:w-[600px] lg:w-[800px] min-h-[72px]'
      :'flex flex-row items-center justify-between gap-2 rounded-[12px] bg-zinc-800/50 border-[1px] border-zinc-600/50 p-4 w-[350px] md:w-[600px] lg:w-[800px] min-h-[72px]'">

      <div @click="() => onComplete(card)">
        <div v-if="card.completed === 0">
          <CircleIcon class="stroke-blue-700 hover:stroke-blue-500 size-5 lg:size-8 " />

        </div>
        <div v-if="card.completed === 1">
          <CheckCircledIcon class="stroke-green-700 hover:stroke-green-500 size-5 lg:size-8 " />
        </div>
      </div>

      <CardDescription v-if="card.completed === 0" class="text-zinc-100">
        {{ card.description }}
      </CardDescription>
      <CardDescription v-if="card.completed === 1" class="text-zinc-100/50">
        <del>{{ card.description }}</del>
      </CardDescription>

      <div>
          <ModalDelete :onRemove="()=>onRemove(card.id)"  />
      </div>
    </Card>
  </div>
</template>
