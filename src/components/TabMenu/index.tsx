import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

import { useTabMenuContext } from '../../contexts/TabMenuContext';

import { BottomDiv, Container, ItemTab, MidleDiv, TopDiv } from "./styles"

import logoImage from "../../assets/logo.png";

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const TabMenu = () => {
    const navigate = useNavigate();
    const { valueTabMenuContext, handleChangeTabMenuContext } = useTabMenuContext();



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
                        /* icon={<FolderOutlinedIcon />} 
                        label="Configurações"  */
                        label={
                            <ItemTab>
                              <FolderOutlinedIcon className='iconStyle'/>
                              <h1>Processos</h1>
                            </ItemTab>
                          }
                        /* {...a11yProps(1)}  */
                        onClick={() => navigate('/')}
                    />
                    
                    <Tab 
                        /* icon={<FolderOutlinedIcon />} 
                        label="Configurações"  */
                        label={
                            <ItemTab>
                              <SettingsOutlinedIcon className='iconStyle'/>
                              <h1>Configurações</h1>
                            </ItemTab>
                          }
                        {...a11yProps(1)} 
                        onClick={() => navigate('/settings')}
                    />

                </Tabs>
            </MidleDiv>

            <BottomDiv>
                <h1>bottom</h1>
            </BottomDiv>
        </Container>
    );
}