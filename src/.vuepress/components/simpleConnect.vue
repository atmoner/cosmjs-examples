<template> 
  <div>
    <button class="button" @click="getClientNow()">Try it</button>
  </div>  
  <div v-if="loaded" class="language-javascript" data-ext="json">
    <pre class="language-javascript"><code>{{ getClient }}</code></pre>   
  </div>
  <button v-if="loaded" class="buttonColse" @click="closeResulte()">Close result</button>
</template>

<script> 
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate"

export default {
  data() {
    return {
      getClient: '',
      loaded: false
    }
  },
  methods: {
    async getClientNow() {
      const mnemonic = await DirectSecp256k1HdWallet.generate(12) 
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic.secret.data)
      const client = await SigningStargateClient.connectWithSigner(
        'https://rpc.cosmos.directory/cosmoshub',
        wallet,
        {
          gasPrice: GasPrice.fromString('0.0025uatom'),
        }
      ) 
       
      this.getClient = client
      this.loaded = true
    },
    closeResulte() {
      this.loaded = false
    }
  }
}
</script> 
 
