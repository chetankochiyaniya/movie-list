import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
    // Box component to center the CircularProgress spinner with some vertical spacing (my={4})
    <Box display="flex" justifyContent="center" my={4}>
        {/* CircularProgress component to display the loading spinner */}
        <CircularProgress color="primary" size={60} />
    </Box>
);

export default LoadingSpinner;
