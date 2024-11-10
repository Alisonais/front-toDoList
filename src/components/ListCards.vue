<script setup lang="ts">
import type { ITask } from '@/types';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import CardHeaderList from './CardHeaderList.vue';
import InputCardlistAll from './InputCardlistAll.vue';
import InputCreateCard from './InputCreateCard.vue';


onMounted(() => {
  axios.get('http://192.168.100.120:8000/api/todolist')
    .then((res) => {
      if (res.data.status === true) {
        cardArray.value = res.data.Task;
        countTask();
      };
    });
})

const totalTask = ref(0);
const taskComplete = ref(0);
const cardArray = ref();


function countTask() {
  if (cardArray.value) {
    totalTask.value = cardArray.value.length;
  }

  if (totalTask.value !== 0 && cardArray.value.length > 0) {
    taskComplete.value = cardArray.value.reduce((totalCompleted: number, card: ITask) => {
      return totalCompleted + (card.completed === 1 ? 1 : 0);
    }, 0);
  }
}

function handleCreateTask(task: string) {
  let data:string = '';
  const taskObj: ITask = {
    description: task,
  };
  const promise = () =>
  axios.post('http://192.168.100.120:8000/api/todolist', taskObj).then((res) => {
    data = res.data.message;
    const newTask = res.data.task;
    cardArray.value.unshift(newTask);
    console.log(cardArray.value);
    countTask();
  }).catch((res)=>{
    data = res.response.data.message;
  });

  toast.promise(promise,{
    loading: 'Criando Tarefa...',
    success:()=> data,
    error: ()=> data,
  })

};

function handleCardComplete(task: ITask) {
  let data: string = 'null';
  const promise = () =>
    axios.put(`http://192.168.100.120:8000/api/todolist/${task.id}`, task).then((res) => {
      data = res.data.message;
      cardArray.value = cardArray.value.map((item: ITask) => {
        if (item.id === task.id) {
          item.completed = item.completed === 1 ? item.completed = 0 : item.completed = 1;
          return { ...item };
        } else {
          return { ...item }
        }
      })
      countTask();
    }).catch((res)=>{
      data = res.response.data.message;
      throw new Error(res.response.data.message);
    })

  toast.promise(promise, {
    loading: 'Loading...',
    success: () => data,
    error: () => data,
  });
};

function handleRemoveTask(id: number) {
  let data:string;
  const promise = () =>
  axios.delete(`http://192.168.100.120:8000/api/todolist/${id}`).then((res) => {
    cardArray.value = cardArray.value.filter((item: ITask) => {
      return item.id !== id
    });
    data = res.data.message;
    countTask();
  }).catch((res)=>{
    data = res.response.data.message;
    throw new Error();
  });

  toast.promise(promise,{
    loading: 'deletando tarefa...',
    success: ()=> data,
    error: ()=> data,
  })

}


</script>

<template>
  <InputCreateCard :onCreate="handleCreateTask" />
  <CardHeaderList :totalTask='totalTask' :taskComplete="taskComplete" />
  <InputCardlistAll :cards='cardArray || []' :onComplete="handleCardComplete" :onRemove="handleRemoveTask" />

</template>
