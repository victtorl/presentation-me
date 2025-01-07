<template>
  <div >
    <HeaderBase></HeaderBase>
      <ClientOnly>
        <div class="h-[calc(100vh-80px)] bg-orange-600">
          <slot/>
        </div>
      </ClientOnly>
      <FooterBase />
  </div>
</template>

