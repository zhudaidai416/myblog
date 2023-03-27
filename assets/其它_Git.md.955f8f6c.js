import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d6bf9272.js";const p="/myblog/images/本地电脑生成SSHkey1.png",e="/myblog/images/本地电脑生成SSHkey2.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"其它/Git.md","lastUpdated":1679930368000}'),o={name:"其它/Git.md"},r=l(`<h2 id="git-使用教程" tabindex="-1"><a href="https://learngitbranching.js.org/?locale=zh_CN" target="_blank" rel="noreferrer">Git 使用教程</a> <a class="header-anchor" href="#git-使用教程" aria-label="Permalink to &quot;[Git 使用教程](https://learngitbranching.js.org/?locale=zh_CN)&quot;">​</a></h2><h2 id="一、git-安装步骤" tabindex="-1">一、<a href="https://blog.csdn.net/m0_60935824/article/details/123528300" target="_blank" rel="noreferrer">Git 安装步骤</a> <a class="header-anchor" href="#一、git-安装步骤" aria-label="Permalink to &quot;一、[Git 安装步骤](https://blog.csdn.net/m0_60935824/article/details/123528300)&quot;">​</a></h2><h2 id="二、git-配置环境变量" tabindex="-1">二、<a href="https://blog.csdn.net/aaxzsuj/article/details/108973697" target="_blank" rel="noreferrer">Git 配置环境变量</a> <a class="header-anchor" href="#二、git-配置环境变量" aria-label="Permalink to &quot;二、[Git 配置环境变量](https://blog.csdn.net/aaxzsuj/article/details/108973697)&quot;">​</a></h2><h2 id="三、本地电脑生成-ssh-key" tabindex="-1">三、本地电脑生成 SSH key <a class="header-anchor" href="#三、本地电脑生成-ssh-key" aria-label="Permalink to &quot;三、本地电脑生成 SSH key&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">打开终端：</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git用户名(邮箱)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">输入左边命令并回车，接下来有三次提示设置，直接回车确认，不要设置密码，然后就会在系统中生成</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">密钥对</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-al</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看密钥位置</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/id_rsa.pub</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.ssh/id_rsa.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件内容</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git用户名(邮箱)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">测试</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>关联账号：</p><ul><li>复制 <code>密钥</code> 中 <code>公钥（后缀为 .pub）文件</code> 中的内容（可以通过记事本或者 vscode 打开）</li><li>回到 gitee/github，在个人的设置面板中找到 <code>ssh</code> ，将 <code>公钥</code> 粘贴进去</li></ul><p><img src="`+p+'" alt="本地电脑生成SSHkey1"></p><p><img src="'+e+`" alt="本地电脑生成SSHkey2"></p><h2 id="四、初始化" tabindex="-1">四、初始化 <a class="header-anchor" href="#四、初始化" aria-label="Permalink to &quot;四、初始化&quot;">​</a></h2><h3 id="_1、前提" tabindex="-1">1、前提 <a class="header-anchor" href="#_1、前提" aria-label="Permalink to &quot;1、前提&quot;">​</a></h3><p>必须安装 Git。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看是否安装 Git</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置用户</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">用户名</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">邮箱</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看配置信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2、项目根目录做-git-初始化" tabindex="-1">2、项目根目录做 git 初始化 <a class="header-anchor" href="#_2、项目根目录做-git-初始化" aria-label="Permalink to &quot;2、项目根目录做 git 初始化&quot;">​</a></h3><p>vue/cli 创建的项目会自动初始化</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3、项目关联" tabindex="-1">3、项目关联 <a class="header-anchor" href="#_3、项目关联" aria-label="Permalink to &quot;3、项目关联&quot;">​</a></h3><p>创建远程仓库（建议远程仓库为空仓库），将本地仓库与远程仓库进行关联</p><p>远程仓库：github、gitee、公司内部自建</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">第一步、在</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitee</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">上创建仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第二步、关联</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">例子</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@gitee.com:zhudaidai/student_system.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地仓库关联的远程仓库，默认远程仓库分支为 origin</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4、本地开发" tabindex="-1">4、本地开发... <a class="header-anchor" href="#_4、本地开发" aria-label="Permalink to &quot;4、本地开发...&quot;">​</a></h3><h3 id="_5、代码提交" tabindex="-1">5、代码提交 <a class="header-anchor" href="#_5、代码提交" aria-label="Permalink to &quot;5、代码提交&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">第三步、</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">将文件变动添加到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or 一次性提交所有的变动</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第四步、将暂存区的内容提交到本地仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">本次提交说明</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看仓库状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第五步、一般在推送之前，可以先拉取一次远程端代码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注意：在推送之前远程端可能有其他同事推送了代码，所以必须先拉取最新代码到本机，进行合并，解决冲突，然后再推送。</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 一般建议为了有更好的git树</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第六步、推送</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将本地仓库中所有的变动推送到远程端</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第一次推送加上 -u 作默认绑定，那么之后每次推送的时候只需要运行 git push</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 之后推送</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果第一次推送没有加 -u ，那么以后每次都需要运行以下代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">后续修改代码后，先</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add，然后</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit，最后在</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拷贝项目</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@gitee.com:zhudaidai/student_system.git（SSH）</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="五、分支操作" tabindex="-1">五、分支操作 <a class="header-anchor" href="#五、分支操作" aria-label="Permalink to &quot;五、分支操作&quot;">​</a></h2><p>不同的开发团队具体操作不一样的</p><h3 id="_1、概念" tabindex="-1">1、概念 <a class="header-anchor" href="#_1、概念" aria-label="Permalink to &quot;1、概念&quot;">​</a></h3><p>分支操作就是生成一份现有代码的<code>物理拷贝</code>，然后在分支上进行操作，而不是直接在 master 上操作。</p><h3 id="_2、master" tabindex="-1">2、master <a class="header-anchor" href="#_2、master" aria-label="Permalink to &quot;2、master&quot;">​</a></h3><p><code>主分支</code>，创建 git 后就会自动生成的分支，一般主分支作为线上发布的最终代码分支。</p><h3 id="_3、dev" tabindex="-1">3、dev <a class="header-anchor" href="#_3、dev" aria-label="Permalink to &quot;3、dev&quot;">​</a></h3><p>开发分支，开发完毕后，就将 dev 合并到主分支。</p><p>每一个开发人员一个分支。从 dev 上拷贝过来，开发完毕后，合并到 dev 上去。</p><h3 id="_4、命令" tabindex="-1">4、命令 <a class="header-anchor" href="#_4、命令" aria-label="Permalink to &quot;4、命令&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地分支，当前分支名前面有一个 *</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有分支，包含本地端和远程端</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建分支，拷贝当前分支并命名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强制删除</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="六、冲突" tabindex="-1">六、冲突 <a class="header-anchor" href="#六、冲突" aria-label="Permalink to &quot;六、冲突&quot;">​</a></h2><ul><li><p>产生的原因：因为不同的人改了同一个文件的同一个部分的代码。</p></li><li><p>解决方法</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">使用</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">拉取代码后发生冲突</span></span>
<span class="line"><span style="color:#FFCB6B;">第一步、代码中解决冲突；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第二步、git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">第三步、</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">如果以远程端代码为准</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--skip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">如果以本地端代码为准</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--continue</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ul>`,36),c=[r];function t(i,C,y,b,D,A){return n(),a("div",null,c)}const d=s(o,[["render",t]]);export{m as __pageData,d as default};
