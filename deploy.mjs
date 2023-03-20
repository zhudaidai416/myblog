import { $, cd } from 'zx/core'

// 打包
await $`npm run build`
// 跳转
cd(`docs/.vitepress/dist`)
// dist文件夹内初始化git并提交
await $`git init`
await $`git add -A`
await $`git commit -m 'deploy'`
// 替换为自己的git地址
await $`git push -f git@github.com:zhudaidai416/myblog.git master:gh-pages`
// 0为”成功退出码“，不写这句会返回1，为“失败退出码”
await $`exit 0`