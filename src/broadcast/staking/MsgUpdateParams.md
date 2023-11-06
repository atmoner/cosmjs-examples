---
title: UpdateParams()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.31.3
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
  
## UpdateParams()
 
```js
import { defaultRegistryTypes } from "@cosmjs/stargate";
 
const foundMsgType = defaultRegistryTypes.find(
  (element) => element[0] === "/cosmos.staking.v1beta1.MsgUpdateParams"
)
  
const finalMsg = {
  typeUrl: foundMsgType[0],
  value: foundMsgType[1].fromPartial({
    "authority": "",
    "params": {
        "unbondingTime": {
            "seconds": "0",
            "nanos": 0
        },
        "maxValidators": 0,
        "maxEntries": 0,
        "historicalEntries": 0,
        "bondDenom": "",
        "minCommissionRate": ""
    }
}),
}

// const result = await signer.client.signAndBroadcast('address', [finalMsg], "auto", "")
 
```
   
