import{a as r,b as c}from"./index-77962895.js";import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as n,b as t,t as g,f as d,F as p}from"./app-d20d1064.js";const f={data(){return{getClient:"",loaded:!1}},methods:{async getClientNow(){const a=await r.DirectSecp256k1HdWallet.generate(12),e=await r.DirectSecp256k1HdWallet.fromMnemonic(a.secret.data),l=await c.SigningStargateClient.connectWithSigner("https://rpc.cosmos.directory/cosmoshub",e,{gasPrice:c.GasPrice.fromString("0.0025uatom")});this.getClient=l,this.loaded=!0},closeResulte(){this.loaded=!1}}},C={key:0,class:"language-javascript","data-ext":"json"},_={class:"language-javascript"};function b(a,e,l,v,s,i){return o(),n(p,null,[t("div",null,[t("button",{class:"button",onClick:e[0]||(e[0]=u=>i.getClientNow())},"Try it")]),s.loaded?(o(),n("div",C,[t("pre",_,[t("code",null,g(s.getClient),1)])])):d("v-if",!0),s.loaded?(o(),n("button",{key:1,class:"buttonColse",onClick:e[1]||(e[1]=u=>i.closeResulte())},"Close result")):d("v-if",!0)],64)}const w=m(f,[["render",b],["__file","simpleConnect.vue"]]);export{w as default};
