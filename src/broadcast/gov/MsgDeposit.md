---
title: Deposit()
author: atmon3r
icon: file
copyright: false
---

::: info
This doc is generated with 
- [@cosmjs/stargate](https://www.npmjs.com/package/@cosmjs/stargate): ^0.31.3
- [cosmjs-types](https://www.npmjs.com/package/cosmjs-types): ^0.9.0
:::
  
## Deposit()
 
```js
import { defaultRegistryTypes } from "@cosmjs/stargate";
 
const foundMsgType = defaultRegistryTypes.find(
  (element) => element[0] === "/cosmos.gov.v1.MsgDeposit"
)
  
const finalMsg = {
  typeUrl: foundMsgType[0],
  value: foundMsgType[1].fromPartial({
    "proposalId": "0",
    "depositor": "",
    "amount": []
}),
}

// const result = await signer.client.signAndBroadcast('address', [finalMsg], "auto", "")
 
```
   