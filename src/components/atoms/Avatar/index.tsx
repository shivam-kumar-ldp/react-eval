import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import authorLogo from '../../../assets/author_pic.svg';
const ImageAvatars=(props:any)=>{
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={authorLogo} />
    </Stack>
  );
}

ImageAvatars.defaultProps={
  src:{authorLogo},
}

export default ImageAvatars;