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

### getBalance() 

```js
const getBalance = await client.getBalance('your_address', 'uatom')
console.log(getBalance)
```

### getAllBalances() 

```js
const getAllBalances = await client.getAllBalances('your_address')
console.log(getAllBalances)
```

### getBalanceStaked() 

```js
const getBalanceStaked = await client.getBalanceStaked('your_address')
console.log(getBalanceStaked)
```
