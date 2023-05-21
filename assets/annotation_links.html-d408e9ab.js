import{u as l,_ as o}from"./index-8fee6009.js";import{_ as i,f as u,g as k,o as r,c as d,a as n,t as v,d as c,u as a,e as m}from"./app-268824dc.js";const g=m(`<h1 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h1><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VuePDF<span class="token punctuation">,</span> usePDF <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@tato30/vue-pdf&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> pdf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePDF</span><span class="token punctuation">(</span><span class="token string">&#39;/example_045.pdf&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">onAnnotation</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VuePDF</span> <span class="token attr-name">:pdf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">annotation-layer</span> <span class="token attr-name">@annotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onAnnotation<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"language-json","data-ext":"json"},_={class:"language-json"},b={style:{"text-align":"center"}},h={__name:"annotation_links.html",setup(y){const{pdf:t}=l(u("/example_045.pdf")),p=k({});function e(s){console.log(s),p.value=s}return(s,x)=>(r(),d("div",null,[g,n("div",f,[n("pre",_,[n("code",null,v(p.value),1)])]),n("div",b,[c(a(o),{pdf:a(t),"annotation-layer":"",onAnnotation:e},null,8,["pdf"]),c(a(o),{pdf:a(t),page:6,"annotation-layer":"",onAnnotation:e},null,8,["pdf"])])]))}},D=i(h,[["__file","annotation_links.html.vue"]]);export{D as default};
