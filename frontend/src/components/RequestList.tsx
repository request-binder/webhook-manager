import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Request } from "../types.ts";
import { useNavigate, useParams, Link} from "react-router-dom";
import RequestView from "./RequestView.tsx"


import myimage from '../../dist/assets/logo-0a7e200d.png';

const drawerWidth = 330;
interface Props {
  url: string;
  requests: Request[]; 
}

const RequestList: React.FC<Props> = ({url, requests}) => {
  const navigate = useNavigate();
  const {binderId, requestId} = useParams()
  let currRequest: Request | null = null; 

  const handleButton = (requestId: string) => {
    navigate(`/${binderId}/${requestId}`);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`}}
      >
        <Toolbar style={{background: "#00adb5"}}>
          <Typography variant="h6" noWrap component="div">
            Binder URL: {url}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Link to="/">
          <img alt='my_image' height="200px" src={ myimage}></img>
        </Link>
        <Divider />
        <List>
          {
          requests.map((request) => {
            if (request._id === requestId) {
              currRequest = request
            }
            return (
            <ListItem key={request._id} disablePadding>
              <ListItemButton selected={request._id === requestId} onClick = {() => handleButton(request._id)}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={request.createdAt}/>
              </ListItemButton>
            </ListItem>
          )})}
        </List>
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      {
        currRequest && 
        <RequestView request={currRequest}/> 
      }  
      </Box>
    </Box>
  );
}
export default RequestList 