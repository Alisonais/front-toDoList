<script setup lang="ts">
import HeaderToDoList from '@/components/HeaderToDoList.vue';
import ListCards from './components/ListCards.vue';
import { Toaster } from './components/ui/sonner';

</script>

<template>
  <Toaster theme="dark"/>
  <HeaderToDoList />
  <div class="flex flex-col items-center bg-zinc-900">
    <ListCards />
  </div>

</template>

<style scoped></style>
