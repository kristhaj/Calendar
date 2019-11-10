import  React, { Component }  from 'react';
import './App.css';
import { CssBaseline, Container, Typography , AppBar, Paper } from '@material-ui/core';
import { createMuiTheme, makeStyles } from "@material-ui/core";
import Hatch from './components/hatch';

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
    root: {
        flexGrow: 1
    },
    appBar: {
        paddingTop: theme.spacing(1),
        flexGrow: 1  },
    title: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
    },
    container: {
        padding: theme.spacing(3, 2)
    }
}));

class App extends Component {
    render() {
        const classes = useStyles;

        return (
            <div className={classes.root} style={{ backGroundColor: theme.palette.secondary.main}}>
                <CssBaseline/>
                <Container className="contentContainer" maxWidth="lg" style={{ backGroundColor: theme.palette.secondary.main }} minHeight="100vh">
                    <AppBar className={classes.appBar} position="static" minHeight="10vh" style={{backgroundColor: theme.palette.primary.main}}>
                        <Typography className={classes.title} variant="h3" align="center" >
                            Julekalender
                        </Typography>
                    </AppBar>
                    <Paper className={classes.container} elevation={12} style={{ backGroundColor: theme.palette.secondary.main }} minHeight="50vh">
                        <Hatch />
                    </Paper>
                </Container>
            </div>
        );
    }
}


export default App;
