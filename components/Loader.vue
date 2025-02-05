<template>
      <div  class=" fullscreenfixed h-full absolute w-[100vw] z-40 flex justify-center items-center bg-[#00FA9A] ">
                <div class="loader" ></div>
      </div>
</template>

<script setup  >

</script>



<style>
.fullscreenfixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;   /* Ancho del 100% del viewport */
  height: 100vh;  /* Altura del 100% del viewport */
  /* background-color: rgba(0, 0, 0, 0.8);  Color de fondo semitransparente */
  /* background-color: white; */
  z-index: 9999; 
}
</style>