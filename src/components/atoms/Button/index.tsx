import { Button } from "@mui/material"
export const ButtonComponent=(props:any)=>{
    return(
        <Button variant='text' sx={{color:'#FF725E', backgroundColor:'#FFF5F7'}}>{props.buttonLabel}</Button>
    )
}

ButtonComponent.defaultProps={
    children:'',
}