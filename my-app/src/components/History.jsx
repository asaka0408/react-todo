import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { AlertButton } from './index';

const History = () => {
  return (
  <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {itemData.map((item) => (
        <div>
          <ListItem
            key={item.index}
            secondaryAction={
              <AlertButton />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt='商品画像'
                  src={`${item.img}`}
                />
              </ListItemAvatar>
              <ListItemText id={item.index} primary={`${item.title}`} />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
  </List>
  );
}
export default History;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
];
