
# DELISH PROJECT

## 📌 Description:
The Delish project is a creative front-end design project focused on building an aesthetically pleasing and structured website layout. This project emphasizes design consistency, typography, color usage, and overall visual presentation.

---

## ✨ Key Highlights:
- Creative UI design
- Clean typography and color scheme
- Responsive layout
- Modern visual structure

---

## Technologies Used:
HTML, CSS, JavaScript

---

## 🐳 Containerization (Docker):

This project is containerized using **Docker** to ensure consistent runtime across environments.

- Uses **nginx:alpine** as a lightweight web server
- Dockerfile copies static frontend files into the nginx HTML directory
- Enables portable and reproducible deployment

---

## Docker Compose:

Docker Compose is used to automate container lifecycle management.

It handles:
- Container creation
- Port mapping
- Restart policy
- Healthcheck monitoring

This allows the application to be started with a single command.

---

## How to Run (Docker):

 1. Clone the repository:
- git clone https://github.com/Pragya-Malik/Delish-Project.git
- cd Delish-Project
  
 2. Run with Docker Compose:
- docker compose up -d
  
 3. Open in browser:
- http://localhost:8080

---

## PROJECT STRUCTURE:
Delish-Project
│── index.html
│── style.css
│── main.js
│── Dockerfile
│── docker-compose.yml
│── README.md

---


---

## 🚀 Purpose

*The goal of this project is not only frontend development but also learning real-world DevOps practices such as containerization, environment consistency, and automated deployment workflows.*



## ▶️ How to Run (Docker)

### 1. Clone the repository
