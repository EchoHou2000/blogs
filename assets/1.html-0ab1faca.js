import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-3c952325.js";const e={},p=t(`<h1 id="_1-无重复字符的最长字串" tabindex="-1"><a class="header-anchor" href="#_1-无重复字符的最长字串" aria-hidden="true">#</a> 1.无重复字符的最长字串</h1><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：&quot;abc&quot;
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：&quot;ababc&quot;
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>本题有两个关键点，<strong>不含重复字符</strong>和<strong>最长子串</strong>。</p><p>看到最长子串，可以想到滑动窗口，比如遍历&quot;ababc&quot;字符串，第一次碰到重复的字符a时，就计算这个字符下标之后的长度即&quot;abc&quot;，就像一个滑动的窗口，直到遇到再次重复的时候。</p><p>字符串一共有128个ASCII码，可以声明一个数组，记录当前字符出现的上一次下标，如果没有出现过，默认为-1。</p><p>并且start记录每个不重复字符串的初始位置，<strong>记录每个字符出现的下标，如果下次访问发现不为-1，说明出现过，start更新为这个下标的下一个</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findLongest</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> last <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>last<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    start <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span>last<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>i<span class="token operator">-</span>start<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    last<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","1.html.vue"]]);export{d as default};