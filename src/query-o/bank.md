---
title: Bank query
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
import * as bank from "cosmjs-types/cosmos/bank/v1beta1/query"

const client = await Tendermint37Client.connect('{rpc_url}') 
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const queryBank = new bank.QueryClientImpl(rpcClient) 
```

## Balance()

```js
let Balance = await queryBank.Balance({ address: '' })
console.log(Balance) 
```
## AllBalances()

```js
let AllBalances = await queryBank.AllBalances({ address: '' })
console.log(AllBalances) 
```
## SpendableBalances()

```js
let spendableBalances = await queryBank.SpendableBalances({ address: '' })
console.log(spendableBalances) 
```
## TotalSupply()

```js
let TotalSupply = await queryBank.TotalSupply({ pagination: '' })
console.log(TotalSupply) 
```

