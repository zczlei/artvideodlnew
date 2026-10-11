# GitHub → Cloudflare 持续部署

ArtVideoDL 与 DuetBooth 一样：推代码到 GitHub 后由 Actions 自动部署 Cloudflare Worker。

## A. GitHub Actions（已落地）

### 流程

1. push / merge 到 `master`
2. `.github/workflows/deploy.yml`：`pnpm install` → `opennextjs-cloudflare build` → `deploy --keep-vars`
3. Worker 名：`artvideodl`（见 `wrangler.jsonc`）
4. 预览地址：https://artvideodl.zczlei.workers.dev （自定义域名后绑到同一 Worker）

PR / 非 master 分支跑 `.github/workflows/ci.yml`（只 build，不部署）。

### 仓库 Secrets（Settings → Secrets and variables → Actions）

| Secret | 说明 |
|---|---|
| `CLOUDFLARE_API_TOKEN` | 权限至少含 Workers Scripts Edit / Write |
| `CLOUDFLARE_ACCOUNT_ID` | `a37ddcd55479d60107a2583a7d0d6514` |

创建 Token：https://dash.cloudflare.com/profile/api-tokens → Create Token → **Edit Cloudflare Workers** 模板即可。

可与 `zczlei/duetbooth` 共用同一套 Token / Account ID。

### 本机紧急热修

```bash
pnpm deploy
```

---

## B. Workers Builds（Cloudflare 拉 Git，可选）

若已用 GitHub Actions，不必同时开 Workers Builds，避免双重部署。

---

## 验收

1. 改一行文案 → push `master`
2. GitHub Actions `Deploy Cloudflare` 变绿
3. 打开 https://artvideodl.zczlei.workers.dev 看到新内容
