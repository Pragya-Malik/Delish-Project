# 🍽️ Delish — Containerized Restaurant Application

## 📌 Overview

Delish is a **containerized restaurant web application** designed to demonstrate **real-world DevOps practices**.

The project starts as a frontend application and evolves into a **multi-service system** including backend APIs, database integration, CI/CD pipelines, and Kubernetes deployment.

---

## 🎯 Project Objective

This project is built to showcase:

- Containerization using Docker
- Multi-service architecture using Docker Compose
- CI/CD automation (upcoming)
- Kubernetes-based deployment (upcoming)

> This is not just a UI project — it is a **DevOps-focused system design project**.

---

## 🏗️ Current Architecture

Frontend (Static Website)
⬇
Nginx Web Server (Docker Container)

---

## 🧰 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Web Server: Nginx
- Containerization: Docker
- Orchestration (Local): Docker Compose

---

## 🐳 Containerization Details

The application is containerized using Docker to ensure:

- Environment consistency
- Portability across systems
- Simplified deployment

### Key Points:

- Uses lightweight **nginx:alpine** image
- Static files served via Nginx
- Custom Dockerfile for build

---

## ⚙️ Docker Compose Setup

Docker Compose is used to manage the application lifecycle.

It handles:

- Container orchestration
- Port mapping
- Restart policies
- Health checks

Run the entire application with a single command.

---

## 🚀 How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/Pragya-Malik/Delish-Project.git
cd Delish-Project
```

### 2. Start the application

```
docker compose up --build
```

### 3. Access the app

```
http://localhost:8080
```

---

## 📁 Project Structure

```
Delish-Project/
│── frontend/
│   ├── index.html
│   ├── style.css
│   └── main.js
│
│── Dockerfile
│── docker-compose.yml
│── README.md
```

---

## 🔄 Upcoming Enhancements (Roadmap)

This project is actively being expanded into a full DevOps pipeline:

- [ ] Backend API (Node.js + Express)
- [ ] Database integration (PostgreSQL)
- [ ] Multi-container architecture
- [ ] CI/CD pipeline using GitHub Actions
- [ ] Docker image push to registry
- [ ] Kubernetes deployment (Minikube / K8s cluster)
- [ ] ConfigMaps & Secrets management

---

## 📊 Future Architecture (Target)

User → Frontend → Backend API → Database
        ⬇
      Docker Containers
        ⬇
      CI/CD Pipeline
        ⬇
     Kubernetes Cluster

---

## 💡 Key Learning Outcomes

- Understanding container-based deployments
- Managing multi-service applications
- Building CI/CD pipelines
- Deploying applications on Kubernetes

---

## 📌 Important Note

This project is intentionally designed to grow from a simple frontend application into a **production-style DevOps project**.

---

## 👩‍💻 Author

Pragya Malik
