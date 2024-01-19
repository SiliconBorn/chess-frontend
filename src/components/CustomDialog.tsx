import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { ReactNode } from "react"

type CustomDialogProps={
 open:boolean,
 children?:ReactNode,
 title:string,
 contentText:string,
 handleContinue:()=>void
}

const CustomDialog = (props:CustomDialogProps) => {
    const {open,children,title,contentText,handleContinue} = props;
  return (
    <Dialog open={open}>
       <DialogTitle>{title}</DialogTitle>
       <DialogContent>
        <DialogContentText>
        {contentText}
        </DialogContentText>
            {children}
       </DialogContent>
       <DialogActions>
        <Button onClick={handleContinue}>
            Continue
        </Button>
       </DialogActions>
    </Dialog>
  )
}

export default CustomDialog