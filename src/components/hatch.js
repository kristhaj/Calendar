import React, {Component} from 'react';
import {createMuiTheme, makeStyles} from "@material-ui/core";
import { Typography, Grid, Paper } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff5131',
            main: '#d50000',
            dark: '#9b0000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#c1d5e0',
            main: '#90a4ae',
            dark: '#62757f',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles( theme => ({
    container: {
        flexGrow: 1
    },
    hatch: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    }
}));

class Hatch extends Component {
    render() {
        const classes = useStyles;

        return(
            <Grid container spacing={3} style={{ padding: 30}}>
                <Grid className={classes.hatch} item xs={3} alignContent="center">
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                            1
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                             2
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                             3
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                             4
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                             5
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                             6
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Hatch;