<div align="center">

# 🎬 Movies Search App

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/)
[![OMDB API](https://img.shields.io/badge/OMDB%20API-003B6F?style=for-the-badge&logo=imdb&logoColor=white)](https://www.omdbapi.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/)

A dynamic movie discovery application with real-time search, pagination, and advanced filtering — powered by the OMDB API.

[🔗 Live Demo](https://your-demo-link.netlify.app) · [🐛 Report Bug](https://github.com/KamatchiKarthi/movie-app/issues) · [✨ Request Feature](https://github.com/KamatchiKarthi/movie-app/issues)

</div>

---

## 📸 Screenshots

<!-- Add your screenshots here -->
<!-- ![Home Page](./screenshots/home.png) -->
<!-- ![Search Results](./screenshots/search.png) -->

---

## ✨ Features

- 🔍 **Real-Time Search** — Instantly search movies by title with debounced input for optimized API calls
- 📄 **Pagination** — Browse through large result sets with smooth page navigation
- 🎛️ **Advanced Filters** — Filter movies by type (Movie, Series, Episode) and year
- 🎬 **Movie Details** — View detailed info including plot, ratings, cast, genre, and poster
- 📱 **Fully Responsive** — Seamless experience across desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** — Optimized rendering with efficient state management

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, JavaScript ES6+ |
| **Styling** | CSS3, Responsive Design |
| **API** | OMDB API (REST) |
| **State Management** | React Hooks (useState, useEffect, useCallback) |
| **Build Tool** | Vite / Create React App |
| **Deployment** | Netlify / Vercel |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **OMDB API Key** — Get one free at [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/KamatchiKarthi/movie-app.git

# 2. Navigate to the project
cd movie-app

# 3. Install dependencies
npm install

# 4. Create environment file
echo "VITE_OMDB_API_KEY=your_api_key_here" > .env

# 5. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
movie-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Pagination.jsx
│   │   └── Filter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Details.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

> 📌 *Update the folder structure above if your actual project differs.*

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_OMDB_API_KEY` | Your OMDB API key |

---

## 🌐 API Reference

This app uses the [OMDB API](https://www.omdbapi.com/) to fetch movie data.

| Endpoint | Description |
|----------|-------------|
| `?s={title}` | Search movies by title |
| `?i={imdbID}` | Get full movie details by IMDB ID |
| `?type={movie\|series}` | Filter results by type |
| `?y={year}` | Filter results by release year |
| `?page={number}` | Paginate through results |

---

## 📈 Key Highlights

- ⚡ **Debounced Search** — Reduces unnecessary API calls, improving performance
- 🧩 **Component-Based Architecture** — Clean, reusable, and maintainable code
- 🎯 **Conditional Rendering** — Handles loading states, errors, and empty results gracefully
- 🔄 **Efficient State Management** — Leveraging React Hooks for predictable data flow

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo → Create your branch → Commit → Push → Open PR
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Kamatchi K**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kamatchi-k-4a537916a)
[![Portfolio](https://img.shields.io/badge/Portfolio-6C63FF?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kamatchiportfolio.netlify.app)
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:karthivdj@gmail.com)

---

<div align="center">

⭐ **If you found this project useful, give it a star!** ⭐

</div>
