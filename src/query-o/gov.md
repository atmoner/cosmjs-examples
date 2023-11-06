---
title: Gov query
icon: file
order: 1
author: atmon3r
copyright: false 
---
# Bank module 

## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as gov from "cosmjs-types/cosmos/gov/v1/query"

const client = await Tendermint37Client.connect('{rpc_url}') 
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const queryGov = new gov.QueryClientImpl(rpcClient) 
```
 
## Proposal()

```js
let Proposal = await queryGov.Proposal({ proposalId: 420 })
console.log(Proposal) 
```
## Proposals()
```js
let Proposals = await queryGov.Proposals({})
console.log(Proposals) 
```
 
## Vote()
```js
let Vote = await queryGov.Vote({ proposalId: 420, voter: '' })
console.log(Vote) 
```

 
## Votes()
```js
let Votes = await queryGov.Votes({ proposalId: 420, pagination: '' })
console.log(Votes) 
```

## Params()
```js
// params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
let Params = await queryGov.Params({ paramsType: 'voting' })
console.log(Params) 
```

## Deposit()

## Deposits()

## TallyResult()
