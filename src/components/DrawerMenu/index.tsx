import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

import { useNavigate } from 'react-router-dom';
import { BottomDiv, Container, MidleDiv, TopDiv } from './styles';

import logoImage from "../../assets/logo.png";




export const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Container>

            <Button onClick={toggleDrawer(true)}>
                <MenuIcon />
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)} >
                {/* {DrawerList} */}

                <TopDiv>
                    <img src={logoImage} alt="Logo" onClick={() => navigate('/')} />
                    <h1 onClick={() => navigate('/')}>Heliasta</h1>
                </TopDiv>

                <MidleDiv>

                    <ListItem key={'Processos'} disablePadding >
                        <ListItemButton
                            onClick={
                                () => {
                                    setOpen(false)
                                    navigate('/')
                                }
                            }
                        >
                            <ListItemIcon>
                                <FolderOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Processos'} />
                        </ListItemButton>
                    </ListItem>




                    <ListItem key={'Configuração'} disablePadding>
                        <ListItemButton
                            onClick={
                                () => {
                                    setOpen(false)
                                    navigate('/settings')
                                }
                            }
                        >
                            <ListItemIcon>
                                <SettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Configuração'} />
                        </ListItemButton>
                    </ListItem>

                </MidleDiv>

                <BottomDiv>
                    <Avatar sx={{ bgcolor: '#62ADF8', width: 24, height: 24, fontSize: 12 }}>X</Avatar>
                    <h1>xexeo@cos.ufrj.br</h1>
                    <LogoutIcon onClick={
                                () => {
                                    setOpen(false)
                                    navigate('/login')
                                }
                            } className='iconLogoutStyle' />
                </BottomDiv>

            </Drawer>
        </Container>
    );
}