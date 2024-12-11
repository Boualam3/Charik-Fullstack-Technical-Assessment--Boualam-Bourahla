import React, { ReactNode } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, DialogContent } from "@mui/material";

export interface SimpleModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

 const Modal: React.FC<SimpleModalProps> = ({isOpen, setIsOpen, children, title}) => {

  return (
    <Dialog 
      onClose={()=> setIsOpen(!isOpen)} 
      open={isOpen}
      fullWidth
      maxWidth={"md"}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle sx={{fontWeight:"bold"}} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{paddingTop:"1rem"}}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal