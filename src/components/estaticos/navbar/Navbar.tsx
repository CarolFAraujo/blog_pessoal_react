import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            {/* <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar> */}

            <AppBar position="static" style={{ background: "#923FB5" }}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" style={{ color: "pink" }}>
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "pink" }}>
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "pink" }}>
                                criar postagem
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "pink" }}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "pink" }}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "pink" }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "pink" }}>
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;