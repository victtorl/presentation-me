<template>
    <header class="bg-white fixed z-20 w-full">
      <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a  class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="(item,index) in navigation" :key="item.name" :href="item.href" @click="setNavItem(index+1)"
          :class="`${selectNavItem==index+1?' text-caribbean-green':''}`"
           class="text-sm/6 font-semibold ">
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a  class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-20" />
        <DialogPanel class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a  class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" 
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                {{ item.name }}
                </NuxtLink>
                <!-- <NuxtLink to="/" 
                :class="`${`/`==state.linkTo?' text-caribbean-green':''}`"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" >
                  Victor Lara
                </NuxtLink>
                <NuxtLink to="/proyectos" 
                 class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" >
                  Proyectos
                </NuxtLink>
                <NuxtLink to="/blog" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" >
                  Blog
                </NuxtLink>
                <NuxtLink to="/contacto" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" >
                  Contácto
                </NuxtLink> -->
              </div>
              <div class="py-6">
                <a  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const selectNavItem=ref(1)

  onMounted(() => {
    if(localStorage.getItem('tabitem')===null){
      selectNavItem.value=1
    }else{
      selectNavItem.value=localStorage.getItem('tabitem')
    }
  })

  const setNavItem=(indx) => {
    selectNavItem.value=indx
    localStorage.setItem("tabitem",indx);
  }
  const navigation = [
    { name: 'Victor Lara', href: '/' },
    { name: 'Proyectos', href: '/proyectos',},
  //  { name: 'Componentes', href: '/componentes' },
    { name: 'Blog', href: '/blog',},
    { name: 'Contacto', href: '/contacto',},
  ]
  
  const mobileMenuOpen = ref(false)


const routez = useRoute();
const state=reactive({
    linkTo:routez.path
})
watch(
  () => routez.path,
  () => {
    state.linkTo=routez.path
    console.log(state.linkTo);
    
  },
)

  </script>