<template> 
  <div>
    <button class="button" @click="getBlockNow()">
      <i class="fa fa-play" aria-hidden="true"></i> Try it
    </button>
  </div>  
  <div v-if="loaded" class="language-javascript" data-ext="json">
    <pre class="language-javascript"><code>{{ getBlock }}</code></pre>   
  </div>
  <button v-if="loaded" class="buttonColse" @click="closeResulte()">
    <i class="fa fa-times" aria-hidden="true"></i> Close result
  </button>
</template>

<script> 
import { StargateClient } from "@cosmjs/stargate"

export default {
  data() {
    return {
      getBlock: '',
      loaded: false
    }
  },
  async mounted() {
 
  },
  methods: {
    async getBlockNow() {
      try {
        const client = await StargateClient.connect('https://rpc.cosmos.directory/cosmoshub')
        const getBlock = await client.getBlock()
        this.getBlock = getBlock.header
        this.loaded = true
      } catch (error) {
        this.getBlock = "Error! Try again"
        this.loaded = true
      }
 
    },
    closeResulte() {
      this.loaded = false
    }
  }
}
</script>

<style>
.button {
  display: block;
  width: 100%;
  border: none;
  background-color: #343E51;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
}
.buttonColse {
  display: block;
  width: 100%;
  border: none;
  background-color: #343E51;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
}
  
</style>
