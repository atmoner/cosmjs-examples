---
title: Query examples 
order: 1
author: atmon3r
index: false 
copyright: false 
---

## Install cosmJs

Create nodejs projet
```bash
mkdir cosmos-projet
cd cosmos-projet
yarn init -y
touch app.js
```
 
Let's explore what is new for Stargate support:

- [@cosmjs/proto-signing](https://www.npmjs.com/package/@cosmjs/proto-signing), Wallet management and other functions
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate), Provides a high level client for querying, signing and broadcasting 
- [@cosmjs/tendermint-rpc](https://www.npmjs.com/package/@cosmjs/tendermint-rpc) Provides a high level client for querying

Here, we will use only `@cosmjs/tendermint-rpc` to try to connect and query a blockchain.
So install it: 

::: code-tabs#shell

@tab yarn

```bash
yarn add @cosmjs/tendermint-rpc
```

@tab npm

```bash
npm i @cosmjs/tendermint-rpc
```
:::

## Configure you client cosmJs

For this, you will need a public rpc node.
You can use https://cosmos.directory/

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"

const client = await Tendermint37Client.connect('https://rpc.cosmos.directory/cosmoshub') 
const status = await client.status()

// Get node info
console.log(status.nodeInfo)
```
::: details Result

```json
{
  id: Uint8Array(20) [
    186, 172, 210, 221, 116,  64,
      5, 116,  66, 141,  33, 184,
    250,  37, 120,  71,  53,  11,
     99,  54
  ],
  listenAddr: 'tcp://0.0.0.0:26656',
  network: 'cosmoshub-4',
  version: '0.34.29',
  channels: '40202122233038606100',
  moniker: 'NodeStake',
  other: Map(2) {
    'tx_index' => 'on',
    'rpc_address' => 'tcp://127.0.0.1:26657'
  },
  protocolVersion: { app: 0, block: 11, p2p: 8 }
}
```
:::

You can call many function from rpc client.

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"

const client = await Tendermint37Client.connect('https://rpc.cosmos.directory/cosmoshub') 
const abciInfo = await client.abciInfo();
const validators = await client.validators({});

// Get abci info
console.log(abciInfo)
// Get validators
console.log(validators)
```

You can find many example of use in [tendermint37client.spec.ts](https://github.com/cosmos/cosmjs/blob/main/packages/tendermint-rpc/src/tendermint37/tendermint37client.spec.ts) file 
 
 