# Memos 导入导出 JSON

此项目为 [Memos](https://github.com/usememos/memos) 的数据导入导出工具，[Memos 项目组不打算做导入导出的功能](https://github.com/usememos/memos/issues/778)，而是鼓励大家备份 db 文件，但许多 serverless 平台无法直接登录容器（例如 Zeabur），就根本无法备份了

WIP: 暂时只支持文字，不支持附件

**如果有条件登录服务器，建议直接备份 db 文件，而不是用此脚本导出！本脚本适合备份各种 serverless 平台（如 zeabur）部署的 memos**

## 导出

1. 下载本项目

```bash
git clone https://github.com/imaegoo/memos-import-from-memos.git
cd memos-import-from-memos
pnpm install
```

2. 复制一份 `config.example.json` 重命名为 `config.json`

3. 修改 `config.json` 中的 `sourceUrl` 和 `sourceToken`

4. 运行脚本

```bash
pnpm run export
```

5. 脚本会备份到项目根目录下的 `memos.json`

## 导入

1. 将 `memos.json` 放到项目根目录

2. 修改 `config.json` 中的 `targetUrl` 和 `targetToken`

3. 运行脚本

```bash
pnpm run import
```
