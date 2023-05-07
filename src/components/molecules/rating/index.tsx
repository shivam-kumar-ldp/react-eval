import { Stack } from '@mui/material';

import Types from "../../atoms/Typography";
import ratingLogo from "../../../assets/rating.svg"

export const Rating=(props:any)=>{
    return (
        <Stack>
            <Types variant='body1'>{props.val1} <img src={ratingLogo} alt="rating"/></Types>
            <Types variant='body1'>{props.val2}</Types>
        </Stack>
    )
}

Rating.defaultProps={
    val1:'4.5',
    val2:'830',
}