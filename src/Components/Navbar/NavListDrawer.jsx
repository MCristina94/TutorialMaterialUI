import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const NavListDrawer = ({navList, setOpen}) => {
  return (
    <Box sx={{ width: 250 }}>
      <Divider />
      <nav>
        <List>
            {
                navList.map((item, index) => (
                <ListItem disablePadding key={index}>
                    <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                    </ListItemButton>
                </ListItem>  
                ))
            }
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
{/* <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav> */}