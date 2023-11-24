---
title: ValidatorSlashes()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.32.0
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
   
## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as distribution from "cosmjs-types/cosmos/distribution/v1beta1/query"

const client = await Tendermint37Client.connect('{rpc_url}')
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const querydistribution = new distribution.QueryClientImpl(rpcClient)
```

## Example
```js
let ValidatorSlashes = await querydistribution.ValidatorSlashes({
    "validatorAddress": "",
    "startingHeight": "0",
    "endingHeight": "0"
})
console.log(ValidatorSlashes)
```
   
