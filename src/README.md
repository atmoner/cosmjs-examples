---
home: true 
title: Home
heroImage: /logo-vertical-light.png
heroText: CosmJs Examples
tagline: ✨ Javascript example for <a href='https://github.com/cosmos/cosmjs#readme' target="_blank">cosmJs</a> cosmos sdk 

copyright: false 
---

## 🛠 Install
 
::: code-tabs#shell

@tab yarn

```bash
yarn add @cosmjs/stargate @cosmjs/proto-signing
```

@tab npm

```bash
npm install @cosmjs/stargate @cosmjs/proto-signing
```

:::

## 🚀 Usage
 
### Simple connection RPC

```js
import { StargateClient } from "@cosmjs/stargate"

try {
  const client = await StargateClient.connect('https://rpc.cosmos.directory/cosmoshub')
  const getBlock = await client.getBlock()
  console.log(getBlock.header)
  client.disconnect()
} catch (e) {
  console.log("Error! Try again")
}
```
<simpleRpc />

### Simple get signer

::: code-tabs#shell
@tab mnemonic signer

```js
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate"

const mnemonic = await DirectSecp256k1HdWallet.generate(12)
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic.secret.data)
const accounts = await wallet.getAccounts()

console.log(accounts)
```

@tab offline signer

```js
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, GasPrice, calculateFee } from "@cosmjs/stargate"

const chainId = "cosmoshub-4"
await window.keplr.enable(chainId)
const offlineSigner = await window.getOfflineSignerAuto(chainId)
const accounts = await offlineSigner.getAccounts()

console.log(accounts)
```
:::

<simpleSign />


### Simple connectWithSigner
 
::: code-tabs#shell
@tab mnemonic signer

```js
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate"

const mnemonic = await DirectSecp256k1HdWallet.generate(12)
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic.secret.data)

try {
  const client = await SigningStargateClient.connectWithSigner(
    'https://rpc.cosmos.directory/cosmoshub',
    wallet,
    {
      gasPrice: GasPrice.fromString('0.0025uatom'),
    }
  )
  console.log(client)
  client.disconnect()
} catch (e) {
  console.log("Error! Try again")
}


```

@tab offline signer

```js
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate"


try {
  const chainId = "cosmoshub-4"
  await window.keplr.enable(chainId)
  const offlineSigner = await window.getOfflineSignerAuto(chainId)
  const client = await SigningStargateClient.connectWithSigner(
    'https://rpc.cosmos.directory/cosmoshub',
    offlineSigner,
    {
      gasPrice: GasPrice.fromString('0.0025uatom'),
    }
  )

  console.log(client)
  client.disconnect()
} catch (e) {
  console.log("Error! Try again")
}



```
:::

<simpleConnect />