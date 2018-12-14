import eosjs_ecc from 'eosjs-ecc'
import EosManager from '~/assets/js/eos'
const eosManager = new EosManager('https://api.kylin.alohaeos.com')

if (process.browser) {
    if (localStorage.getItem('eosclip_account') == null || localStorage.getItem('eosclip_priveKey') == null) {
        eosjs_ecc.randomKey().then(privateKey => {
            var publicKey = eosjs_ecc.privateToPublic(privateKey);
            console.log('Public Key: ' +  publicKey) // EOSkey...
            localStorage.setItem("eosclip_priveKey", privateKey);
            localStorage.setItem("eosclip_account", publicKey);
        })
    } else {
        console.log("Your Account: " + localStorage.getItem('eosclip_account'))
    }

    window.onNuxtReady(async ({$store}) => {
        
        var questionParam = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'question',
            json: true,
            limit: 100
        }

        var questions = await eosManager.read(questionParam);       
        $store.commit("setQuestions", questions)
         
        var answerParam = {
            scope: "eosqarecove5",
            code: "eosqarecove5",
            table: 'question',
            json: true,
            limit: 100
        }

        var answers = await eosManager.read(answerParam);        
        $store.commit("setAnswers", answers)

    })

}