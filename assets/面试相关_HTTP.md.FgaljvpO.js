import{_ as t,c as e,o as a,a3 as o}from"./chunks/framework.CJ5r7Wtd.js";const S=JSON.parse('{"title":"一、HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"面试相关/HTTP.md","filePath":"面试相关/HTTP.md","lastUpdated":1684262502000}'),r={name:"面试相关/HTTP.md"},d=o('<h1 id="一、http" tabindex="-1">一、HTTP <a class="header-anchor" href="#一、http" aria-label="Permalink to &quot;一、HTTP&quot;">​</a></h1><h2 id="_1、get-和-post-的请求的区别" tabindex="-1">1、GET 和 POST 的请求的区别 <a class="header-anchor" href="#_1、get-和-post-的请求的区别" aria-label="Permalink to &quot;1、GET 和 POST 的请求的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>区别</th><th>GET</th><th>POST</th></tr></thead><tbody><tr><td>幂等性</td><td>是</td><td>否</td></tr><tr><td>应用场景</td><td>用于对服务器资源不会产生影响的场景（比如请求一个网页的资源等）</td><td>用于对服务器资源会产生影响的情景（比如注册用户等）</td></tr><tr><td>是否缓存</td><td>是</td><td>否</td></tr><tr><td>传参方式</td><td>查询字符串传参</td><td>请求体传参</td></tr><tr><td>安全性</td><td>将参数放入 url 中向服务器发送，不安全</td><td>在请求体中，安全</td></tr><tr><td>请求长度</td><td>浏览器对于 url 长度有限制，会受到影响</td><td>在请求体中，不会收到浏览器影响</td></tr><tr><td>参数类型</td><td>ASCII 字符</td><td>文件、图片等</td></tr></tbody></table><blockquote><p>幂等性：指一个请求方法执行一次和多次的效果完全相同</p></blockquote><h2 id="_2、post-和-put-的请求的区别" tabindex="-1">2、POST 和 PUT 的请求的区别 <a class="header-anchor" href="#_2、post-和-put-的请求的区别" aria-label="Permalink to &quot;2、POST 和 PUT 的请求的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">区别</th><th style="text-align:center;">POST</th><th style="text-align:center;">PUT</th></tr></thead><tbody><tr><td style="text-align:center;">作用</td><td style="text-align:center;">创建数据</td><td style="text-align:center;">更新数据</td></tr></tbody></table><blockquote><p>为什么 POST 请求会发送两次？</p></blockquote><ul><li>第一次请求为 options 预检请求，状态码为 204</li></ul><p>作用 1：询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求 作用 2： 检测服务器是否为同源请求，是否支持跨域</p><ul><li>第二次请求为真正的 POST 请求</li></ul><h2 id="_3、常见的-http-请求头和响应头" tabindex="-1">3、常见的 HTTP 请求头和响应头 <a class="header-anchor" href="#_3、常见的-http-请求头和响应头" aria-label="Permalink to &quot;3、常见的 HTTP 请求头和响应头&quot;">​</a></h2><table tabindex="0"><thead><tr><th>HTTP Request Header</th><th>定义</th></tr></thead><tbody><tr><td>Accept</td><td>浏览器能够处理的内容类型</td></tr><tr><td>Accept-Charset</td><td>浏览器能够显示的字符集</td></tr><tr><td>Accept-Encoding</td><td>浏览器能够处理的压缩编码</td></tr><tr><td>Accept-Language</td><td>浏览器当前设置的语言</td></tr><tr><td>Connection</td><td>浏览器与服务器之间连接的类型</td></tr><tr><td>Cookie</td><td>浏览器当前页面设置的任何 Cookie</td></tr><tr><td>Host</td><td>当前发出请求的页面所在的域</td></tr><tr><td>Referer</td><td>当前发出请求的页面的 URL</td></tr><tr><td>User-Agent</td><td>浏览器的用户代理字符串</td></tr></tbody></table><table tabindex="0"><thead><tr><th>HTTP Responses Header</th><th>定义</th></tr></thead><tbody><tr><td>Date</td><td>表示消息发送的时间，时间的描述格式由 rfc822 定义</td></tr><tr><td>server</td><td>服务器名称</td></tr><tr><td>Connection</td><td>浏览器与服务器之间连接的类型</td></tr><tr><td>Cache-Control</td><td>控制 HTTP 缓存</td></tr><tr><td>content-type</td><td>表示后面的文档属于什么 MIME 类型</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Content-Type</th><th>定义</th></tr></thead><tbody><tr><td>application/x-www-form-urlencoded</td><td>浏览器原生 form 表单</td></tr><tr><td>multipart/form-data</td><td>表单上传文件</td></tr><tr><td>application/json</td><td>服务器消息主体是序列化后的 JSON 字符串</td></tr><tr><td>text/xml</td><td>提交 XML 格式的数据</td></tr></tbody></table><h2 id="_4、状态码-304" tabindex="-1">4、状态码 304 <a class="header-anchor" href="#_4、状态码-304" aria-label="Permalink to &quot;4、状态码 304&quot;">​</a></h2><blockquote><p>为什么会有 304？</p></blockquote><p>服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制。当客户端再次请求页面时，服务器会判断请求的页面是否已被缓存，若已经被缓存则返回 304，此时客户端将调用缓存内容。</p><p><strong>状态码 304 不应该被认为是一种错误，而是对客户端有缓存情况下服务端的一种响应。</strong></p><blockquote><p>产生较多 304 状态码的原因是什么？</p></blockquote><ul><li>页面更新周期长或者长时间未更新</li><li>纯静态页面或强制生成静态 HTML</li></ul><blockquote><p>304 状态码过多会造成什么问题？</p></blockquote><ul><li>网站快照停止</li><li>收录减少</li><li>权重下降</li></ul><h2 id="_5、常见的-http-请求方法" tabindex="-1">5、常见的 HTTP 请求方法 <a class="header-anchor" href="#_5、常见的-http-请求方法" aria-label="Permalink to &quot;5、常见的 HTTP 请求方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>GET</td><td>向服务器获取数据</td></tr><tr><td>POST</td><td>向服务器发送数据</td></tr><tr><td>PUT</td><td>修改数据</td></tr><tr><td>PATCH</td><td>用于对资源进行部分修改</td></tr><tr><td>DELETE</td><td>删除指定数据</td></tr></tbody></table><h2 id="_6、cookie" tabindex="-1">6、Cookie <a class="header-anchor" href="#_6、cookie" aria-label="Permalink to &quot;6、Cookie&quot;">​</a></h2><blockquote><p>Cookie 是最早被提出来的本地存储方式，在此之前，服务端是无法判断网络中的两个请求是否是同一用户发起的，为解决这个问题，Cookie 就出现了。Cookie 的大小只有 4kb，它是一种纯文本文件，每次发起 HTTP 请求都会携带 Cookie</p></blockquote><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ul><li>Cookie 一旦创建成功，就无法修改</li><li>Cookie 是无法跨域的</li><li>每个域名下 Cookie 的数量不能超过 20 个，每个 Cookie 的大小不能超过 4kb</li><li>存在安全问题，一旦被拦截，即可获得 session 的所有信息</li><li>Cookie 在请求一个新的页面的时候都会被发送出去</li></ul><h3 id="如何解决无法跨域问题" tabindex="-1">如何解决无法跨域问题？ <a class="header-anchor" href="#如何解决无法跨域问题" aria-label="Permalink to &quot;如何解决无法跨域问题？&quot;">​</a></h3><ul><li>使用 Nginx 反向代理</li><li>在一个站点登陆之后，往其他网站写 Cookie。服务端的 Session 存储到一个节点，Cookie 存储 sessionId</li></ul><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>和 session 结合使用，将 sessionId 存储到 Cookie 中，每次发送请求都会携带这个 sessionId，以便于服务端识别和响应</li><li>可以用来统计页面的点击次数</li></ul><h2 id="_7、localstorage" tabindex="-1">7、LocalStorage <a class="header-anchor" href="#_7、localstorage" aria-label="Permalink to &quot;7、LocalStorage&quot;">​</a></h2><blockquote><p>LocalStorage 是 HTML5 新引入的特性，由于有的时候我们存储的信息较大，Cookie 就不能满足我们的需求，这时候 LocalStorage 就派上用场了</p></blockquote><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>LocalStorage 能存储 5MB 的信息</li><li>LocalStorage 能够持久化存储数据，数据不会随着页面的关闭而消失，除非手动清除</li><li>仅存储在本地，发起 HTTP 请求的时候不会被携带</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>存在兼容性问题，IE8 以下版本浏览器不支持</li><li>如果浏览器设置为隐私模式，我们将无法获取到 LocalStorage</li><li>受到同源策略的限制，即端口、协议、主机地址有任何一个不相同，都不会访问</li></ul><h3 id="常用-api" tabindex="-1">常用 API <a class="header-anchor" href="#常用-api" aria-label="Permalink to &quot;常用 API&quot;">​</a></h3><table tabindex="0"><thead><tr><th>API</th><th>注释</th></tr></thead><tbody><tr><td>localStorage.setItem(key, value)</td><td>保存数据到 localStorage</td></tr><tr><td>localStorage.getItem(key)</td><td>从 localStorage 获取数据</td></tr><tr><td>localStorage.removeItem(key)</td><td>从 localStorage 删除 key 对应的数据</td></tr><tr><td>localStorage.clear()</td><td>从 localStorage 删除所有保存的数据</td></tr><tr><td>localStorage.key(index)</td><td>获取某个索引的 Key</td></tr></tbody></table><h3 id="应用场景-1" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景-1" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>一些网站配置个人设置的时候，比如肤色、字体等会将数据保存在 LocalStorage 中</li><li>保存一些不经常变动的个人信息或用户浏览信息</li></ul><h2 id="_8、sessionstorage" tabindex="-1">8、SessionStorage <a class="header-anchor" href="#_8、sessionstorage" aria-label="Permalink to &quot;8、SessionStorage&quot;">​</a></h2><blockquote><p>SessionStorage 和 LocalStorage 都是在 HTML5 才提出来的存储方案，SessionStorage 主要用于临时保存同一窗口(或标签页)的数据，刷新页面时不会删除，关闭窗口或标签页之后将会删除这些数据</p></blockquote><h3 id="sessionstorage-与-localstorage-对比" tabindex="-1">SessionStorage 与 LocalStorage 对比 <a class="header-anchor" href="#sessionstorage-与-localstorage-对比" aria-label="Permalink to &quot;SessionStorage 与 LocalStorage 对比&quot;">​</a></h3><ul><li>SessionStorage 和 LocalStorage 都在<strong>本地进行数据存储</strong></li><li>SessionStorage 也有同源策略的限制，但是 SessionStorage 有一条更加严格的限制，SessionStorage<strong>只有在同一浏览器的同一窗口下才能够共享</strong></li><li>LocalStorage 和 SessionStorage<strong>都不能被爬虫爬取</strong></li></ul><h3 id="常用-api-1" tabindex="-1">常用 API <a class="header-anchor" href="#常用-api-1" aria-label="Permalink to &quot;常用 API&quot;">​</a></h3><table tabindex="0"><thead><tr><th>API</th><th>注释</th></tr></thead><tbody><tr><td>sessionStorage.setItem(key, value)</td><td>保存数据到 sessionStorage</td></tr><tr><td>sessionStorage.getItem(key)</td><td>从 sessionStorage 获取数据</td></tr><tr><td>sessionStorage.removeItem(key)</td><td>从 sessionStorage 删除 key 对应的数据</td></tr><tr><td>sessionStorage.clear()</td><td>从 sessionStorage 删除所有保存的数据</td></tr><tr><td>sessionStorage.key(index)</td><td>获取某个索引的 Key</td></tr></tbody></table><h3 id="应用场景-2" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景-2" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>由于 SessionStorage 具有时效性，所以可以用来存储一些网站的游客登录的信息，还有临时的浏览记录的信息。当关闭网站之后，这些信息也就随之消除了</li></ul><h2 id="_9、cookie、localstorage、sessionstorage-区别" tabindex="-1">9、Cookie、LocalStorage、SessionStorage 区别 <a class="header-anchor" href="#_9、cookie、localstorage、sessionstorage-区别" aria-label="Permalink to &quot;9、Cookie、LocalStorage、SessionStorage 区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Cookie</th><th>LocalStorage</th><th>SessionStorage</th></tr></thead><tbody><tr><td>实最开始是服务器端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服务器端。cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享</td><td>html5 提供的一种浏览器本地存储的方法，它一般也能够存储 5M 或者更大的数据。它和 sessionStorage 不同的是，除非手动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享</td><td>html5 提供的一种浏览器本地存储的方法，它借鉴了服务器端 session 的概念，代表的是一次会话中所保存的数据。它一般能够存储 5M 或者更大的数据，它在当前窗口关闭后就失效了，并且 sessionStorage 只能被同一个窗口的同源页面所访问共享</td></tr></tbody></table>',52),l=[d];function i(s,h,n,c,b,u){return a(),e("div",null,l)}const k=t(r,[["render",i]]);export{S as __pageData,k as default};
