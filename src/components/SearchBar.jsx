import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState(''); // State to store the current input value
    const [debouncedValue, setDebouncedValue] = useState(''); // Debounced value for the search

    // Debounce effect: Update the debounced value after 500ms delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue); // Set the debounced value after the delay
        }, 500); // Adjust the delay as needed (e.g., 500ms)

        // Clean up the timeout if the component is unmounted or inputValue changes
        return () => clearTimeout(timer);
    }, [inputValue]);

    // Effect to trigger the search when debounced value changes
    useEffect(() => {
        if (debouncedValue.trim()) {
            onSearch(debouncedValue); // Call onSearch with the debounced value
        } else {
            onSearch('Iron Man'); // Default search if debounced value is empty
        }
    }, [debouncedValue, onSearch]); // Runs when debouncedValue changes

    // Handler for input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // Update state with the new input value
    };

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
                sx={{
                    width: '100%', // Set width of input field
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'primary.main', // Set the border color to primary color
                            borderWidth: 2,
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.main', // Hover border color
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'primary.main', // Focused border color
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'primary.main', // Set the label color to primary color
                        '&.Mui-focused': {
                            color: 'primary.main', // Keep the label color the same when focused
                        },
                    },
                }} // Customize label and border color
                size="small" // Set the input size
            />

            {/* Clear button to reset the input field */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleClear}
            >
                Clear
            </Button>
        </Box>
    );
};

export default SearchBar;
