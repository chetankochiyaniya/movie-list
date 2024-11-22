# Movie List App

This is a **Movie List** application built using **React**, **Material-UI (MUI)**, and **React Query**. It fetches movie data from the OMDb API and displays it in a dynamic, paginated, and searchable list format. The movie list supports **infinite scrolling**, and each movie item can be expanded to show additional details like genre, director, and plot.

## Live URL : https://movie-explorer-mikelegal.netlify.app/

## Features

- **Collapsible Movie List**: Each movie item can be expanded to show additional details (e.g., Year, Genre, Director, Plot, Poster).
- **Infinite Scrolling**: Load more movies as the user scrolls down.
- **Search Functionality**: Search for movies by title.
- **Loading and Error Handling**: Display a loading spinner and error messages if the API request fails.
- **Material-UI** for sleek design and responsive UI.

## Project Structure

```
movie-list/
├── src/
│   ├── components/           # React components for the app
│   │   ├── MovieList.jsx     # Main movie list component with infinite scrolling
│   │   ├── MovieItem.jsx     # Movie item component (individual movie details)
│   │   ├── SearchBar.jsx     # Search input field for searching movies
│   │   ├── LoadingSpinner.jsx # Loading spinner component
│   │   └── ErrorMessage.jsx  # Error message component
│   ├── hooks/                # Custom React hooks
│   │   └── useFetchMovies.js # Hook for fetching movie data
│   ├── App.js                # Main app component, wraps everything
│   ├── index.js              # Entry point for React app
└── package.json              # Project dependencies and scripts
```

## Dependencies

- @mui/material: For Material-UI components.
- @tanstack/react-query: For data fetching and infinite scroll functionality.
- react-infinite-scroll-component: For implementing infinite scrolling.
- react: JavaScript library for building UI.
- react-dom: Provides DOM-specific methods for React.
- react-scripts: Scripts to build and run the React app.

## Prerequisites

To run the project locally, you will need:

- Node.js (version 14 or above)
- npm or yarn (Node package managers)

#

# Setup Instructions

## 1. Clone the Repository

Clone the repository to your local machine using the following command:
`git clone https://github.com/your-username/movie-list-app.git`

## 2. Install Dependencies

Navigate into the project directory and install the dependencies:

```
cd movie-list-app
npm install
```

## 3. Obtain OMDb API Key

To fetch movie data, you'll need an API key from OMDb API.

Steps to Get an API Key:

- Go to OMDb API website.
- Register or log in to create an account.
- After registration, you'll receive a unique API key.
- Once you have the API key, follow these steps to securely integrate it into your project:

## Create a .env file in the root directory of the project.

Add the following line to the .env file:
`REACT_APP_OMDB_API_KEY=your-api-key-here`
Replace your-api-key-here with the actual API key you received from OMDb.

Note: The .env file should not be committed to the version control (e.g., Git) for security reasons.

## 4. Running the Project Locally

After installing the dependencies and setting up the API key, run the project locally by using:
`npm start`
This will start the development server, and you can open the app in your browser at http://localhost:3000.

## 5. Build the Project for Production

To build the app for production, run the following command:
`npm run build`
This will bundle the app into static files that can be deployed.

## 6. API Key Handling in the Code

In the code, the API key is fetched from the .env file using the process.env.REACT_APP_OMDB_API_KEY variable. The useFetchMovies hook makes API requests to the OMDb API using this key.

#

## Component Details

1. MovieList.jsx
   This is the main component that fetches and displays the list of movies. It uses React Query's useInfiniteQuery hook to handle pagination and infinite scrolling.

2. MovieItem.jsx
   This component renders each individual movie item. When clicked, the item expands to show more information about the movie (e.g., Year, Genre, Director, Plot).

3. SearchBar.jsx
   A search bar component that allows the user to search for movies by title. The search results are updated dynamically as the search term changes.

4. LoadingSpinner.jsx
   This component displays a loading spinner while the data is being fetched from the API.

5. ErrorMessage.jsx
   Displays error messages if something goes wrong with the API request.

## Styling

The app uses Material-UI (MUI) components for the UI elements, ensuring a modern, sleek design with a dark theme. The overall layout is responsive, and the components are styled using MUI’s sx prop and default theme configurations.
