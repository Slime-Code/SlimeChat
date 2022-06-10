<template>
  <q-page class="flex column">
        <q-banner inline-actions class="text-white bg-red text-center">
        user is offline.
    </q-banner>
      <div class="q-pa-md column col justify-end">
         <q-chat-message
         v-for="messege in messeges "
         :key="messege.text"
         :name="messege.from"
         :text= "[messege.text]"
         :sent="messege.from === 'Me' ? true : false" 
         :bg-color="messege.from === 'Me' ? 'gray' : 'primary'"
      />
      </div>
    <q-footer elevated>
        <q-toolbar>
            <q-form  class="full-width" >
                <q-input  class="full-width" rounded outlined v-model="texto" dense bg-color="white" label="Message" >
                    <template v-slot:hint>
                    Field hint
                    </template>
                    <template v-slot:after>
                        <q-btn round dense flat icon="send" color="white" @click="sendMessege"  type="submit"/>
                    </template>
                </q-input>
            </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>
<script>
  export default({
    data(){
        return{
            texto:" ",
            messeges:[
                {
                    text: "Olá Josué, tudo bem?",
                    from: "Honório Soisa"
                },
                {
                    text: "Estou bem, e você?",
                    from: "Me"
                },
                {
                    text: "Também traquilo, como vai a tua namorada?",
                    from: "Honório Soisa"
                },
                {
                    text: "Qual delas? kkkkk",
                    from: "Me"
                },
                {
                    text: "Todas! kkkk",
                    from: "Honório Sousa"
                },
            ]
        }
    },
    methods:{
        sendMessege(){
            this.messeges.push({
                text: this.texto,
                from: "Me"
            })
        }
    }
  })
</script>
<style>
</style>
