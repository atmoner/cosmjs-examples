import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-27495744.js";const t={},p=e(`<h2 id="manage-fees" tabindex="-1"><a class="header-anchor" href="#manage-fees" aria-hidden="true">#</a> Manage Fees</h2><p>This example calculates fees/gas from a simple send message</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  defaultRegistryTypes<span class="token punctuation">,</span>
  GasPrice<span class="token punctuation">,</span>
  calculateFee<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@cosmjs/stargate&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> coins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@cosmjs/proto-signing&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 1. Create message </span>
<span class="token keyword">const</span> foundMsgType <span class="token operator">=</span> defaultRegistryTypes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> element<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;/cosmos.bank.v1beta1.MsgSend&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">coins</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token string">&#39;uatom&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> finalMsg <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">typeUrl</span><span class="token operator">:</span> foundMsgType<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">value</span><span class="token operator">:</span> foundMsgType<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fromPartial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fromAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">toAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">amount</span><span class="token operator">:</span> amount<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. Calcul gas estimation</span>
<span class="token keyword">const</span> gasEstimation <span class="token operator">=</span> <span class="token keyword">await</span> signer<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">simulate</span><span class="token punctuation">(</span>
  <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Signer address</span>
  <span class="token punctuation">[</span>finalMsg<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Send Tokens&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 3. Calcul Fee from gas estimation</span>
<span class="token keyword">const</span> usedFee <span class="token operator">=</span> <span class="token function">calculateFee</span><span class="token punctuation">(</span>
  Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>gasEstimation <span class="token operator">*</span> <span class="token number">1.3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// gasEstimation * feeMultiplier</span>
  GasPrice<span class="token punctuation">.</span><span class="token function">fromString</span><span class="token punctuation">(</span><span class="token string">&#39;0.075uatom&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Set default Gas price</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// 4. Set Fee + Gas in variable</span>
<span class="token keyword">const</span> feeAmount <span class="token operator">=</span> <span class="token function">coins</span><span class="token punctuation">(</span>usedFee<span class="token punctuation">.</span>amount<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>amount<span class="token punctuation">,</span> <span class="token string">&#39;uatom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> finalFee <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> feeAmount<span class="token punctuation">,</span>
  <span class="token literal-property property">gas</span><span class="token operator">:</span> usedFee<span class="token punctuation">.</span>gas<span class="token punctuation">,</span>
  <span class="token comment">//granter: this.finalFeeGranter,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Display it =)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>finalFee<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","manageFee.html.vue"]]);export{k as default};
