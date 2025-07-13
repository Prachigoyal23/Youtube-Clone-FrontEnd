##  ▶️ YouTube Clone — MERN Stack Project

A fully functional **YouTube Clone** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. This project replicates core features of YouTube including video streaming, user authentication, comment interaction, search & filter, channel management, and responsive design.

---

## 🚀 Live Demo

Demo Video : https://drive.google.com/file/d/17Q1t9Px8FKOy5pDWjliy-NUfT9cPnIhV/view?usp=sharing

---

## 📌 Features

### 🔸 Frontend (React)

- ✅ **Home Page** with YouTube-like layout
  - Header with search
  - Toggleable sidebar
  - Category filters
  - Grid display of videos with thumbnails, views, channel name
- ✅ **Video Player Page**
  - Embedded video player
  - Title, description, uploader, likes/dislikes
  - Comments with add/edit/delete
- ✅ **User Authentication**
  - Register/Login with JWT
  - Google-form styled login page
  - Displays username after login
- ✅ **Channel Page**
  - Create/Edit/Delete your channel and videos
  - View all videos from a channel
- ✅ **Search and Filter**
  - Search videos by title
  - Filter by category
- ✅ **Responsive Design**
  - Works across mobile, tablet, and desktop

### 🔹 Backend (Node.js + Express)

- 🔐 JWT Authentication with secure route protection
- 📦 REST APIs for:
  - Users (register/login)
  - Channels (create/edit/fetch)
  - Videos (create/fetch/update/delete)
  - Comments (add/edit/delete)
- 📁 MongoDB Data Storage for:
  - Users, Channels, Videos, Comments
  - Thumbnail & video URLs

---

## 🛠 Tech Stack

| Frontend         | Backend              | Database   | Auth         | Version Control |
|------------------|----------------------|------------|--------------|-----------------|
| React, Axios     | Node.js, Express.js  | MongoDB    | JWT (jsonwebtoken) | Git + GitHub     |

---

## 📂 Folder Structure

      .
      ├── node_modules/
      ├── public/
      ├── src/
      │   ├── assets/
      │   ├── Components/
      |   |   ├── CreateChannel.jsx
      |   |   ├── Header.jsx
      |   |   ├── Sidebar.jsx
      |   |   ├── UserModal.jsx
      |   |   ├── Video.jsx
      |   |   ├── Videolist.jsx
      |   |   ├──ViewChannel.jsx
      │   ├── Context/
      |   |   ├── AuthContext.js
      |   |   ├── DefaultVideo.js
      │   ├── CSS/
      |   |   ├── Channel.css
      |   |   ├── CreateChannel.css
      |   |   ├── HomePage.css
      |   |   ├── Login.css
      |   |   ├── Modal.css
      |   |   ├── NotFound.css
      |   |   ├── Video.css
      │   ├── Pages/
      |   |   ├── Channel.jsx
      |   |   ├── Channels.jsx
      |   |   ├── HomePage.jsx
      |   |   ├── Login.jsx
      |   |   ├── NotFound.jsx
      |   |   ├── Register.jsx
      |   |   ├── VideoPage.jsx
      │   ├── App.css
      │   ├── App.jsx
      │   ├── index.css
      │   ├── main.jsx
      ├── Youtube - backend/
      |   ├──Controllers/
      |   |   ├── channel.controller.js
      |   |   ├── comment.controller.js
      |   |   ├── user.controller.js
      |   |   ├──video.controller.js
      |   ├──middleware/
      |   |   ├── authMiddleware.js
      |   ├──Models
      |   |   ├── Channel.model.js
      |   |   ├── Comment.model.js
      |   |   ├── User.model.js
      |   |   ├──Video.model.js 
      |   ├──Routes/
      |   |   ├── channel.route.js
      |   |   ├── comment.route.js
      |   |   ├── user.route.js
      |   |   ├──video.route.js
      ├── .gitignore
      ├── eslint.config.js
      ├── index.html
      ├── package-lock.json
      ├── package.json
      ├── README.md
      └── vite.config.js


---

## ⚙️ Setup Instructions

📌 Prerequisites

    Node.js & npm

    MongoDB Atlas or Local MongoDB

    Git

---

## 📦 Installation

1. Clone repo

   ```bash
   git clone https://github.com/Prachigoyal23/Youtube-Clone-FrontEnd.git
   cd youtube-clone-FrontEnd

2. Setup server

   ```bash
   npm install

3. Setup client

   ```bash
   cd ../Youtube-backend
   npm install

---

## 🚀 Run Application

4. Run frontend

   ```bash
   npm run dev

5. Run backend (in new terminal)
  
   ```bash
   cd Youtube-backend
   npm start

---

## 🧑‍💻 Developer

Prachi Goyal
Youtube Clone Project | MERN Stack | 2025