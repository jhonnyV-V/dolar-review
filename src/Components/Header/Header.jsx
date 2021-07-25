import { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:'100vw',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:'#28a745',
    },

    link:{
        color: '#28a745',
        textDecoration: 'none',
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        cursor: 'pointer',
        '@media screen and (min-width: 400px)':{
            fontSize: '1.25rem',
        },
    },
    linkUnderline: {
        textDecoration: 'underline',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();
    const [actualRoute,setActualRoute] = useState(history.location.pathname)
    const routes = [
        {
            link: '/dolar-review/',
            name: 'Home',
        },
        {
            link: '/dolar-review/calculator',
            name: 'Calculadora',
        }
    ];
    const preventDefault = (event, link) => {
        event.preventDefault();
        setActualRoute(link)
        history.push(link)
    }

    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Grid container justify='flex-start' item xs={6} sm={5} md={3} lg={2} >
                <Typography variant="h6" className={classes.title} >
                    Dolar Review
                </Typography>
                </Grid>
                <Grid container justify='flex-start' item xs={6} sm={3}> 
                    { routes.map((page) => (
                                <Typography key={page.name} 
                                className={`${classes.link} ${
                                    actualRoute == page.link? 
                                        classes.linkUnderline
                                    : 
                                    ''
                                }`}
                                onClick={(e) => preventDefault(e,page.link)}
                                > 
                                    {page.name} 
                                </Typography>
                            )
                        )
                    } 
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
    );
}
