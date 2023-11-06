---
title: Feegrant query
icon: file 
category:
  - Guide
copyright: false  
---

# Feegrant module 

## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as feegrant from "cosmjs-types/cosmos/feegrant/v1beta1/query";

const client = await Tendermint37Client.connect('{rpc_url}') 
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const queryFeegrant = new feegrant.QueryClientImpl(rpcClient) 
```
 
## Allowance()

```js
let Allowance = await queryFeegrant.Allowance({ granter: '', grantee: '' })
console.log(Allowance) 
```
 
## Allowances()
```js
let Allowances = await queryFeegrant.Allowances({ grantee: '' })
console.log(Allowances) 
```

## AllowancesByGranter()
```js
let AllowancesByGranter = await queryFeegrant.AllowancesByGranter({ granter: '' })
console.log(AllowancesByGranter) 
```