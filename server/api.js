const express = require('express')
var router = express.Router();

const Eos = require('eosjs')

router.post("/addanswer", (req, res) => {

    var options = {
        httpEndpoint: process.env.ENDPOINT,
        keyProvider: process.env.PRIV_KEY,
        chainId: process.env.CHAINID
    }

    const eos = Eos(options)

    options = {
        authorization: process.env.ACCOUNT + '@' + 'active',
        broadcast: true,
        sign: true
    }

    const param = req.body;

    eos.contract(process.env.CONTRACT).then(contract => {
        contract.addanswer(param.question_key, param.answer, process.env.ACCOUNT, param.sig, param.pub_key, options).then(res => {
            console.log("success");
        }).catch(err => {
            console.log(err);
        });
    });    


})

router.post("/addquestion", (req, res) => {

    var options = {
        httpEndpoint: process.env.ENDPOINT,
        keyProvider: process.env.PRIV_KEY,
        chainId: process.env.CHAINID
    }

    const eos = Eos(options)

    options = {
        authorization: process.env.ACCOUNT + '@' + 'active',
        broadcast: true,
        sign: true
    }

    const param = req.body;

    eos.contract(process.env.CONTRACT).then(contract => {
        contract.addquestion(param.question_title, param.question_body, process.env.ACCOUNT, param.sig, param.pub_key, options).then(res => {
            console.log("success");
        }).catch(err => {
            console.log(err);
        });
    });    

})

module.exports = router