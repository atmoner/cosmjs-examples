---
title: SetSendEnabled()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.32.0
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
  
## SetSendEnabled()
 
```js
import { defaultRegistryTypes } from "@cosmjs/stargate";
 
const foundMsgType = defaultRegistryTypes.find(
  (element) => element[0] === "/cosmos.bank.v1beta1.MsgSetSendEnabled"
)
  
const finalMsg = {
  typeUrl: foundMsgType[0],
  value: foundMsgType[1].fromPartial({
    "authority": "",
    "sendEnabled": [],
    "useDefaultFor": []
}),
}

// const result = await signer.client.signAndBroadcast('address', [finalMsg], "auto", "")
 
```
   
