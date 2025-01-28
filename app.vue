<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Loader v-if="loader" ></Loader>
  </div>
</template>


<script setup>
const loader=ref(true)
onMounted(() => {
  loader.value=false
  console.log(loader);
  
})

</script>