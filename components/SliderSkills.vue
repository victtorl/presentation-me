<template>
       <section id="features" class="">
      <div class="mx-auto theme-container px-6 2xl:px-0">
        <h1 class="px-5 bg-white/10 border border-white/20 text-black font-medium rounded-[30px] w-fit mx-auto">
          Algunos skills
        </h1>
        <h2 class="sm:text-48 text-24 font-semibold text-black mb-[42px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          Competencias y habilidades 
        </h2>
        <div class="w-full">
          <div class=" h10-service-slider pt-8 md:pt-14 overflow-hidden">
            <ClientOnly>
              <swiper-container ref="containerRef" :init="false">
                <swiper-slide
                  v-for="(slide, idx) in slides"
                  :key="idx"
                  style="height: auto;"
                >
                <div class="h10-service-card border border-white/10 rounded-[10px] w-64 relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div class="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span class="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_460_34699)">
                          <path
                            d="M44.6089 32.7411L39.9964 30.4348L37.0608 22.7989C37.0263 22.7086 36.9735 22.6264 36.9057 22.5575C36.838 22.4885 36.7567 22.4343 36.6671 22.3981L18.4526 15.1172C18.3253 15.0665 18.1859 15.0542 18.0516 15.0817C17.9173 15.1091 17.7939 15.1753 17.6968 15.2719L15.2675 17.7012C15.1721 17.7985 15.107 17.9214 15.0802 18.055C15.0533 18.1885 15.0659 18.327 15.1163 18.4536L22.3971 36.668C22.4333 36.7577 22.4875 36.8389 22.5565 36.9067C22.6255 36.9744 22.7076 37.0272 22.7979 37.0618L30.4339 39.9973L32.7401 44.6098C32.7887 44.7115 32.861 44.8001 32.9509 44.868C33.0409 44.9359 33.1458 44.9812 33.2569 45.0001C33.2943 45.0035 33.332 45.0035 33.3694 45.0001C33.5556 44.9993 33.7339 44.9247 33.8651 44.7926L44.7917 33.8661C44.8721 33.7885 44.9329 33.6928 44.9689 33.5871C45.005 33.4813 45.0153 33.3684 44.9991 33.2579C44.9802 33.1468 44.9349 33.0418 44.867 32.9519C44.7991 32.8619 44.7106 32.7896 44.6089 32.7411ZM16.5893 18.3622L16.9796 17.9755L26.0464 27.0422C25.4488 27.889 25.1908 28.9291 25.3232 29.9569C25.4556 30.9847 25.9689 31.9254 26.7615 32.593C27.5542 33.2606 28.5685 33.6065 29.6038 33.5622C30.6392 33.518 31.6203 33.0868 32.3531 32.354C33.0859 31.6213 33.517 30.6402 33.5613 29.6048C33.6055 28.5694 33.2597 27.5551 32.5921 26.7625C31.9245 25.9699 30.9837 25.4566 29.9559 25.3241C28.9281 25.1917 27.888 25.4498 27.0413 26.0473L17.9745 16.9805L18.3612 16.5903L35.8585 23.5899L38.6182 30.7688L30.7678 38.6192L23.5889 35.8594L16.5893 18.3622ZM29.4249 26.6942C30.0568 26.6951 30.6689 26.9151 31.1568 27.3167C31.6447 27.7183 31.9783 28.2767 32.1007 28.8966C32.2231 29.5166 32.1268 30.1598 31.8282 30.7167C31.5296 31.2736 31.0471 31.7098 30.463 31.9509C29.8788 32.192 29.2292 32.2231 28.6247 32.0389C28.0202 31.8547 27.4982 31.4667 27.1478 30.9408C26.7973 30.415 26.64 29.7839 26.7026 29.1551C26.7653 28.5263 27.044 27.9386 27.4913 27.4922C28.0046 26.9805 28.7001 26.6935 29.4249 26.6942ZM33.5628 43.1087L31.805 39.593L39.585 31.8129L43.1007 33.5708L33.5628 43.1087Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.4479 37.6169C13.3134 37.4898 13.1354 37.419 12.9504 37.419C12.7654 37.419 12.5874 37.4898 12.453 37.6169L11.56 38.5098C9.17705 35.2756 7.86245 31.3786 7.79943 27.3618C7.73641 23.345 8.92811 19.4086 11.2084 16.1012C11.8916 16.4772 12.6783 16.6216 13.4504 16.5128C14.2226 16.4041 14.9387 16.048 15.4915 15.498C16.0443 14.948 16.4039 14.2337 16.5166 13.4621C16.6292 12.6904 16.4887 11.9031 16.1163 11.218C19.4236 8.9377 23.36 7.746 27.3768 7.80902C31.3936 7.87204 35.2906 9.18664 38.5248 11.5696L37.6178 12.452C37.4871 12.5838 37.4138 12.762 37.4139 12.9477C37.4134 13.0403 37.4311 13.132 37.4661 13.2177C37.5011 13.3033 37.5526 13.3812 37.6178 13.4469L40.7186 16.5231C40.8503 16.6541 41.0285 16.7276 41.2143 16.7276C41.4001 16.7276 41.5783 16.6541 41.71 16.5231L44.7932 13.4399C44.8586 13.3746 44.9104 13.2971 44.9458 13.2117C44.9812 13.1263 44.9994 13.0349 44.9994 12.9425C44.9994 12.85 44.9812 12.7586 44.9458 12.6732C44.9104 12.5878 44.8586 12.5103 44.7932 12.445L41.71 9.36179C41.5783 9.23083 41.4001 9.15732 41.2143 9.15732C41.0285 9.15732 40.8503 9.23083 40.7186 9.36179L39.5268 10.5466C36.5895 8.33627 33.1169 6.9476 29.4654 6.52314C25.814 6.09869 22.1154 6.65375 18.7495 8.13132L22.803 4.08835C23.2626 4.30796 23.7851 4.35768 24.2779 4.22866C24.7707 4.09966 25.2018 3.80026 25.4949 3.38361C25.7879 2.96695 25.9239 2.45996 25.8787 1.95259C25.8335 1.44521 25.61 0.970252 25.2479 0.611967C24.8858 0.253682 24.4085 0.0352343 23.9007 -0.00462093C23.3929 -0.0444761 22.8874 0.0968374 22.4738 0.39425C22.0603 0.691662 21.7655 1.12595 21.6416 1.62006C21.5178 2.11417 21.5731 2.63616 21.7975 3.09343L14.9561 9.94538C14.2615 9.47942 13.4266 9.2691 12.5941 9.35033C11.7616 9.43156 10.9832 9.79931 10.3917 10.3908C9.80027 10.9822 9.43252 11.7607 9.35128 12.5932C9.27005 13.4256 9.48038 14.2605 9.94634 14.9551L3.09439 21.7966C2.63532 21.5729 2.11183 21.5192 1.61691 21.645C1.122 21.7708 0.687723 22.0681 0.391257 22.4838C0.0947911 22.8996 -0.0446659 23.4071 -0.0023324 23.916C0.040001 24.4249 0.261383 24.9023 0.622475 25.2634C0.983567 25.6245 1.46098 25.8459 1.96988 25.8882C2.47879 25.9305 2.98622 25.7911 3.40201 25.4946C3.8178 25.1981 4.11502 24.7639 4.24086 24.2689C4.3667 23.774 4.313 23.2505 4.08931 22.7915L8.14282 18.7485C6.66377 22.1136 6.10696 25.8116 6.52956 29.463C6.95216 33.1144 8.33894 36.5876 10.5475 39.5258L9.35923 40.7176C9.22827 40.8494 9.15476 41.0276 9.15476 41.2133C9.15476 41.3991 9.22827 41.5773 9.35923 41.709L12.4424 44.7923C12.5737 44.9243 12.752 44.9989 12.9381 44.9997C13.0309 44.9997 13.1228 44.9815 13.2085 44.9459C13.2942 44.9103 13.3719 44.8581 13.4374 44.7923L16.5241 41.709C16.655 41.5773 16.7285 41.3991 16.7285 41.2133C16.7285 41.0276 16.655 40.8494 16.5241 40.7176L13.4479 37.6169ZM41.2213 10.8454L43.3096 12.9337L41.2213 15.0219L39.133 12.9337L41.2213 10.8454ZM23.2038 1.62741C23.3082 1.52208 23.4417 1.45016 23.5871 1.42077C23.7325 1.39138 23.8834 1.40585 24.0206 1.46235C24.1577 1.51885 24.2751 1.61482 24.3576 1.7381C24.4402 1.86137 24.4842 2.00639 24.4842 2.15476C24.4842 2.30312 24.4402 2.44814 24.3576 2.57142C24.2751 2.69469 24.1577 2.79067 24.0206 2.84717C23.8834 2.90366 23.7325 2.91814 23.5871 2.88875C23.4417 2.85936 23.3082 2.78744 23.2038 2.6821C23.1344 2.61288 23.0795 2.53068 23.0419 2.44019C23.0044 2.3497 22.9851 2.25271 22.9851 2.15476C22.9851 2.0568 23.0044 1.95981 23.0419 1.86932C23.0795 1.77884 23.1344 1.69663 23.2038 1.62741ZM11.3913 11.3903C11.5954 11.1852 11.8381 11.0224 12.1054 10.9113C12.3727 10.8002 12.6592 10.743 12.9487 10.743C13.2381 10.743 13.5247 10.8002 13.792 10.9113C14.0592 11.0224 14.3019 11.1852 14.5061 11.3903C14.8147 11.6984 15.025 12.0912 15.1104 12.5189C15.1957 12.9466 15.1523 13.39 14.9855 13.793C14.8188 14.1959 14.5363 14.5404 14.1737 14.7828C13.8111 15.0252 13.3848 15.1545 12.9487 15.1545C12.5126 15.1545 12.0862 15.0252 11.7237 14.7828C11.3611 14.5404 11.0786 14.1959 10.9118 13.793C10.7451 13.39 10.7017 12.9466 10.787 12.5189C10.8723 12.0912 11.0826 11.6984 11.3913 11.3903ZM2.68657 24.2575C2.54303 24.3772 2.3599 24.4389 2.17318 24.4305C1.98646 24.422 1.80965 24.3441 1.67748 24.2119C1.54532 24.0797 1.46735 23.9029 1.45892 23.7162C1.45048 23.5295 1.51218 23.3463 1.63189 23.2028C1.77258 23.0645 1.96196 22.987 2.15923 22.987C2.3565 22.987 2.54588 23.0645 2.68657 23.2028C2.75588 23.272 2.81086 23.3542 2.84838 23.4447C2.88589 23.5352 2.9052 23.6322 2.9052 23.7301C2.9052 23.8281 2.88589 23.9251 2.84838 24.0156C2.81086 24.1061 2.75588 24.1883 2.68657 24.2575ZM12.9487 43.2876L10.8604 41.1993L12.9487 39.111L15.037 41.1993L12.9487 43.2876Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_460_34699">
                            <rect width="45" height="45" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h1 class="py-5 font-semibold text-white text-center  h-20 text-20">
                      {{ slide.title }}
                    </h1>
                    <!-- <p class="text-dark-silver text-base leading-7 h-20  pb-1">
                      {{ slide.subtitle }}
                    </p> -->
                    <Link to="/service-details">
                      <div class="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span class="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                          Read More{{ slide }}
                        </span>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </swiper-slide>
              </swiper-container>
            </ClientOnly>
          </div>
        </div>
       
      </div>
    </section>

