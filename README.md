# byreixwift-frontend

Frontend web application for Byreixwift, built with Next.js and TypeScript. Clean, modern, and ready for integration across the Sidra ecosystem.

## Tech Stack

- **Next.js** — React framework with App Router
- **React** — Latest React with modern features
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **pnpm** — Fast package manager
- **ESLint** — Code linting

## Quick Start

```bash
git clone <repo>
cd project
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Team

See [Team Members](./docs/MEMBERS.md) for the full list of contributors.


## Project

See [Project Vision and MVP](./docs/PROJECT.md) for goals, target users, and scope.

## Contributing

- [Definition of Done](./docs/DOD.md) — checklist before closing issues
- [Branch Strategy](./docs/CONTRIBUTING.md) — how to contribute

## Some Cruicial GIT Commands for Collaborative Purposes

Branch Management :

# List local branches & current branch
git branch

# Switch to an existing branch
git checkout <branch-name>

# Create a new branch without switching
git branch <branch-name>

# Create a new branch and switch to it
git checkout -b <branch-name>

Syncing with Remote :

# Fetch updates from remote (does NOT change your local branches)
git fetch <remote>       # e.g., git fetch origin

# Merge changes from a remote-tracking branch into your current branch
git merge <remote>/<branch>   # e.g., git merge origin/main

# Shortcut for fetch + merge
git pull <remote> <branch>    # e.g., git pull origin main

Making Changes :

# Stage all changes
git add .

# Commit staged changes
git commit -m "your message"

# Push local branch to remote
git push <remote> <branch>     # e.g., git push origin fix

# Push and set upstream (tracking) for the first time
git push -u <remote> <branch>  # e.g., git push -u origin fix

Example Workflow : 

# 1. Create and switch to a new branch
git checkout -b fix

# 2. Make changes, stage, and commit
git add .
git commit -m "your fix"

# 3. Push branch to remote and set tracking
git push -u origin fix

# 4. Stay up-to-date with main branch
git fetch origin
git merge origin/main

# 5. Push your merged updates
git push
