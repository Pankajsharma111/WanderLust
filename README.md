
# 🌍 Wanderlust

**Wanderlust** is a full-stack travel destination sharing application where users can discover, list, and review scenic locations around the world. Built with the **MERN stack** technologies and enhanced with cloud services and map APIs, Wanderlust provides a seamless platform for travel enthusiasts to connect and share their adventures.

🔗 **Live Demo**: [https://wanderlust-20ww.onrender.com/listings](https://wanderlust-20ww.onrender.com/listings)


## ✨ Features

* 1. 🔐 Login and Sign Up functionality using Passport.js  
* 2. 🔒 Authentication and Authorization to secure user access  
* 3. 🧠 Implemented MVC Architecture (Model, View, Controller)  
* 4. ✏️ CRUD operations on travel listings (create, read, update, delete)  
* 5. 💬 Review system with the ability to add and delete reviews  
* 6. 📸 Image uploads and storage using Cloudinary  
* 7. ❗ Centralized error handling using custom middleware  
* 8. ✅ Server-side schema validation using Joi  
* 9. 🔑 Password security implemented using PBKDF2 hashing algorithm  
* 10. 🗺️ Interactive maps integrated with Leaflet API  
* 11. 🛡️ Security enhancements using Helmet, Mongo Sanitize, etc.  
* 12. 📱 Responsive UI built with Bootstrap 5 and EJS templating  
* 13. 🔄 Session management with secure cookie configuration  
* 14. 🗂️ Well-structured and maintainable codebase with comments  

---

## 🛠️ Tech Stack

* **Frontend**: EJS, Bootstrap, HTML/CSS
* **Backend**: Node.js, Express
* **Database**: MongoDB & Mongoose
* **Authentication**: Passport.js
* **Image Hosting**: Cloudinary
* **Map Integration**: Leaflet API
* **Deployment**: Render

---

## 🚀 Getting Started Locally

### Prerequisites

* Node.js & npm
* MongoDB (Local or Atlas)

### Installation

```bash
git clone [https://github.com/your-username/Wanderlust.git](https://github.com/Pankajsharma111/WanderLust.git)
cd Wanderlust
npm install
```

### Environment Setup

Create a `.env` file in the root with the following variables:

```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_connection_string
SECRET=session_secret_key
```

### Run the Server

```bash
npm start
```

Visit `http://localhost:8080` in your browser.

---

## 🧾 Folder Structure

```
Wanderlust/
├── models/           # Mongoose schemas
├── routes/           # Express route files
├── views/            # EJS templates
├── public/           # Static assets (CSS, JS, Images)
├── controllers/      # Logic for routes
├── utils/            # Error handling and middleware
├── app.js            # Main server file
```



## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---
