import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList'; // Importing the MovieList component
import { Container, Typography, Fab } from '@mui/material'; // Material-UI components for layout and styling
import SearchBar from './components/SearchBar'; // Importing the SearchBar component
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Icon for scroll-to-top button

const App = () => {
  // State for storing the search query, with a default value of 'Iron Man'
  const [searchQuery, setSearchQuery] = useState('Iron Man'); // Default search query
  const [showScrollTopButton, setShowScrollTopButton] = useState(false); // State for controlling visibility of the scroll-to-top button

  // Function to handle search input change and update the search query
  const handleSearch = (query) => setSearchQuery(query);

  // Function to show/hide the scroll-to-top button based on the scroll position
  const handleScroll = () => {
    // If scrolled more than 300px, show the button, otherwise hide it
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  // Function to scroll the page back to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    // Attach the scroll event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      {/* Main container for the app content */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        {/* Main heading */}
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          Movie Explorer
        </Typography>
        {/* Search bar component to allow users to search movies */}
        <SearchBar onSearch={handleSearch} />
        {/* Movie list component to display the search results */}
        <MovieList searchQuery={searchQuery} />
      </Container>

      {/* Conditionally render the scroll-to-top button based on scroll position */}
      {showScrollTopButton && (
        <Fab
          color="primary" // Button color
          sx={{
            position: 'fixed', // Fixed positioning to always show on screen
            bottom: 20, // 20px from the bottom
            right: 20, // 20px from the right
            zIndex: 1000, // Ensure button is on top of other content
          }}
          onClick={scrollToTop} // Scroll to top when clicked
        >
          <ArrowUpwardIcon /> {/* Scroll-up icon */}
        </Fab>
      )}
    </div>
  );
};

export default App;
