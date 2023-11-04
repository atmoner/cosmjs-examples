---
title: Authz query
icon: file
order: 3
category:
  - Guide
copyright: false  
---

# Authz module 

## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as authz from "cosmjs-types/cosmos/authz/v1beta1/query";

const client = await Tendermint37Client.connect('{rpc_url}') 
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const queryAuthz = new authz.QueryClientImpl(rpcClient) 
```
 
## Grants()

```js
let Grants = await queryAuthz.Grants({ granter: '', grantee: '', msgTypeUrl: '' })
console.log(Grants) 
```
 
## GranterGrants()
```js
let GranterGrants = await queryAuthz.GranterGrants({ granter: '' })
console.log(GranterGrants) 
```

## GranteeGrants()
```js
let GranteeGrants = await queryAuthz.GranteeGrants({ grantee: '' })
console.log(GranteeGrants) 
```