import React, {Component} from 'react';
import {createMuiTheme, makeStyles} from "@material-ui/core";
import { Typography, Grid, Paper } from "@material-ui/core";
import HatchStore from '../stores/HatchStore';
import { inject, observer } from "mobx-react";

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

@inject("HatchStore")
@observer
class Hatch extends Component {

    render() {
        const classes = useStyles;
        const {HatchStore} = this.props;
        return(
            <Grid container spacing={3} style={{ padding: 30}}>
                {HatchStore.hatches.map((hatch, index) => {
                    return (
                        <Grid key={hatch.date} className={classes.hatch} item xs={3}>
                            <Paper
                                elevation={3}
                                style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}
                            >
                                <Typography variant="h4" align="center">
                                    {hatch.id}
                                </Typography>
                            </Paper>
                        </Grid>
                    );
                })}
                <Grid className={classes.hatch} item xs={3}>
                    <Paper elevation={3} style={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
                        <Typography variant="h4" align="center">
                            1
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Hatch;