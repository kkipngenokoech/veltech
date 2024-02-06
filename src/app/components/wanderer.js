import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Album from "./album";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar, Box, Typography, styled } from "@mui/material";
import { Badge } from "@mui/base";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledButton = styled(Button)({
  borderColor: "#f50057",
  color: "#f50057",
  "&:hover": {
    borderColor: "#f50057",
    backgroundColor: "#b30f0b", // Change this to your desired hover color
    color: "#fff",
  },
});

export default function WandererCard({ wanderer }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-beige">
      <Accordion className="bg-beige">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <WandererList wanderer={wanderer} />
        </AccordionSummary>
        <AccordionDetails>
          <Album albums={wanderer.albums} />
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={handleClickOpen}>View User</Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
          >
            <UserDialog wanderer={wanderer} />
            <DialogActions>
              <StyledButton onClick={handleClose} variant="outlined">
                close
              </StyledButton>

              <Button
                onClick={handleClose}
                variant="contained"
                color="success"
                style={{ backgroundColor: "#4caf50", color: "#fff" }}
              >
                Message
              </Button>
            </DialogActions>
          </Dialog>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

// the list with the wanderer's information
function WandererList({ wanderer }) {
  return (
    <li key={wanderer.email} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {wanderer.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {wanderer.email}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">
          {wanderer.albums.length} Albums
        </p>

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">Online</p>
        </div>
      </div>
    </li>
  );
}

// dialog to display user information
function UserDialog({ wanderer }) {
  return (
    <div>
      <DialogTitle>{wanderer.username}</DialogTitle>
      <DialogContent>
        <Box display="flex" alignItems="center">
          <Badge
            badgeContent={`Joined: ${new Date(
              new Date().setFullYear(
                new Date().getFullYear() - Math.floor(Math.random() * 50)
              )
            ).toLocaleDateString()}`}
            color="primary"
          >
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </Badge>
          <Typography
            variant="subtitle1"
            style={{ marginLeft: "10px" }}
          >{`Followers: 4909`}</Typography>
        </Box>

        <DialogContentText id="alert-dialog-slide-description">
          Adventurer, storyteller, and photography enthusiast. Capturing life's
          moments one frame at a time. 📸✨
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
