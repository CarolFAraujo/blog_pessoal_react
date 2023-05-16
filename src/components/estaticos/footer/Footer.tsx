import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#a33fb5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "pink" }}>Siga-nos nas redes sociais! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/CarolFAraujo" target="_blank">
                                <GitHubIcon style={{ fontSize: 38, color: "pink" }} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <InstagramIcon style={{ fontSize: 44, color: "pink" }} />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 44, color: "pink" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#923fb5", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "pink" }} > Carolina Araujo © 2023 Copyright</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/CarolFAraujo">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "pink" }} align="center">https://github.com/CarolFAraujo</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
 
export default Footer;
