import React, { useState } from 'react';
import { Card, CardMedia, Typography, Collapse, Box } from '@mui/material';

const MovieItem = ({ movie }) => {
    // State to manage the expanded/collapsed state of the card
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            // Toggle the expanded state when the card is clicked
            onClick={() => setExpanded(!expanded)}
            sx={{
                cursor: 'pointer', // Change the cursor to a pointer on hover
                transition: 'transform 0.3s ease-in-out', // Smooth transition for hover scaling
                '&:hover': {
                    transform: 'scale(1.02)', // Slightly scale up on hover for a dynamic effect
                    background: "#eeeeee",  // Lighter secondary color for hover effect
                },
                background: "#fafafa",  // Darker secondary color for the initial card background
                color: 'primary',  // Use the primary color for text (e.g., white or theme color)
                padding: expanded ? 3 : 1,  // Adjust padding based on expanded state (more padding when expanded)
            }}
        >
            {/* Movie title and year displayed at the top */}
            <Typography variant="h6" component="div" gutterBottom sx={{ marginBottom: 0, paddingLeft: "10px" }}>
                {movie.Title} ({movie.Year})
            </Typography>

            {/* Collapse component to show/hide additional details */}
            <Collapse in={expanded}>
                <Box mt={2}>
                    {/* Display movie poster if available */}
                    {movie.Poster !== "N/A" && (
                        <CardMedia
                            component="img"
                            image={movie.Poster} // Movie poster image
                            alt={movie.Title} // Alt text for the poster
                            sx={{ width: 'auto', borderRadius: 2, maxHeight: "250px" }} // Styling for the poster
                        />
                    )}
                    {/* Display additional movie information */}
                    <Typography variant="body2" mt={1} sx={{ fontSize: '0.875rem' }}>
                        Type: {movie.Type} {/* Movie type (e.g., movie, series, etc.) */}
                    </Typography>
                    <Typography variant="body2" mt={1} sx={{ fontSize: '0.875rem' }}>
                        Year: {movie.Year} {/* Release year of the movie */}
                    </Typography>
                </Box>
            </Collapse>
        </Card>
    );
};

export default MovieItem;
