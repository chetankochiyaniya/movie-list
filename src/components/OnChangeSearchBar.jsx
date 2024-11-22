import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const OnChangeSearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState(''); // State to store the current input value

    useEffect(() => {
        // Trigger default search when the input value is empty
        if (!inputValue.trim()) {
            onSearch('Iron Man'); // Default search if input is empty
        }
    }, [inputValue, onSearch]); // Run this effect when inputValue changes

    // Handler for input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // Update state with the new input value
    };

    // Handler for the search button click
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        if (inputValue.trim()) {
            onSearch(inputValue); // Call onSearch with the input value if it's not empty
        }
    }

    // Handler to clear the input field
    const handleClear = () => {
        setInputValue(''); // Reset the input value to empty
    };

    return (
        <Box component="form" display="flex" justifyContent="center" gap={2}>
            {/* Input field for entering search query */}
            <TextField
                variant="outlined"
                label="Search for movies..."
                value={inputValue} // Bind input value to state
                onChange={handleInputChange} // Handle input change
                sx={{ width: '80%' }} // Set width of input field
                size="small" // Set the input size
            />
            {/* Search button that triggers the search */}
            <Button type="submit" variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
            {/* Clear button to reset the input field */}
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
            >
                Clear
            </Button>
        </Box>
    );
};

export default OnChangeSearchBar;
