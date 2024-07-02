## ssh: connect to host github.com port 22: Connection timed out

```bash
# 报错
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists
```

```bash
# 检查 SSH 是否能够连接成功
ssh -T git@github.com

# 报错
ssh: connect to host github.com port 22: Connection timed out
```

**解决**

- 在C盘 - 用户 - 你的主机名文件夹中找到 .ssh 文件夹（此前配置 SSH 时会生成该文件夹）
- 在 .ssh 文件夹中新建文件 config，不带后缀（可以新建文本文档，去掉 .txt 后缀）
- 打开 config 文件，输入以下内容，保存

```bash
Host github.com
User YourEmail（你的邮箱）
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```

再次执行

```bash
ssh -T git@github.com
```

会出现以下提示，输入 yes 回车即可

```bash
The authenticity of host '[ssh.github.com]:443 ([192.30.255.123]:443)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '[ssh.github.com]:443,[192.30.255.123]:443' (RSA) to the list of known hosts.
```


再次执行 `ssh -T git@github.com`

```bash
# 验证通过
Hi zhudaidai416! You've successfully authenticated, but GitHub does not provide shell access.
```


参考：https://zhuanlan.zhihu.com/p/524223202