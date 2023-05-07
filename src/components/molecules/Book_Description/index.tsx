import { Stack } from "@mui/material"
import Types from "../../atoms/Typography"

export const Description=(props:any)=>{
    return (
        <Stack spacing={3}>
            <Types variant='h5'>{props.bookName}</Types>
            <Types variant='body1'>{props.bookDesc}</Types>
            <Types variant='h6'>{props.bookCategory}</Types>
        </Stack>
    )
}

Description.defaultProps={
    bookName:'Inorganic Chemistry',
    bookDesc:'Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons see more',
    bookCategory:'Catergory - Chemistry',
}


