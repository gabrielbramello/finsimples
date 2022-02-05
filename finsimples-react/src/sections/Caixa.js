import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../components/Orders';
import Deposits from '../components/Deposits';
import { Typography } from '@mui/material';

const Caixa = () => {

    return (
        <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid
                item
                xs={6}
                md={6}
                lg={6}
            >
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Deposits />
                </Paper>
            </Grid>

            <Grid
                item
                xs={6}
                md={6}
                lg={6}
            >
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Deposits />
                </Paper>
            </Grid>
            {/* Recent Orders */}

            <Grid item xs={12}>
                <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1, flexDirection: 'column', alignItems: 'flex-start' }}
                >
                    Renda
                </Typography>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Orders />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1, flexDirection: 'column', alignItems: 'flex-start' }}
                >
                    Despesas
                </Typography>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Orders />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Caixa;