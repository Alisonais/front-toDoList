<script setup lang="ts">
import HeaderToDoList from '@/components/HeaderToDoList.vue';
import { Toaster } from 'vue-sonner';
import ListCards from './components/ListCards.vue';

</script>

<template>
  <Toaster :toastOptions="{
    style: {
      background: '#27272a',
      borderColor: '#09090b',
      color: '#9ca3af'
     },
    class: 'my-toast',
    descriptionClass: 'my-toast-description'
  }"/>
  <HeaderToDoList />
  <div class="flex flex-col items-center bg-zinc-900">
    <ListCards />
  </div>

</template>

<style scoped></style>
