## [Git 使用教程](https://learngitbranching.js.org/?locale=zh_CN)

## 一、[Git 安装步骤](https://blog.csdn.net/m0_60935824/article/details/123528300)

## 二、[Git 配置环境变量](https://blog.csdn.net/aaxzsuj/article/details/108973697)

## 三、本地电脑生成 SSH key

```bash
打开终端：
ssh-keygen -t rsa -C 'git用户名(邮箱)'  // 输入左边命令并回车，接下来有三次提示设置，直接回车确认，不要设置密码，然后就会在系统中生成 ssh 密钥对

ls -al ~/.ssh  // 查看密钥位置
cat ~/.ssh/id_rsa.pub  // 查看 .ssh/id_rsa.pub 文件内容
ssh -T 'git用户名(邮箱)'  // 测试
```

关联账号：

- 复制 `密钥` 中 `公钥（后缀为 .pub）文件` 中的内容（可以通过记事本或者 vscode 打开）
- 回到 gitee/github，在个人的设置面板中找到 `ssh` ，将 `公钥` 粘贴进去

![本地电脑生成SSHkey1](/images/本地电脑生成SSHkey1.png)

![本地电脑生成SSHkey2](/images/本地电脑生成SSHkey2.png)

## 四、初始化

### 1、前提

必须安装 Git。

```bash
# 查看是否安装 Git
git --version

# 配置用户
git config --global user.name '用户名'
git config --global user.email '邮箱'

# 查看配置信息
git config --list
```

### 2、项目根目录做 git 初始化

vue/cli 创建的项目会自动初始化

```bash
git init
```

### 3、项目关联

创建远程仓库（建议远程仓库为空仓库），将本地仓库与远程仓库进行关联

远程仓库：github、gitee、公司内部自建

```bash
第一步、在 gitee 上创建仓库

第二步、关联
git remote add origin git@...

// 例子
git remote add origin git@gitee.com:zhudaidai/student_system.git

# 查看本地仓库关联的远程仓库，默认远程仓库分支为 origin
git remote
```

### 4、本地开发...

### 5、代码提交

```bash
第三步、 将文件变动添加到暂存区
git add 文件名
# or 一次性提交所有的变动
git add -A

第四步、将暂存区的内容提交到本地仓库
git commit -m '本次提交说明'

# 查看仓库状态
git status

第五步、一般在推送之前，可以先拉取一次远程端代码
# 注意：在推送之前远程端可能有其他同事推送了代码，所以必须先拉取最新代码到本机，进行合并，解决冲突，然后再推送。
git pull origin master

# 一般建议为了有更好的git树
git pull --rebase origin master

第六步、推送
# 将本地仓库中所有的变动推送到远程端
# 第一次推送加上 -u 作默认绑定，那么之后每次推送的时候只需要运行 git push
git push -u origin master

# 之后推送
git push

# 如果第一次推送没有加 -u ，那么以后每次都需要运行以下代码
git push origin master

后续修改代码后，先 git add，然后 git commit，最后在 git push.


# 拷贝项目
git clone git@gitee.com:zhudaidai/student_system.git（SSH）
```

## 五、分支操作

不同的开发团队具体操作不一样的

### 1、概念

分支操作就是生成一份现有代码的`物理拷贝`，然后在分支上进行操作，而不是直接在 master 上操作。

### 2、master

`主分支`，创建 git 后就会自动生成的分支，一般主分支作为线上发布的最终代码分支。

### 3、dev

开发分支，开发完毕后，就将 dev 合并到主分支。

每一个开发人员一个分支。从 dev 上拷贝过来，开发完毕后，合并到 dev 上去。

### 4、命令

```bash
# 查看本地分支，当前分支名前面有一个 *
git branch

# 查看远程分支
git branch -r

# 列出所有分支，包含本地端和远程端
git branch --all

# 创建分支，拷贝当前分支并命名
git branch 分支名

# 切换分支
git checkout 分支名

# 合并指定分支到当前分支
git merge 分支名

# 删除分支
git branch -d 分支名

# 强制删除
git branch -D 分支名
```

## 六、冲突

- 产生的原因：因为不同的人改了同一个文件的同一个部分的代码。

- 解决方法

  ```bash
  使用 git pull --rebase 拉取代码后发生冲突
  第一步、代码中解决冲突；
  
  第二步、git add -A
  
  第三步、
    >> 如果以远程端代码为准
      git rebase --skip
  
    >> 如果以本地端代码为准
      git rebase --continue
      git push
  ```