</template>


<script setup lang="ts">

import img1 from '~/assets/images/porta/aqua.jpeg'
import img2 from '~/assets/images/porta/code-programing.jpg'
import img3 from '~/assets/images/porta/maxresdefault.jpg'
import img4 from '~/assets/images/porta/aqua.jpeg'
import img5 from '~/assets/images/porta/aqua.jpeg'
import img6 from '~/assets/images/porta/aqua.jpeg'
import img7 from '~/assets/images/porta/aqua.jpeg'






const containerRef = ref(null)

const swiper = useSwiper(containerRef,{
    slidesPerView: 1.5,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    parallax:true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      640: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 50,
      },
    },
  })


onMounted(() => {
  // console.log(swiper.instance)
})



const slides=ref([
  {
    img:img1,
    title:'Java',
  },
  {
    img:img2,
    title:'Spring',
  },
  {
    img:img2,
    title:'React',
  },
  {
    img:img2,
    title:'Vue',
  },
  {
    img:img3,
    title:'Node',
  },
  {
    img:img4,
    title:'Javascript',
  },
  {
    img:img5,
    title:'Linux',
  },
  {
    img:img5,
    title:'Git Gitlab',
  },
  {
    img:img5,
    title:'SQL, NoSql',
  },
])


</script>

<style>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>