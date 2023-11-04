<template> 
  <div> 
    <button class="button" @click="getClientNow()">
      <i v-if="!inLoading" class="fa fa-play" aria-hidden="true"></i> 
      <span v-if="!inLoading"> Try it</span>
      <i v-if="inLoading" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </button>
  </div>  
  <div v-if="loaded" class="language-javascript" data-ext="json">
    <pre class="language-javascript"><code>{{ getClient }}</code></pre>   
  </div>
  <button v-if="loaded" class="buttonColse" @click="closeResulte()">
    <i class="fa fa-times" aria-hidden="true"></i> Close result
  </button>
</template>

<script> 
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate"

export default {
  data() {
    return {
      getClient: '',
      loaded: false,
      inLoading: false
    }
  },
  methods: {
    async getClientNow() {
      this.inLoading = true
      try {
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
        this.inLoading = false
        client.disconnect();
      } catch (error) {
        this.getClient = "Error! Try again"
        this.loaded = true
        this.inLoading = false
      }
 
    },
    closeResulte() {
      this.loaded = false
    }
  }
}
</script> 
 
