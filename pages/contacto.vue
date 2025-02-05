
<template>
    <div id="contact-us" class="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-xl">
        <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none"
            viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-slate-600"
                        fill="currentColor"></rect>
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
        </svg>
        <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none"
            viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-slate-800"
                        fill="currentColor"></rect>
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
        </svg>
        <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">Contacto
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
                Utliiza el siguiente formulario para ponerte en contacto.
            </p>
        </div>
        <div class="mt-12">
            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div class="sm:col-span-2">
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-slate-400">Name</label>
                    <div class="mt-1">
                        <input name="name" type="text" v-model="state.name" id="name" autocomplete="organization"  class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white">
                    </div>
                    <div class="c-message-error text-xs   text-red-600 "
                  v-for="error of v$.name.$errors" :key="error.$uid">
                  <span>{{ error.$message }}</span>
                  </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="email"  class="block text-sm font-medium text-gray-700 dark:text-slate-400">Email</label>
                    <div class="mt-1">
                        <input name="email" v-model="state.email" id="email"   class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white">
                    </div>
                    <div class="c-message-error text-xs   text-red-600 "
                    v-for="error of v$.email.$errors" :key="error.$uid">
                    <span>{{ error.$message }}</span>
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-slate-400">Message</label>
                    <div class="mt-1">
                        <textarea  name="message" v-model="state.message" id="message" rows="4" class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"></textarea>
                    </div>
                    <div class="c-message-error text-xs   text-red-600 "
                    v-for="error of v$.message.$errors" :key="error.$uid">
                    <span>{{ error.$message }}</span>
                    </div>
                </div>
               

                <div class="flex justify-end sm:col-span-2">
                    <button @click="sendToWhatsApp"   class="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-sky-500 border border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed">
                        <span>Send Message</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required,helpers,email,minLength } from '@vuelidate/validators'

const state=reactive({
    name:'',
    email:'',
    message:'',
})





const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage('Este campo es requerido', required),
            // $autoDirty: true ,
        },
        email: {
            required: helpers.withMessage('Ingrese un correo', required),
            email: helpers.withMessage('Ingrese un correo válido', email),
        },
        message: {
            required: helpers.withMessage('Este campo es requerido', required),
        },
    }
})

const v$ = useVuelidate(rules, state);


//SEND DETAIL CARRITO
const sendToWhatsApp=()=> {
    v$.value.$touch();
    if (!v$.value.$error) {
      let message = ` *Nombre: ${state.name}* \n *Correo: ${state.email}* \n *Mensaje: ${state.message}* \n \n`;

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "+51982043391"; // Número con código de país  // 
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      state.name=''
      state.email=''
      state.message=''
      window.open(whatsappUrl, "_blank");
    }
   }


</script>