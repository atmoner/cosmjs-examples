---
title: SmartContractState()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.31.3
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
   
## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as cosmwasm from "cosmjs-types/cosmwasm/wasm/v1/query.js"

const client = await Tendermint37Client.connect('{rpc_url}')
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const querywasm = new cosmwasm.QueryClientImpl(rpcClient)
```

## Example
```js
let SmartContractState = await querywasm.SmartContractState({
    "address": "",
    "queryData": {}
})
console.log(SmartContractState)
```
   
