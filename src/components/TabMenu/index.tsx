import { useState, SyntheticEvent, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

import { useTabMenuContext } from '../../helpers/TabMenuContext';

import { BottomDiv, Container, ItemTab, MidleDiv, TopDiv } from "./styles"

import logoImage from "../../assets/logo.png";

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../helpers/AuthContext';



export const TabMenu = () => {
    const navigate = useNavigate();
    const { valueTabMenuContext, handleChangeTabMenuContext } = useTabMenuContext();
    const {signout} = useContext(AuthContext)


    return (
        <Container>
            <TopDiv>
                <img src={logoImage} alt="Logo" onClick={()=>navigate('/')}/>
                <h1 onClick={()=>navigate('/')}>Heliasta</h1>
            </TopDiv>

            <MidleDiv>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={valueTabMenuContext}
                    onChange={handleChangeTabMenuContext}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab 
                        label={
                            <ItemTab>
                              <FolderOutlinedIcon className='iconStyle'/>
                              <h1>Processos</h1>
                            </ItemTab>
                          }
                        onClick={() => navigate('/')}
                        className='tabStyle'
                    />
                    
                    <Tab 
                        label={
                            <ItemTab>
                              <SettingsOutlinedIcon className='iconStyle'/>
                              <h1>Configurações</h1>
                            </ItemTab>
                          }
                        onClick={() => navigate('/settings')}
                        className='tabStyle'
                    />

                </Tabs>
            </MidleDiv>

            <BottomDiv>
                <Avatar sx={{ bgcolor: '#62ADF8', width:24, height:24, fontSize: 12 }}>X</Avatar>
                <h1>xexeo@cos.ufrj.br</h1>
                <LogoutIcon onClick={signout} className='iconLogoutStyle'/>
            </BottomDiv>
        </Container>
    );
}