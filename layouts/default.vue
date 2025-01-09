<template>
  <div >
    <HeaderBase></HeaderBase>
      <ClientOnly>
        <div class="pt-[80px] lg:pt-[20px]">
          <slot/>
        </div>
      </ClientOnly>
      <FooterBase />
  </div>
</template>