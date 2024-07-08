import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CJ5r7Wtd.js";const E=JSON.parse('{"title":"二、CSS","description":"","frontmatter":{},"headers":[],"relativePath":"面试相关/CSS.md","filePath":"面试相关/CSS.md","lastUpdated":1684262502000}'),n={name:"面试相关/CSS.md"},l=t(`<h1 id="二、css" tabindex="-1">二、CSS <a class="header-anchor" href="#二、css" aria-label="Permalink to &quot;二、CSS&quot;">​</a></h1><h2 id="_1、常见-css-选择器" tabindex="-1">1、常见 CSS 选择器 <a class="header-anchor" href="#_1、常见-css-选择器" aria-label="Permalink to &quot;1、常见 CSS 选择器&quot;">​</a></h2><blockquote><p>注意事项</p></blockquote><ul><li><code>!important</code>声明的样式的优先级最高</li><li>如果优先级一致，则最后出现的样式生效</li><li>继承得到的样式的优先级最低</li><li>样式来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt; 外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式</li></ul><h2 id="_2、display-属性值及其作用" tabindex="-1">2、display 属性值及其作用 <a class="header-anchor" href="#_2、display-属性值及其作用" aria-label="Permalink to &quot;2、display 属性值及其作用&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性值</th><th>作用</th></tr></thead><tbody><tr><td>none</td><td>元素不显示，并且会从文档流中移除</td></tr><tr><td>block</td><td>块元素类型。默认宽度为父元素宽度，可设置宽高，换行显示</td></tr><tr><td>inline</td><td>行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示</td></tr><tr><td>inline-block</td><td>行内块元素类型。默认宽度为内容宽度，可以设置宽高，同行显示</td></tr><tr><td>list-item</td><td>像块类型元素一样显示，并添加样式列表标记</td></tr><tr><td>table</td><td>此元素会作为块级表格来显示</td></tr><tr><td>inherit</td><td>规定应该从父元素继承 display 属性的值</td></tr></tbody></table><h2 id="_3、block、inline-和-inline-block-的区别" tabindex="-1">3、block、inline 和 inline-block 的区别 <a class="header-anchor" href="#_3、block、inline-和-inline-block-的区别" aria-label="Permalink to &quot;3、block、inline 和 inline-block 的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>区别</th><th>block</th><th>inline</th><th>inline-block</th></tr></thead><tbody><tr><td>独占一行</td><td>是</td><td>否</td><td>否</td></tr><tr><td>width</td><td>是</td><td>否</td><td>是</td></tr><tr><td>height</td><td>是</td><td>否</td><td>是</td></tr><tr><td>margin</td><td>是</td><td>水平方向有效</td><td>是</td></tr><tr><td>padding</td><td>是</td><td>是</td><td>是</td></tr></tbody></table><h2 id="_4、行内元素和块级元素的区别" tabindex="-1">4、行内元素和块级元素的区别 <a class="header-anchor" href="#_4、行内元素和块级元素的区别" aria-label="Permalink to &quot;4、行内元素和块级元素的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>区别</th><th>行内元素</th><th>块级元素</th></tr></thead><tbody><tr><td>宽高</td><td>无效</td><td>有效</td></tr><tr><td>padding</td><td>有效</td><td>有效</td></tr><tr><td>margin</td><td>水平方向有效</td><td>有效</td></tr><tr><td>自动换行</td><td>不可以</td><td>可以</td></tr><tr><td>多个元素排列</td><td>默认从左到右</td><td>默认从上到下</td></tr></tbody></table><h2 id="_5、隐藏元素的方法" tabindex="-1">5、隐藏元素的方法 <a class="header-anchor" href="#_5、隐藏元素的方法" aria-label="Permalink to &quot;5、隐藏元素的方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>display: none;</td><td>渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件</td></tr><tr><td>visibility: hidden;</td><td>元素在页面中仍占据空间，但是不会响应绑定的监听事件</td></tr><tr><td>opacity: 0;</td><td>透明度设置为 0，来隐藏元素。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件</td></tr><tr><td>position: absolute;</td><td>通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏</td></tr><tr><td>z-index: -10;</td><td>使用其余元素遮盖当前元素实现隐藏</td></tr><tr><td>clip/clip-path</td><td>使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件</td></tr><tr><td>transform: scale(0,0)</td><td>将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件</td></tr></tbody></table><h2 id="_6、transition-和-animation-的区别" tabindex="-1">6、transition 和 animation 的区别 <a class="header-anchor" href="#_6、transition-和-animation-的区别" aria-label="Permalink to &quot;6、transition 和 animation 的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>transition</th><th>animation</th></tr></thead><tbody><tr><td>过渡属性，强调过渡，需要触发事件来实现过渡效果。</td><td>动画属性，不需要触发事件，可自己执行，并且可以循环</td></tr></tbody></table><h2 id="_7、伪元素和伪类的区别和作用" tabindex="-1">7、伪元素和伪类的区别和作用 <a class="header-anchor" href="#_7、伪元素和伪类的区别和作用" aria-label="Permalink to &quot;7、伪元素和伪类的区别和作用&quot;">​</a></h2><table tabindex="0"><thead><tr><th>伪元素</th><th>伪类</th></tr></thead><tbody><tr><td>在元素前后插入额外的元素或样式，插入的元素没有子文档中生成，它们只在外部显示可见</td><td>将特殊的效果添加到特定的选择器上。它是在现有元素上添加类别，并不会产生新的元素</td></tr><tr><td>css3 中伪元素在书写是使用双冒号::，比如::before</td><td>冒号:用于伪类，比如:hover</td></tr></tbody></table><blockquote><p>伪类是通过在元素选择器上加入伪类改变元素的状态，而伪元素通过对元素的操作来改变元素</p></blockquote><h2 id="_8、盒模型" tabindex="-1">8、盒模型 <a class="header-anchor" href="#_8、盒模型" aria-label="Permalink to &quot;8、盒模型&quot;">​</a></h2><blockquote><p>盒模型由四个部分组成，分别是 margin、border、padding、content</p></blockquote><p><strong>标准盒模型和 IE 盒模型的区别在于：在设置 width 和 height 时，所对应的范围不同</strong></p><ul><li>标准盒模型的 width 和 height 属性的范围只包含了 content</li><li>IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content</li></ul><p>可以通过修改元素的 box-sizing 属性来改变元素的盒模型：</p><ul><li><code>box-sizing: content-box</code> 表示标准盒模型（默认值）</li><li><code>box-sizing: border-box</code> 表示 IE 盒模型（怪异盒模型）</li></ul><h2 id="_9、实现单行、多行文本溢出隐藏" tabindex="-1">9、实现单行、多行文本溢出隐藏 <a class="header-anchor" href="#_9、实现单行、多行文本溢出隐藏" aria-label="Permalink to &quot;9、实现单行、多行文本溢出隐藏&quot;">​</a></h2><blockquote><p>单行文本溢出</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overflow: hidden; // 溢出隐藏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ellipsis; // 溢出部分使用省略号显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: nowrap; // 规定段落中的文本不可换行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>多行文本溢出</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overflow: hidden; // 溢出隐藏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ellipsis; // 溢出用省略号显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display: -webkit-box; // 作为弹性伸缩盒子模型显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-webkit-line-clamp: 3; // 显示的行数</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_10、实现水平垂直居中" tabindex="-1">10、实现水平垂直居中 <a class="header-anchor" href="#_10、实现水平垂直居中" aria-label="Permalink to &quot;10、实现水平垂直居中&quot;">​</a></h2><blockquote><p>利用绝对定位（一）</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>利用绝对定位（二）：适用于已知盒子宽高</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>利用绝对定位（三）：适用于已知盒子宽高</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 自身 height 的一半 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 自身 width 的一半 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>flex 布局</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_11、浮动" tabindex="-1">11、浮动 <a class="header-anchor" href="#_11、浮动" aria-label="Permalink to &quot;11、浮动&quot;">​</a></h2><blockquote><p>非 IE 浏览器下，容器不设置高度且子元素浮动时，容器高度不能被撑开。此时，内容会溢出到容器外面影响布局</p></blockquote><h3 id="浮动的工作原理" tabindex="-1">浮动的工作原理 <a class="header-anchor" href="#浮动的工作原理" aria-label="Permalink to &quot;浮动的工作原理&quot;">​</a></h3><ul><li>浮动元素脱离文档流，不占据空间（引起“高度塌陷”）</li><li>浮动元素碰到包含它的边框或者其它浮动元素的边框停留</li></ul><p>浮动元素可以左右移动，知道遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，但元素浮动之后，不会影响块级元素的布局，只会影响内联元素的布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”</p><h3 id="浮动元素引起的问题" tabindex="-1">浮动元素引起的问题 <a class="header-anchor" href="#浮动元素引起的问题" aria-label="Permalink to &quot;浮动元素引起的问题&quot;">​</a></h3><ul><li>父元素的高度无法撑开，影响与父元素同级的元素</li><li>与浮动元素同级的非浮动元素会跟随其后</li><li>若浮动的元素不是第一个元素，则该元素之前的元素元素也要浮动，否则会影响页面的显示结构</li></ul><h3 id="清除浮动的方式" tabindex="-1">清除浮动的方式 <a class="header-anchor" href="#清除浮动的方式" aria-label="Permalink to &quot;清除浮动的方式&quot;">​</a></h3><ul><li>给父级元素设置高度</li><li>最后一个浮动元素之后添加一个空 div 标签，并添加<code>clear: both</code>样式</li><li>包含浮动元素的父级元素添加<code>overflow: hidden</code>或<code>overflow: auto</code>样式</li><li>使用 <code>::after</code> 伪元素</li><li>使用 clear 属性清除浮动</li></ul><h2 id="_12、块格式化上下文-block-formatting-context-bfc" tabindex="-1">12、块格式化上下文（Block Formatting Context，BFC） <a class="header-anchor" href="#_12、块格式化上下文-block-formatting-context-bfc" aria-label="Permalink to &quot;12、块格式化上下文（Block Formatting Context，BFC）&quot;">​</a></h2><blockquote><p><strong>BFC</strong>: 块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。</p></blockquote><p>通俗的讲，BFC 是一个独立的环境布局，可以理解为一个容器，在这个容器中按照一定的规则进行物品摆放，并且不会影响其他环境中的物品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。</p><h3 id="bfc-的创建条件" tabindex="-1">BFC 的创建条件 <a class="header-anchor" href="#bfc-的创建条件" aria-label="Permalink to &quot;BFC 的创建条件&quot;">​</a></h3><ul><li>根元素：body</li><li>元素设置浮动：float 除 none 以外的值</li><li>元素设置绝对定位：position 设置为 absolute 或 fixed</li><li>display 设置为 inline-block、table-cell、table-caption、flex 等</li><li>overflow 设置为 hidden、auto、scroll</li></ul><h3 id="bfc-的特点" tabindex="-1">BFC 的特点 <a class="header-anchor" href="#bfc-的特点" aria-label="Permalink to &quot;BFC 的特点&quot;">​</a></h3><ul><li>垂直方向上，自上而下排列，和文档流的排列方式一致</li><li>在 BFC 中上下相邻的的两个容器的 margin 会重叠</li><li>计算 BFC 的高度时，需要计算浮动元素的高度</li><li>BFC 区域不会与浮动的容器发生重叠</li><li>BFC 是独立的容器，容器内部元素不会影响外部元素</li><li>每个元素的 margin-left 值和容器的 border-left 相接处</li></ul><h3 id="bfc-的作用" tabindex="-1">BFC 的作用 <a class="header-anchor" href="#bfc-的作用" aria-label="Permalink to &quot;BFC 的作用&quot;">​</a></h3><ul><li>解决 margin 的重叠问题：由于 BFC 是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin 重叠的问题</li><li>解决高度塌陷的问题：对子元素设置浮动后，父元素会发生高度塌陷，即 height 变为 0。只需将父元素变成一个 BFC 即可，常用的办法是给父元素设置<code>overflow:hidden</code></li><li>创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。左侧设置<code>float:left</code>，右侧设置<code>overflow: hidden</code>。这样右边就触发了 BFC，BFC 的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠，实现了自适应两栏布局</li></ul><h2 id="_13、margin-重叠问题" tabindex="-1">13、margin 重叠问题 <a class="header-anchor" href="#_13、margin-重叠问题" aria-label="Permalink to &quot;13、margin 重叠问题&quot;">​</a></h2><blockquote><p>两个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠。需要注意的是，<strong>浮动的元素和绝对定位</strong>这种脱离文档流的元素的外边距不会折叠。重叠只会出现在<strong>垂直方向</strong>。</p></blockquote><h3 id="计算原则" tabindex="-1">计算原则 <a class="header-anchor" href="#计算原则" aria-label="Permalink to &quot;计算原则&quot;">​</a></h3><ul><li>如果两者都是正数，取较大的那个</li><li>如果一正一负，取正值减去负值后的绝对值</li><li>都是负值是，用 0 减去两个中绝对值大的那个</li></ul><h3 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h3><blockquote><p>对于折叠的情况，主要有两种：<strong>兄弟之间重叠</strong>和<strong>父子之间重叠</strong></p></blockquote><p>兄弟间折叠：</p><ul><li>底部元素变为行内盒子：<code>display: inline-block</code></li><li>底部元素设置浮动：<code>float</code></li><li>底部元素的 position 的值为<code>absolute/fixed</code></li></ul><p>父子间的折叠：</p><ul><li>父元素加入：<code>overflow: hidden</code></li><li>父元素添加透明边框：<code>border: 1px solid transparent</code></li><li>子元素变为行内盒子：<code>display: inline-block</code></li><li>子元素加入浮动属性或定位</li></ul>`,65),e=[l];function h(p,d,r,k,o,c){return a(),i("div",null,e)}const g=s(n,[["render",h]]);export{E as __pageData,g as default};
