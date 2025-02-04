<template>
    <div class="bg-white px-6 py-32 lg:px-0">
      <iframe class="w-[100vw] h-[100vh]" :src="articuloST?.article.urlmixcontent" frameborder="0"></iframe>
    </div>
  </template>



<script setup>
import { useBlogtStore } from '~/stores/blogs';


const articuloST=useBlogtStore()




</script>