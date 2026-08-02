# Node.js CI Pipeline with GitHub Actions

> A practical project demonstrating Continuous Integration (CI) using GitHub Actions with a Node.js application.

## 📚 About

This repository was built while learning **DevOps** and **GitHub Actions** from scratch.

The goal is to understand **how modern CI pipelines work internally** instead of simply copying workflow files.

The project evolves phase by phase, starting from a basic Node.js application and gradually introducing GitHub Actions, automated testing, Docker, Docker Hub, and finally Continuous Deployment (CD).

---

## 🚀 Features

- GitHub Actions Workflow
- GitHub Hosted Ubuntu Runner
- Repository Checkout
- Node.js Setup
- Dependency Installation
- Automated Unit Testing with Jest
- Docker Image Build

---

## 🔄 Current CI Pipeline

```text
Developer
    │
    │ git push
    ▼
GitHub
    │
    ▼
GitHub Runner (Ubuntu)
    │
    ├── Checkout Repository
    ├── Setup Node.js
    ├── Install Dependencies
    ├── Run Unit Tests
    └── Build Docker Image
```

---

## 🛠️ Technologies Used

- Node.js
- Git
- GitHub Actions
- Jest
- Docker

---

## 📂 Project Structure

```
.
├── .github
│   └── workflows
│       └── ci.yml
├── app.js
├── math.js
├── math.test.js
├── Dockerfile
├── package.json
└── README.md
```

---

## 📖 Learning Progress

- ✅ Phase 1 — Basic Node.js Project
- ✅ Phase 2 — First GitHub Action
- ✅ Phase 3 — Repository Checkout
- ✅ Phase 4 — Node.js Setup & Runner Execution
- ✅ Phase 5 — Automated Testing with Jest
- ✅ Phase 6 — Docker Image Build

---

## 🎯 Upcoming Phases

- Docker Hub Integration
- GitHub Secrets
- Automated Deployment (CD)
- SSH Deployment
- Production CI/CD Pipeline

---

## 📜 License

MIT