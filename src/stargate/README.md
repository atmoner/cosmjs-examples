---
home: false
title: Stargate 
author: atmon3r
copyright: false
---

## 🛠 Install
 
::: code-tabs#shell

@tab yarn

```bash
yarn add @cosmjs/stargate
```

@tab npm

```bash
npm install @cosmjs/stargate
```

:::

## 🚀 Usage

Create an app.js and put this code base:

```js
import { StargateClient } from "@cosmjs/stargate"
const client = await StargateClient.connect('https://rpc.cosmos.directory/cosmoshub')

// Add you call here 
```
 
### getBlock() 

```js
const getBlock = await client.getBlock()
console.log(getBlock.header)
```
<getBlock />

### getBalance() 

```js
const getBalance = await client.getBalance('cosmos13jawsn574rf3f0u5rhu7e8n6sayx5gkwjvqrkr', 'uatom')
console.log(getBalance)
```
<getBalance />


### getAllBalances() 

```js
const getAllBalances = await client.getAllBalances('cosmos13jawsn574rf3f0u5rhu7e8n6sayx5gkwjvqrkr')
console.log(getAllBalances)
```

### getBalanceStaked() 

```js
const getBalanceStaked = await client.getBalanceStaked('cosmos13jawsn574rf3f0u5rhu7e8n6sayx5gkwjvqrkr')
console.log(getBalanceStaked)
```
