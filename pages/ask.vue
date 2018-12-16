<template>
    <v-content>
      <v-container>
        <v-form>
            <v-text-field label="Title" id="input_question_title"></v-text-field>
            <v-textarea label="Question" id="input_question_body" rows="10"></v-textarea>
            <v-btn id="add_question" v-on:click="addquestion">Ask Question</v-btn>
        </v-form>
    </v-container>
  </v-content>
</template>

<script>
import EosManager from '~/assets/js/eos'
import eosjs_ecc from 'eosjs-ecc'
import axios from 'axios'

const eosManager = new EosManager('https://api.kylin.alohaeos.com')



export default {

methods: {

    async addquestion(){

      var param = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'user',
            json: true,
            limit: 100
      }

      var title = document.getElementById('input_question_title').value;
      var body = document.getElementById('input_question_body').value;

      var pub_key = localStorage.getItem('eosclip_account');
      var nonce = await eosManager.nonce(param, pub_key)

      var prive_key = localStorage.getItem('eosclip_priveKey');  
     
      var message = title + body + nonce  
      var sig = eosjs_ecc.sign(message, prive_key);

      const res = await axios.post('/api/addquestion', {
        question_title: title,
        question_body: body,
        sig: sig,
        pub_key: pub_key
      })
      
    }
  }

}
</script>

<style>

</style>
