import { Typography, Box } from '@mui/material';

const ErrorMessage = ({ message }) => (
    // Box component to center the error message with some top margin (mt={4})
    <Box textAlign="center" mt={4}>
        {/* Typography component to display the error message in a larger text with an error color */}
        <Typography variant="h6" color="error">
            {message} {/* Display the error message passed as a prop */}
        </Typography>
    </Box>
);

export default ErrorMessage;
