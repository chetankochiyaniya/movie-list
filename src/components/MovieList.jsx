import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies'; // Custom hook to fetch movie data
import MovieItem from './MovieItem'; // Component to display individual movie details
import LoadingSpinner from './LoadingSpinner'; // Loading spinner component
import ErrorMessage from './ErrorMessage'; // Error message component
import InfiniteScroll from 'react-infinite-scroll-component'; // Infinite scrolling component
import { Box, Paper } from '@mui/material'; // Material UI components for layout and styling

const MovieList = ({ searchQuery }) => {
    // Destructure the response from the custom hook `useFetchMovies`
    const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useFetchMovies(searchQuery);

    // If data is still loading, show a loading spinner
    if (isLoading) return <LoadingSpinner />;

    // If there is an error, show the error message
    if (isError) return <ErrorMessage message={error.message} />;

    return (
        <Box mt={3}>
            {/* InfiniteScroll component to load more movies when scrolled to the bottom */}
            <InfiniteScroll
                dataLength={data?.pages.flatMap(page => page.Search).length || 0} // Total number of items displayed
                next={fetchNextPage} // Fetch next page of results when scrolling
                hasMore={hasNextPage} // Whether there are more pages to load
                loader={<LoadingSpinner />} // Loader component displayed while loading more movies
            >
                {/* Map through each page's Search results and display each movie */}
                {data?.pages.flatMap(page => page.Search).map(movie => (
                    <Paper elevation={3} sx={{ mb: 2, ml: 1, mr: 1, borderRadius: 2, overflow: 'hidden' }} key={movie.imdbID}>
                        {/* MovieItem component to display individual movie */}
                        <MovieItem movie={movie} />
                    </Paper>
                ))}
            </InfiniteScroll>
        </Box>
    );
};

export default MovieList;
