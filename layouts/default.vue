<template>
  <div >
    <HeaderBase></HeaderBase>
        <div class="pt-[80px] lg:pt-[20px]">
          <ClientOnly>
            <slot/>
          </ClientOnly>
        </div>
      <FooterBase />
  </div>
</template>