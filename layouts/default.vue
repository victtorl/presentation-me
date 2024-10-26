<template>
  <div >
    <HeaderBase></HeaderBase>
      <ClientOnly>
        <slot/>
      </ClientOnly>
      <FooterBase />
  </div>
</template>

