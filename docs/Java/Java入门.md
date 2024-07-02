## 技术体系

- Java SE 标准版
- Java EE 企业版
- Java ME 小型版

## [安装 jdk](https://blog.csdn.net/xijinno1/article/details/135177719?spm=1001.2014.3001.5506)

[官网下载](https://www.oracle.com/java/technologies/downloads/)

## [安装 IntelliJ IDEA](https://blog.csdn.net/qq_43554335/article/details/121928344?spm=1001.2014.3001.5506)

[官网下载](https://www.jetbrains.com/idea/)

使用 idea 开发第一个 Java 程序步骤：

- 创建工程 new Project（空工程）
- 创建模块 new Module
- 创建包 new Package
- 创建类
- 编写代码、并启动

## cmd 常见命令

| 常用命令 | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| 盘符:    | 切换到某个盘下：D：，C:                                      |
| dir      | 查看当前路径下的文件信息                                     |
| cd       | 进入单级目录：cd itheima<br>进入多级目录：cd  D:\itheima\JavaSE\第一天<br>回退到上一级目录：cd .. <br>回退到盘符根目录：cd \ |
| cls      | 清屏                                                         |

## Java 入门程序

编写 Java 程序的步骤：

- 编写代码
- 编译代码
- 运行代码

![Java运行步骤](/images/Java运行步骤.png)

## JDK 组成

![JDK的组成](/images/JDK的组成.png)

## Java 跨平台原理

**什么是跨平台行呢？**

所谓跨平台指的是用 Java 语言开发的程序可以在多种操作系统上运行，常见的操作系统有 Windows、Linux、MacOS 系统。

**为什么 Java 程序可以跨平台呢？**

跨平台性的原理是因为在**不同版本的操作系统**中安装有**不同版本的Java 虚拟机**，Java 程序的运行只依赖于 Java 虚拟机，和操作系统并没有直接关系。**从而做到一处编译，处处运行**。

![Java跨平台原理](/images/Java跨平台原理.png)

## IDEA 常用快捷键

| 快捷键                           | 功能效果                  |
| -------------------------------- | ------------------------- |
| main/psvm、sout、...             | 快速键入相关代码          |
| ctrl + D                         | 复制当前行数据到下一行    |
| ctrl + Y                         | 删除所在行，建议用 ctrl+X |
| ctrl + alt + L                   | 格式化代码                |
| alt + shift + ↑，alt + shift + ↓ | 上下移动当前代码          |
| ctrl + / ，ctrl + shift + /      | 对代码进行注释            |
