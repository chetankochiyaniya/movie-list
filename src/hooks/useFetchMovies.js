import { useInfiniteQuery } from '@tanstack/react-query';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Store API key in .env file for security

// Function to fetch movie data from OMDb API
const fetchMovies = async ({ queryKey, pageParam = 1 }) => {
    const searchQuery = queryKey[1]; // Get search query from queryKey array
    // Fetch data from the OMDb API with the search query and page number
    const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&page=${pageParam}&apikey=${API_KEY}`);

    // Check if the response is okay
    if (!response.ok) {
        throw new Error('Network response was not ok'); // Throw an error if the response is not okay
    }

    const data = await response.json(); // Parse the response to JSON

    // If the API responds with a failure message, throw an error
    if (data.Response === "False") {
        throw new Error(data.Error || "Failed to fetch movies");
    }

    return data; // Return the data fetched from the API
};

// Custom hook to fetch movies using the `useInfiniteQuery` from React Query
export const useFetchMovies = (searchQuery) => {
    return useInfiniteQuery({
        queryKey: ['movies', searchQuery], // Unique key for the query; includes searchQuery for dependency
        queryFn: fetchMovies, // The function to fetch data
        getNextPageParam: (lastPage, pages) => {
            // Logic to calculate if there is a next page to fetch
            const totalResults = parseInt(lastPage.totalResults, 10); // Total results from the last page
            const fetchedResults = pages.length * 10; // OMDb API returns 10 results per page
            return fetchedResults < totalResults ? pages.length + 1 : undefined; // Return the next page number if more results are available
        },
        enabled: !!searchQuery, // Ensure the query only runs when searchQuery exists (non-empty)
    });
};
