---
title: ValidatorDelegations()
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
import * as staking from "cosmjs-types/cosmos/staking/v1beta1/query"

const client = await Tendermint37Client.connect('{rpc_url}')
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const querystaking = new staking.QueryClientImpl(rpcClient)
```

## Example
```js
let ValidatorDelegations = await querystaking.ValidatorDelegations({
    "validatorAddr": ""
})
console.log(ValidatorDelegations)
```
   
