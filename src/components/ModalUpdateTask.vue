<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ITask } from '@/types';
import { ref } from 'vue';

interface props {
  description: string,
  task: ITask;
  onUpdate: (newDescription: string, task: ITask) => void,
}

defineProps<props>();

const newDescription = ref('');

</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="bg-zinc-800 border-none sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="text-zinc-400 tracking-[2px]">Atualizar tarefa</DialogTitle>
        <DialogDescription>
          Ajuste a descrição da sua tarefa.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="">
          <Label for="description" class="text-right text-zinc-500">
            Descrição
          </Label>
          <Input id="description" v-model="newDescription" :placeholder="description"
            class="bg-zinc-700 text-zinc-300 border-[0,5px] border-zinc-800" />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger as-child>
          <Button class="bg-blue-700 hover:bg-blue-500 " :onclick="() => onUpdate(newDescription, task)">
            Atualizar tarefa
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
