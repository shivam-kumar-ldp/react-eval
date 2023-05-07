import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import bookLogo from '../../assets/Book.svg';
import { Stack } from '@mui/material';
import { Author } from '../molecules/Author';
import { Description } from '../molecules/Book_Description';
import { ShareIc,BookmarkIc } from '../atoms/Icons';
import { Rating } from '../molecules/rating';
import { ButtonComponent } from '../atoms/Button';

const SimplePaper=(props:any)=> {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 650,
          height: 320,
        },
      }}
    >
    <Paper elevation={5} sx={{padding:'15px'}}>
        <Stack direction="row">
        <img src={bookLogo} alt="Book pic" />
        <Box ml={10}>

          <Author authorName={props.authorName} authorJob={props.authorJob}/>
          <Description  bookName={props.bookName} bookDesc={props.bookDesc} bookCategory={props.bookCategory}/>
          <Rating val1={props.val1} val2={props.val2}/>
          <ButtonComponent buttonLabel={props.buttonLabel}/>
          <Stack sx={{position:'relative',left:'300px'}} spacing={3} direction='row'>
            <ShareIc/>
            <BookmarkIc/>
          </Stack>
        </Box>
        </Stack>
    </Paper>
    </Box>
  );
}
export default SimplePaper;