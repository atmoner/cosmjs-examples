<template> 
  <div> 
    <button class="button" @click="getSignNow()">
      <i v-if="!inLoading" class="fa fa-play" aria-hidden="true"></i> 
      <span v-if="!inLoading"> Try it</span>
      <i v-if="inLoading" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </button>
  </div>  
  <div v-if="loaded" class="language-javascript" data-ext="json">
    <pre class="language-javascript"><code>{{ getSign }}</code></pre>   
  </div>
  <button v-if="loaded" class="buttonColse" @click="closeResulte()">
    <i class="fa fa-times" aria-hidden="true"></i> Close result
  </button>
</template>

<script> 
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate"

export default {
  data() {
    return {
      getSign: '',
      loaded: false,
      inLoading: false
    }
  },
  async mounted() {
 
  },
  methods: {
    async getSignNow() {
      this.loaded = false
      this.inLoading = true
      const mnemonic = await DirectSecp256k1HdWallet.generate(12) 
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic.secret.data)
      const client = await SigningStargateClient.connectWithSigner('https://rpc.cosmos.directory/cosmoshub', wallet)

      const accounts = await wallet.getAccounts()
       
      this.getSign = accounts
      this.loaded = true
      this.inLoading = false
      client.disconnect()
    },
    closeResulte() {
      this.loaded = false
    }
  }
}
</script> 
 
