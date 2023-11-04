<template> 
  <div>
    <button class="button" @click="getSignNow()">Try it</button>
  </div>  
  <div v-if="loaded" class="language-javascript" data-ext="json">
    <pre class="language-javascript"><code>{{ getSign }}</code></pre>   
  </div>
  <button v-if="loaded" class="buttonColse" @click="closeResulte()">Close result</button>
</template>

<script> 
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate"

export default {
  data() {
    return {
      getSign: '',
      loaded: false
    }
  },
  async mounted() {
 
  },
  methods: {
    async getSignNow() {
      const mnemonic = await DirectSecp256k1HdWallet.generate(12) 
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic.secret.data)
      const client = await SigningStargateClient.connectWithSigner('https://rpc.cosmos.directory/cosmoshub', wallet)

      const accounts = await wallet.getAccounts();
       
      this.getSign = accounts
      this.loaded = true
    },
    closeResulte() {
      this.loaded = false
    }
  }
}
</script> 
 
