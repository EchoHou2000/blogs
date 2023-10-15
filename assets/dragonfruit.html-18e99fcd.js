import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-e58f5c57.js";const o={},t=e(`<h1 id="double类型的值可以赋给long变量吗" tabindex="-1"><a class="header-anchor" href="#double类型的值可以赋给long变量吗" aria-hidden="true">#</a> double类型的值可以赋给long变量吗？</h1><p>在不进行强制转换的情况下，double类型的值可以赋给long变量吗？</p><p><strong>不可以</strong>。即使double类型的值是1，这个值也不能赋给long变量。</p><p>比如下面这两种写法，都是错的，编译器会报错：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">0.1</span>
<span class="token keyword">long</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
<span class="token keyword">long</span> b <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
<span class="token keyword">long</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 这个可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function p(c,r){return a(),s("div",null,l)}const u=n(o,[["render",p],["__file","dragonfruit.html.vue"]]);export{u as default};