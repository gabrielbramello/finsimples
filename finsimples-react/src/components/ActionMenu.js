import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import CustomizedDialogs from './CustomizedDialog';
import DeleteDialog from './DeleteDialog';


export default function ActionMenu(props) {

    const options = [
        {
            text: 'Editar',
            icon: <EditIcon />
        },
        {
            text: 'Remover',
            icon: <DeleteIcon />
        },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const open = Boolean(anchorEl);


    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                open={open}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option.text}
                        onClick={console.log('Teste')}
                    >
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}
