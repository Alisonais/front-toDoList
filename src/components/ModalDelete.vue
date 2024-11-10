<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { TrashIcon } from '@radix-icons/vue';

interface props {
  onRemove:(id:number)=> void,
}

defineProps<props>();

</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <TrashIcon class=" stroke-0 size-6 lg:size-9 text-red-700 hover:text-red-500" />
    </AlertDialogTrigger>
    <AlertDialogContent class="bg-zinc-800 border-none w-[90%] rounded-[12px]" >
      <AlertDialogHeader>
        <AlertDialogTitle class="text-blue-500" >Esta ação é definitiva</AlertDialogTitle>
        <AlertDialogDescription>
          Já concluiu mais uma, então vamos para a proxima!
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction :onclick="(id:number) => onRemove(id)" class="bg-red-700 hover:bg-red-500" >Deletar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
