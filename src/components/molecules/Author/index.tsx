import { Stack , Box} from "@mui/material"
import ImageAvatars from "../../atoms/Avatar"
import Types from "../../atoms/Typography"
import { MoreIc } from "../../atoms/Icons"

export const Author=(props:any)=>{
    return(
        <>
        <Stack spacing={28} direction='row'>
        <Stack spacing={3} direction='row'>
        <ImageAvatars/>
        <Box>
        <Types variant='h6'>{props.authorName}</Types>
        <Types variant='body1'>{props.authorJob}</Types>
        </Box>
        </Stack>
            <MoreIc/>
        </Stack>

    </>
    )
}

Author.defaultProps={
    authorName:'JD LEE',
    authorJob:'AUTHOR'
}