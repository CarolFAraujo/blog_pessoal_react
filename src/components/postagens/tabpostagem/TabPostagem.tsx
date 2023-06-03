import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre a desenvolvedora" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Eu sou a Carolina, tenho 36 anos, sempre me envolvi ativamente com a tecnologia e me adaptei bem às mudanças constantes dela. 
Eu decidi embarcar no bootcamp com o intuito de aprimorar serviços e processos internos das empresas na área de operações e, agora, estou iniciando também a faculdade em Análise e Desenvolvimento de Sistemas, com o propósito de expandir ainda mais meu conhecimento e alcançar mais objetivos  na área de tech. Além disso, tenho Inglês avançado e Alemão intermediário.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;