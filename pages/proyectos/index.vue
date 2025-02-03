<template>
   <div class="w-full dark:bg-gray-800 py-[60px]">

<div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
    <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Acerca de mis proyectos</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Una seleccion de algunos de mis proyectos
        </p>
    </div>
    <div
        class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        <!-- First blog post -->
        <article  v-for="item in proyectos"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img :src="item.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                    datetime="2023-10-11" class="mr-8">{{ item.date }}</time>
                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                        class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div class="flex gap-x-2.5">
                        <div  class="h-6 w-6 flex-none rounded-full bg-white"/>
                        {{ item.author.name }}
                    </div>
                </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <NuxtLink target="_blank" :to='item.href'><span class="absolute inset-0"></span>
                    {{ item.title }}
                </NuxtLink>
            </h3>
        </article>


    </div>
</div>

</div>
  </template>
  
  <script setup>

 import img1 from '~/assets/images/projects/electratec.png'
 import img3 from '~/assets/images/projects/limafirma.png'
 import img4 from '~/assets/images/projects/belanova.png'

  const proyectos = [
    {
      id: 1,
      title: 'Sistema de gestion de ordenes para venta de productos eléctricos',
      href: 'https://electratec.netlify.app/',
      description:
        'Vista del sistema de gestion de ordenes para  venta de productos eléctricos',
      imageUrl:img1,
      date: '14/01/2024',
      datetime: '2020-03-16',
      category: { title: 'sistema', href: '#' },
      author: {
        name: 'Victor Lara',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Página de aterrizaje de una web de crecimiento personal',
      href: 'https://www.centroproactiva.com/',
      description:
        'Página de aterrizaje de una web de crecimiento personal',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: '14/01/2024',
      datetime: '2020-03-16',
      category: { title: 'sistema', href: '#' },
      author: {
        name: 'Victor Lara',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Página de aterrizaje firma de abogados',
      href: 'https://www.limafirma.pe/',
      description:
        'Página de aterrizaje de una web de firma de abogados',
      imageUrl:img3,
      date: '03/02/2025',
      datetime: '2020-03-16',
      category: { title: 'sistema', href: '#' },
      author: {
        name: 'Victor Lara',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 4,
      title: 'Buscador de canciones usando el api de Deezer',
      href: 'https://search-songs-app.netlify.app/',
      description:
        'Buscador de canciones usando el api de Deezer',
      imageUrl:img4,
      date: '03/02/2025',
      datetime: '2020-03-16',
      category: { title: 'sistema', href: '#' },
      author: {
        name: 'Victor Lara',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },

  ]


  </script>