import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CustomDialog = ({ open, children, title, contentText, handleContinue }) => {
    return (
        <Dialog open={open}> {/*boolean to toggle dialog*/}
            <DialogTitle>{title}</DialogTitle>
            <DialogContent> 
                <DialogContentText>
                    {contentText}
                </DialogContentText>
                {children} {/* Other content */}
            </DialogContent>
            <DialogActions> {/* Buttons */}
                {/* <Button onClick={handleClose}>Cancel</Button> */}
                <Button onClick={handleContinue}>Continue</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog