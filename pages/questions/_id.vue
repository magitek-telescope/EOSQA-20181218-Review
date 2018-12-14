<template>
    <div>
        <h2>Answer Page</h2>
         <div>{{ $store.state.questions[$route.params.id].question_key }}</div>
         <div id="contents">
            <h2>Question</h2>
            <div class="ui comments">
                    <div class="comment">
                        <a class="avatar">
                        <img src="/img/avatar1.png">
                        </a>
                        <div class="content">
                        <a class="author">{{ $store.state.questions[$route.params.id].pub_key }}</a>
                        <div class="metadata">
                                <div class="date">{{ $store.state.questions[$route.params.id].time_stamp }}</div>
                                <div class="rating">
                                    <i class="star icon"></i>
                                    {{ $store.state.questions[$route.params.id].point }} Point 
                                    <i class="eye icon"></i>
                                    {{ $store.state.questions[$route.params.id].view }} View
                                </div>
                                </div>
                        <div class="text">
                            <div>{{ $store.state.questions[$route.params.id].title }}</div>
                            <div>{{ $store.state.questions[$route.params.id].body }}</div>
                        </div>
                        
                        </div>
                    </div>
            </div>
            <h2>Answer</h2>

            <div v-for="answer in $store.state.answers" :key="answer.answer_key">
                <div id="" v-if="answer.question_key -1 == $route.params.id">
                        <div class="ui comments">
                            <div class="comment">
                                <a class="avatar">
                                <img src="/img/avatar2.png">
                                </a>
                                <div class="content">
                                <a class="author">{{ answer.pub_key }}</a>
                                <div class="metadata">
                                    <div class="date">{{ answer.time_stamp }}</div>
                                    <div class="rating">
                                    <i class="star icon"></i>
                                    {{ answer.point }} Point
                                    
                                    </div>
                                </div>
                                <div class="text" >
                                    {{ answer.answer }}
                                </div>
                                <div class="actions">
                                    <a id="tippoint">Tip
                                        <p class="answer_key" style="display: none;">{{ answer.answer_key }}</p>
                                        <p class="point" style="display: none;">0</p>     
                                    </a>
                                </div>
                                </div>
                            </div>

                        </div>
                    <br>
                </div>
            </div>
            <div>
                <h2>Your Answer</h2>
                <p id="question_key" style="display: none">{{ $route.params.id }}</p>
                
                <div class="ui comments">
                    <form class="ui reply form">
                        <div class="field">
                            <textarea id="input_answer" cols="30" rows="10" ></textarea>
                        </div>
                        <div class="ui primary submit labeled icon button" id="add_answer" v-on:click="addanswer">
                            <i class="icon edit"></i> Add Answer
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

    </div>

</template>

<script>

import EosManager from '~/assets/js/eos'
import eosjs_ecc from 'eosjs-ecc'
import axios from 'axios'

const eosManager = new EosManager('https://api.kylin.alohaeos.com')

export default {

methods: {

    async addanswer(){

      var param = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'user',
            json: true,
            limit: 100
      }

      var answer = document.getElementById('input_answer').value;
      var question_key = Number(this.$route.params.id)
      console.log(question_key)
      

      var pub_key = localStorage.getItem('eosclip_account');
      var nonce = await eosManager.nonce(param, pub_key)
      console.log(nonce)

      var prive_key = localStorage.getItem('eosclip_priveKey');  
     
      var message = answer + nonce  
      var sig = eosjs_ecc.sign(message, prive_key);

      const res = await axios.post('/api/addanswer', {
        question_key: question_key,
        answer: answer,
        sig: sig,
        pub_key: pub_key
      })
      
    }
  }

}
</script>

<style>

</style>
