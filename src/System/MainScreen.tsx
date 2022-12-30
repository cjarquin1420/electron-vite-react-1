import { Box, Button } from '@mui/material';

const MainScreen = () => {
  return (
    <Box
      component="span"
      sx={{
        width: '100%',
        height: '100%',
        paddingTop: '20px',
        backgroundColor: 'red',
      }}
    >
      <Box
        component="span"
        sx={{ p: '5px', paddingTop: '20px', border: '1px dashed black' }}
      >
        <Button>Save</Button>
      </Box>
    </Box>
  );
};

export default MainScreen;
