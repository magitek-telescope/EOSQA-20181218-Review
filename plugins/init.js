import eosjs_ecc from 'eosjs-ecc'

if (process.browser) {
  if (
    localStorage.getItem('eosclip_account') == null ||
    localStorage.getItem('eosclip_priveKey') == null
  ) {
    eosjs_ecc.randomKey().then(privateKey => {
      var publicKey = eosjs_ecc.privateToPublic(privateKey)
      console.log('Public Key: ' + publicKey) // EOSkey...
      localStorage.setItem('eosclip_priveKey', privateKey)
      localStorage.setItem('eosclip_account', publicKey)
    })
  } else {
    console.log('Your Account: ' + localStorage.getItem('eosclip_account'))
  }

  window.onNuxtReady(async ({ $store }) => {})
}
