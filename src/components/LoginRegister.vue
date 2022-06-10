<template>
    <q-form @submit="submitForm">
         <q-input v-if="tab == 'Register'" class="q-mb-md" outlined v-model="formData.name" label="Name" />
         <q-input class="q-mb-md" outlined v-model="formData.email" type="email" label="Email" />
         <q-input class="q-mb-md" outlined v-model="formData.password" type="password" label="Password" />
         <div class="row">
             <q-space/>
             <q-btn color="primary" type="submit" :label="tab" />
         </div>
    </q-form>
</template>
<script>
    export default{
        props: ['tab'],
        data(){
            return{
                formData:{
                    name: '',
                    email: '',
                    password:''
                }
            }
        },
        methods:{
            submitForm(){
                if(this.tab == "Login"){
                    console.log("login")
                }else{
                    console.log("register")
                }
            }
        }
    }
</script>