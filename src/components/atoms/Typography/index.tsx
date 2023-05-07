import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Types=(props:any)=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant={props.variant}>
        {props.children}
      </Typography>
    </Box>
  );
}



export default Types;