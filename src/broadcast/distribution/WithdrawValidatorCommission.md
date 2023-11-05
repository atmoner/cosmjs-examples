---
title: WithdrawValidatorCommission()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.31.3
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
  
## WithdrawValidatorCommission()
 
```js
import { defaultRegistryTypes } from "@cosmjs/stargate";
 
const foundMsgType = defaultRegistryTypes.find(
  (element) => element[0] === "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"
)
  
const finalMsg = {
  typeUrl: foundMsgType[0],
  value: foundMsgType[1].fromPartial({
    "validatorAddress": ""
}),
}

// const result = await signer.client.signAndBroadcast('address', [finalMsg], "auto", "")
 
```
   
