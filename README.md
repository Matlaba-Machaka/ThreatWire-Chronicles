# 🛡️ ThreatWire Chronicles Blog Platform

> **Work In Progress**  
> A full-stack blog platform focused on cybersecurity awareness and education, with a fully functional frontend and a scaffolded backend.

---

## 📌 Overview

This project simulates a secure, category-based blog platform for cybersecurity news and insights. While the backend is still in progress, the frontend is interactive and responsive, designed to deliver content in an engaging and informative way.

The application is structured to reflect real-world development practices — with potential to scale into a secure, user-driven publishing platform.

## 📁 Project Structure

```bash
cybersecure-blog/
├── client/ 
│ ├── public/ 
│ ├── src/
│ │ ├── assets/ 
│ │ ├── components/ 
│ │ ├── pages/ 
│ │ ├── store/ 
│ │ ├── utils/ 
│ │ ├── App.js 
│ │ ├── index.js 
│ │ └── index.css 
│ ├── package.json
│
│
├── server/ 
│ ├── controllers/ 
│ ├── models/ 
│ ├── routes/ 
│ ├── config/ 
│ └── server.js 
│
├── .gitignore
├── README.md
└── LICENSE
```
---

## 💡 Features

### 🌐 Frontend (React + TailwindCSS)

- 📰 Cybersecurity-themed blog UI
- 📂 Post categories (Malware, Phishing, Ransomware, etc.)
- ⚡ Fast navigation with React Router
- 🧑‍💻 Writer profile pages
- 🔒 Basic security hardening with `react-helmet`
- 📱 Fully responsive and mobile-ready
- 🎨 TailwindCSS for utility-first styling

### 🛠 Backend (In Progress)

- Node.js + Express server
- MongoDB integration for posts and users
- Secure JWT-based authentication
- Comments, post CRUD, and user follow features
- OTP/email-based user verification

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Matlaba-Machaka/ThreatWire-Chronicles.git
cd ThreatWire-Chronicles
```
### 2. Start the frontend
```bash
cd client
npm i
npm run dev
```

### 🧪 Demo Screenshots

![Home Page](/client/src/assets/Screenshots/home-p.png)
![Catergories](/client/src/assets/Screenshots/cat.png)
![Sign-In](/client/src/assets/Screenshots/sign-in.png)
![Sign-Up](/client/src/assets/Screenshots/sign-up.png)

### ⚙️ Tech Stack

- Frontend	React, TailwindCSS, React Router, Helmet
- Icons	React Icons (FontAwesome)
- Backend	Express.js, MongoDB (in development)
- Auth	JWT + OTP Verification (planned)

### 📜 License
This project is open-source and available under the MIT License. Feel free to use, adapt, and build on it with proper attribution.

