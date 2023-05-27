import { useState, useEffect } from 'react';
import binderService from "../services/binderService";
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Binders = () => {
  const [binderIds, setBinderIds] = useState<string[]>([]);
  useEffect(() => {
    binderService.getAll().then((initialBinderIds: string[]) => {
      setBinderIds(initialBinderIds)
    })
  }, [])
  const navigate = useNavigate()

  const handleButton = (binderId: string) => {
    navigate(`/${binderId}`)
  }
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
 <div>
      <Button
        variant="contained"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{background: "#00adb5"}}
      >
        Binders
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          binderIds.map(binderId => <MenuItem onClick={() => handleButton(binderId)}>{binderId}</MenuItem>)
        }
      </Menu>
    </div> 
  )
}

export default Binders;
