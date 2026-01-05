# Branch Strategy

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code. Always stable. |
| `dev` | Development branch. All features merge here first. |
| `feature/*` | New features (e.g., `feature/login-page`) |
| `fix/*` | Bug fixes (e.g., `fix/navbar-bug`) |
| `hotfix/*` | Urgent fixes for production |

---

## Workflow

### 1. Start a new feature

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### 2. Work on your feature

Make changes, commit often:

```bash
git add .
git commit -m "feat: add login form"
```

### 3. Push and create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a PR to merge into `dev` (not `main`).

### 4. After review, merge to dev

Once approved, merge to `dev`. Delete the feature branch.

### 5. Release to main

When `dev` is stable and tested, create a PR from `dev` → `main`.

---

## Naming Conventions

| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/short-description` | `feature/wallet-connect` |
| Bug fix | `fix/short-description` | `fix/header-alignment` |
| Hotfix | `hotfix/short-description` | `hotfix/login-crash` |
| Docs | `docs/short-description` | `docs/update-readme` |

---

## Rules

- Never push directly to `main`
- Always create PR for code review
- Keep commits small and descriptive
- Delete branches after merging
