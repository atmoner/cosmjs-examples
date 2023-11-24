import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,b as s,d as n,a as t,e as c}from"./app-27495744.js";const l={},i={class:"hint-container info"},u=s("p",{class:"hint-container-title"},"Info",-1),d=s("p",null,"This doc is generated with",-1),k={href:"https://www.npmjs.com/package/@cosmjs/stargate",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/cosmjs-types",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="updateparams" tabindex="-1"><a class="header-anchor" href="#updateparams" aria-hidden="true">#</a> UpdateParams()</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultRegistryTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@cosmjs/stargate&quot;</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> foundMsgType <span class="token operator">=</span> defaultRegistryTypes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> element<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;/cosmos.gov.v1.MsgUpdateParams&quot;</span>
<span class="token punctuation">)</span>
  
<span class="token keyword">const</span> finalMsg <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">typeUrl</span><span class="token operator">:</span> foundMsgType<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> foundMsgType<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fromPartial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;minDeposit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;quorum&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;vetoThreshold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;minInitialDepositRatio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;burnVoteQuorum&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;burnProposalDepositPrevote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;burnVoteVeto&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// const result = await signer.client.signAndBroadcast(&#39;address&#39;, [finalMsg], &quot;auto&quot;, &quot;&quot;)</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(b,q){const a=o("ExternalLinkIcon");return p(),r("div",null,[s("div",i,[u,d,s("ul",null,[s("li",null,[s("a",k,[n("@cosmjs/stargate"),t(a)]),n(": ^0.32.0")]),s("li",null,[s("a",m,[n("cosmjs-types"),t(a)]),n(": ^0.9.0")])])]),v])}const h=e(l,[["render",g],["__file","MsgUpdateParams.html.vue"]]);export{h as default};