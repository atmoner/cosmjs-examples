---
# This is the title of the article
title: Staking query
# This is the icon of the page
icon: file
# This control sidebar order
order: 1
# Set author
author: atmon3r

# You can customize copyright content
copyright: false
---
# Bank module 

## Connect rpc

```js
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as staking from "cosmjs-types/cosmos/staking/v1beta1/query"

const client = await Tendermint37Client.connect('{rpc_url}') 
const queryClient = new QueryClient(client)
const rpcClient = createProtobufRpcClient(queryClient)

const queryStaking = new staking.QueryClientImpl(rpcClient) 
```
 
## Validators()

```js
let Validators = await queryStaking.Validators({})
console.log(Validators) 
```
## Validator()

```js
let Validator = await queryStaking.Validator({})
console.log(Validator) 
```
 
## ValidatorDelegations()
 
## ValidatorUnbondingDelegations()

## Delegation()

## UnbondingDelegation()

## DelegatorDelegations()

## DelegatorUnbondingDelegations()
