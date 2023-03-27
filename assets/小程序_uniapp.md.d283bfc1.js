import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d6bf9272.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"小程序/uniapp.md","lastUpdated":1679930368000}'),e={name:"小程序/uniapp.md"},p=l(`<h2 id="hbuilderx-安装" tabindex="-1"><a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noreferrer">HBuilderX 安装</a> <a class="header-anchor" href="#hbuilderx-安装" aria-label="Permalink to &quot;[HBuilderX 安装](https://www.dcloud.io/hbuilderx.html)&quot;">​</a></h2><h2 id="条件编译" tabindex="-1">条件编译 <a class="header-anchor" href="#条件编译" aria-label="Permalink to &quot;条件编译&quot;">​</a></h2><p>以 <code>#ifdef</code> 或 <code>#ifndef</code> 加 <strong><code>%PLATFORM%</code></strong> 开头，以 <code>#endif</code> 结尾。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#ifdef：</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> defined 仅在某平台存在</span></span>
<span class="line"><span style="color:#A6ACCD;">#ifndef：</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> not defined 除了某平台均存在</span></span>
<span class="line"><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">PLATFORM</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">：平台名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// #ifdef VUE3</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createSSRApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">app</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createSSRApp</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">App</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">app</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// #endif</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="目录结构" tabindex="-1"><a href="https://uniapp.dcloud.net.cn/tutorial/project.html" target="_blank" rel="noreferrer">目录结构</a> <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;[目录结构](https://uniapp.dcloud.net.cn/tutorial/project.html)&quot;">​</a></h2>`,6),o=[p];function t(r,c,i,d,y,u){return a(),n("div",null,o)}const A=s(e,[["render",t]]);export{F as __pageData,A as default};
