# Playwright Persistent Results

## 📌 Project Information

**Project Name:** Playwright Persistent Results

---

# 📖 Project Overview

This project demonstrates how to execute Playwright tests inside a Kubernetes cluster while preserving test reports and execution artifacts using persistent storage. Instead of losing reports when a Pod terminates, the project stores HTML reports and test results on a Persistent Volume (PV) through a Persistent Volume Claim (PVC).

The implementation combines Kubernetes storage resources with Playwright automation to create a reliable testing environment where reports remain available across multiple test executions. This approach is commonly used in CI/CD pipelines, allowing teams to review historical test reports without rerunning tests.

The project also introduces Kubernetes concepts such as Persistent Volumes, Persistent Volume Claims, Jobs, Pods, and Volume Mounts while demonstrating how Playwright integrates with persistent storage.

---

# 🎯 Project Objectives

The primary objectives of this project are to:

* Execute Playwright tests inside Kubernetes
* Understand Persistent Volumes (PV)
* Understand Persistent Volume Claims (PVC)
* Mount persistent storage inside containers
* Store Playwright HTML reports permanently
* Preserve test artifacts after Pod termination
* Improve debugging using persistent test results
* Prepare Playwright automation for Kubernetes-based CI/CD pipelines

---

# ⚙️ Kubernetes Implementation Workflow

```text id="9rhzpr"
Playwright Test

      │

      ▼

Kubernetes Job

      │

      ▼

Playwright Container

      │

      ▼

Persistent Volume Claim (PVC)

      │

      ▼

Persistent Volume (PV)

      │

      ▼

playwright-report/
test-results/

      │

      ▼

Reports Available After Pod Completion
```

---

# 📂 Project Structure

```text id="v5l4e6"
playwright-persistent-results/

├── k8s/
│   ├── persistent-volume.yaml
│   ├── persistent-volume-claim.yaml
│   ├── job.yaml
│   └── namespace.yaml
│
├── tests/
│   └── sample.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Kubernetes Resources

This project deploys the following Kubernetes resources:

* Namespace
* Persistent Volume (PV)
* Persistent Volume Claim (PVC)
* Playwright Job
* Pod

These resources work together to ensure Playwright reports are stored on persistent storage instead of the container's temporary filesystem.

---

# 💾 Persistent Storage Flow

```text id="u1hyu9"
Playwright Tests

      │

      ▼

Generate HTML Report

      │

      ▼

Volume Mount (/playwright-results)

      │

      ▼

Persistent Volume Claim

      │

      ▼

Persistent Volume

      │

      ▼

Reports Remain Available
Even After Job Completion
```

---

# 📚 Concepts Learned

Through this project, I gained practical experience with:

* Kubernetes Persistent Volumes
* Persistent Volume Claims
* Volume Mounts
* Kubernetes Jobs
* Playwright HTML Reporting
* Persistent Test Artifacts
* Storage Management
* Kubernetes Workloads
* Report Persistence
* CI/CD Ready Test Storage

---

# 💡 Key Learning Outcomes

This project helped me understand:

* Why container storage is temporary
* How Kubernetes Persistent Volumes store application data
* How Persistent Volume Claims request storage
* How Jobs mount persistent storage
* How Playwright reports survive Pod deletion
* Best practices for persistent test reporting in Kubernetes
* Preparing Playwright automation for enterprise Kubernetes environments


---

# 👨‍💻 Author

Developed as part of a DevOps and Kubernetes learning journey to understand secure CI/CD integration, Role-Based Access Control (RBAC), ServiceAccount authentication, Kubernetes security, and automated Playwright test execution.

