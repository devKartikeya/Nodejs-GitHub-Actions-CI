# Node.js CI/CD Pipeline with GitHub Actions

> A practical implementation of a modern CI/CD pipeline using GitHub Actions, Docker, Docker Hub, and automated testing.

---

## Overview

This repository demonstrates the implementation of a Continuous Integration (CI) pipeline and Continuous Delivery (CD) and serves as the foundation for a complete Continuous Deployment (CD) workflow.

Instead of focusing only on GitHub Actions syntax, the project explores the complete lifecycle of a software change—from a developer committing code to an automated Docker image being published to a container registry.

The implementation is intentionally built incrementally to understand every stage of the pipeline and the responsibility of each component.

---

## Architecture

```text
                +----------------+
                |   Developer    |
                +--------+-------+
                         |
                    git push
                         |
                         ▼
                +----------------+
                |     GitHub     |
                +--------+-------+
                         |
                Workflow Trigger
                         |
                         ▼
        +----------------------------------+
        | GitHub Hosted Ubuntu Runner       |
        |----------------------------------|
        | • Checkout Repository            |
        | • Setup Node.js                  |
        | • Install Dependencies           |
        | • Execute Jest Test Suite        |
        | • Build Docker Image             |
        | • Authenticate with Docker Hub   |
        | • Push Docker Image              |
        +---------------+------------------+
                        |
                        ▼
               +------------------+
               |    Docker Hub    |
               +------------------+

           (Production Deployment - Next Phase)
```

---

## Implemented Features

- GitHub Actions Workflow
- GitHub Hosted Runners
- Repository Checkout
- Node.js Environment Provisioning
- Dependency Installation
- Automated Unit Testing (Jest)
- Docker Image Build
- Docker Hub Authentication using GitHub Secrets
- Automatic Docker Image Publishing

---

## CI-CD Pipeline

Every push to the **main** branch automatically performs the following tasks:

1. Provision a fresh Ubuntu runner.
2. Checkout the latest source code.
3. Configure the required Node.js runtime.
4. Install project dependencies.
5. Execute the Jest test suite.
6. Build the Docker image.
7. Authenticate with Docker Hub using encrypted repository secrets.
8. Publish the latest Docker image to Docker Hub.

Only if every previous step succeeds is the Docker image published.

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Language | Node.js |
| Version Control | Git |
| CI-CD Platform | GitHub Actions |
| Testing | Jest |
| Containerization | Docker |
| Container Registry | Docker Hub |

---

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   └── app.test.js
├── app.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## Workflow Highlights

- Fully automated CI pipeline
- Stateless GitHub-hosted runners
- Secure credential management using GitHub Secrets
- Docker image generation
- Automated image publication to Docker Hub
- Fail-fast pipeline execution (tests must pass before image publication)

---

## Learning Milestones

- ✅ Basic Node.js Project
- ✅ GitHub Actions Fundamentals
- ✅ Repository Checkout
- ✅ GitHub Hosted Runner
- ✅ Node.js Environment Setup
- ✅ Dependency Installation
- ✅ Automated Testing with Jest
- ✅ Docker Image Build
- ✅ Docker Hub Integration
- ✅ Secure Secret Management

---

## Upcoming Enhancements

- SSH-based Deployment
- Docker Compose Deployment
- Self-hosted Runner
- Release Automation

---

## License

This project is licensed under the MIT License.