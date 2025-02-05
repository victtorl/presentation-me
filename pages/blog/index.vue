<template>
    <div class=" w-full dark:bg-gray-900 py-[60px] h-auto">

<div class="w-full mx-auto py-10 px-4 md:px-8">
    <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Entradas del blog
        </h2>
    </div>
    <div class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3 h-full ">
       
       <article v-for="item in articulos"   @click="articuloST.setarticle(item)"
            class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
            <NuxtLink :to="item.slug" >
            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 object-cover w-full h-full -z-10">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

            <p class="text-lg font-semibold leading-6 text-white hover:text-teal-100" >
                {{ item.title }}
            </p>
          </NuxtLink>
        </article>




    </div>
</div>

</div>
  </template>
  
  <script setup>
import { useBlogtStore } from '~/stores/blogs';


const articuloST=useBlogtStore()  

const articulos=ref([
  {
    title:'Como usar el resultado de una promesa',
    slug:'/blog/resultado-de-una-promesa',
    urlmixcontent:'https://mixcontent.netlify.app/blogs/resultado-de-una-promesa'
  },
  {
    title:'Metodos con arreglos (SPLICE)',
    slug:'/blog/metodos-con-arreglos-splice',
    urlmixcontent:'https://mixcontent.netlify.app/blogs/metodos-con-arreglos-splice'
  },
  {
    title:'Metodos con arreglos (SLICE)',
    slug:'/blog/metodos-con-arreglos-slice',
    urlmixcontent:'https://mixcontent.netlify.app/blogs/metodos-con-arreglos-slice'
  },
  {
    title:'Metodos con arreglos (FILTER)',
    slug:'/blog/metodos-con-arreglos-filter',
    urlmixcontent:'https://mixcontent.netlify.app/blogs/metodos-con-arreglos-filter'
  },
  {
    title:'Metodos con arreglos (MAP)',
    slug:'/blog/metodos-con-arreglos-map',
    urlmixcontent:'https://mixcontent.netlify.app/blogs/metodos-con-arreglos-map'
  }, 
  
])

  </script>