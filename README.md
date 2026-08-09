# 🌤️ Weather Widget

A responsive weather application built with **React.js** that allows users to search for a city and view real-time weather information using a weather API.

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* 🌡️ Show minimum and maximum temperature
* 💧 Display humidity
* 🌤️ Show current weather condition
* 🤗 Display "feels like" temperature
* 📱 Responsive user interface
* ⚡ Built using React functional components and hooks
* 🎨 Clean and simple weather dashboard

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **Weather API**
* **ESLint**

## 📂 Project Structure

```text
mini-project-react/
│
├── public/
│   
│
├── src/
│   ├── components/
│   │   ├── InfoBox.jsx
│   │   ├── InfoBox.css
│   │   ├── SearchBox.jsx
│   │   └── SearchBox.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── WeatherApp.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sampatil-25/Weather-Widget-.git
```

### 2. Navigate to the project

```bash
cd mini-project-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Never upload your `.env` file or expose your API key publicly.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown in your terminal.

## 🔑 API Configuration

This project uses a weather API to retrieve real-time weather information.

Add your API key to the `.env` file:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Make sure the variable name matches the one used in your React code.

## 📸 Screenshots

Add screenshots of your Weather Widget here.

Example:

```text
![Weather Widget](screenshot.png)
```

## 🎯 Future Improvements

* 📍 Detect weather using the user's current location
* 🌦️ Add a multi-day weather forecast
* 🌙 Add dark/light mode
* 🌧️ Add weather animations
* 📊 Add hourly weather information
* ⭐ Add favorite cities
* 📱 Further improve mobile responsiveness

## 👨‍💻 Author

**Samarth Patil**

GitHub:
https://github.com/Sampatil-25

## 📄 License

This project is created for learning and portfolio purposes.
