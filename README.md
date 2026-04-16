# 🍽️ Delish — DevSecOps Pipeline with Dockerized Full-Stack Application

## 📌 Overview

Delish is a full-stack restaurant application enhanced with a complete **DevSecOps pipeline**.

The goal of this project was to transform a basic application into a **production-like system** by implementing containerization, secure architecture, CI/CD automation, and cloud deployment.

---

## 🧱 Architecture

```
User → HTTPS → Nginx (Reverse Proxy) → Frontend → Backend → PostgreSQL
```

### Key Points:

* Nginx acts as a **single entry point**
* Routes:

  * `/` → Frontend
  * `/api` → Backend
* All services communicate via **Docker network (`delish-net`)**
* Deployed on **AWS EC2**

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript

### Backend

* Node.js, Express.js

### Database

* PostgreSQL

### DevOps & Infrastructure

* Docker
* Docker Networking
* Nginx (Reverse Proxy)

### CI/CD & DevSecOps

* GitHub Actions
* Trivy (Image Scanning)

### Cloud

* AWS EC2

---

## 🐳 Containerization

* Multi-container architecture:

  * Frontend
  * Backend
  * Database
* Custom Docker network (`delish-net`)
* Internal communication via container DNS
* Backend & DB are **not exposed publicly**

---

## 🌐 Reverse Proxy & HTTPS

* Nginx configured as reverse proxy
* HTTPS implemented using SSL certificates
* HTTP → HTTPS redirection enabled
* Only Nginx exposes ports:

  * 80 (HTTP)
  * 443 (HTTPS)

---

## ⚙️ CI/CD Pipeline (DevSecOps)

Automated pipeline using GitHub Actions:

1. 🔍 Code Quality Check
2. 🔐 Secret Scanning
3. 📦 Dependency Scanning
4. 🐳 Dockerfile Linting
5. 🏗️ Build & Push Docker Images
6. 🛡️ Image Scanning using Trivy
7. 🚀 Deployment to AWS EC2 via SSH

---

## ☁️ Deployment

* Hosted on AWS EC2 instance
* Containers managed using Docker
* Reverse proxy (Nginx) handles all incoming traffic
* Backend and database run internally within the Docker network

---

## 🧠 Key Challenges & Solutions

* Fixed container communication using Docker networking
* Resolved **502 Bad Gateway** errors (backend connectivity)
* Corrected backend binding (`localhost → 0.0.0.0`)
* Solved static asset loading issues (Docker COPY + paths)
* Fixed port conflicts in the deployment pipeline
* Debugged database schema issues
* Implemented HTTPS using SSL certificates

---

## 🔐 DevSecOps Practices Implemented

* Secret scanning to detect exposed credentials
* Dependency vulnerability scanning
* Dockerfile linting for best practices
* Container image scanning using Trivy

---

## 📸 Screenshots

### 🖥️ Application UI

![App](./screenshots/application-UI.png)

### ⚙️ CI/CD Pipeline

![Pipeline](./screenshots/pipeline.png)

### 🐳 Running Containers

![Docker](./screenshots/docker.png)

### 🧱 Architecture Diagram

![Architecture](./screenshots/architecture.png)

### 🔐 HTTPS Enabled

![HTTPS](./screenshots/https.png)

---

## ⚠️ Limitations

* Uses self-signed SSL (browser shows "Not Secure")
* Database initialization is manual
* No orchestration (Docker only)
* Single-instance deployment

---

## 🚀 Future Improvements

* Integrate Let’s Encrypt for trusted SSL
* Automate database initialization
* Add monitoring & logging
* Implement Kubernetes for orchestration

---

## 🎯 Project Highlights

* End-to-end DevSecOps pipeline
* Real-world debugging and troubleshooting
* Secure architecture with reverse proxy
* Automated cloud deployment

---

## 👤 Author

**Pragya Malik**

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
