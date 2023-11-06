---
home: false
title: Manage Gas/Fee
author: atmon3r
copyright: false
---

## Manage Fees
This example calculates fees/gas from a simple send message

```js
import {
  defaultRegistryTypes,
  GasPrice,
  calculateFee,
} from "@cosmjs/stargate";


// 1. Create message 
const foundMsgType = defaultRegistryTypes.find(
  (element) => element[0] === "/cosmos.bank.v1beta1.MsgSend"
)
const amount = coins(1000000, 'uatom')
const finalMsg = {  
  typeUrl: foundMsgType[0],  
  value: foundMsgType[1].fromPartial({
    fromAddress: '',
    toAddress: '',
    amount: amount,
  }),
}

// 2. Calcul gas estimation
const gasEstimation = await signer.client.simulate(
  '', // Signer address
  [finalMsg],
  'Send Tokens'
)

// 3. Calcul Fee from gas estimation
const usedFee = calculateFee(
  Math.round(gasEstimation * 1.3), // gasEstimation * feeMultiplier
  GasPrice.fromString('0.075uatom') // Set default Gas price
); 

// 4. Set Fee + Gas in variable
const feeAmount = coins(usedFee.amount[0].amount, 'uatom');
let finalFee = {
  amount: feeAmount,
  gas: usedFee.gas,
  //granter: this.finalFeeGranter,
}

// Display it =)
console.log(finalFee)
``` 