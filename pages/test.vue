<template>
<div>
<button v-on:click="test">test</button>
{{ $store.state}}
</div>
</template>

<script>
import EosManager from '~/assets/js/eos'
import eosjs_ecc from 'eosjs-ecc'
console.log("test")

const eosManager = new EosManager('https://api.kylin.alohaeos.com')


import axios from 'axios'

export default {


  methods: {


    async test(){

      console.log(this.$store.commit('setPub_key', "test"))

      console.log("test")

      


      /*
      //Get table
      var param = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'user',
            json: true,
            limit: 100
      }

      var result = await eosManager.read(param);
      
      */

      //getnonce
      var param = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'user',
            json: true,
            limit: 100
      }

      var pub_key = localStorage.getItem('eosclip_account');
      var nonce = await eosManager.nonce(param, pub_key)

      var prive_key = localStorage.getItem('eosclip_priveKey');  
     
      var message = "testtest" + nonce  
      var sig = eosjs_ecc.sign(message, prive_key);

      const res = await axios.post('/api/addquestion', {
        question_title: 'test',
        question_body: 'test',
        sig: sig,
        pub_key: pub_key
      })
      
    }
  }



}
</script>
