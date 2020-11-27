import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react'
import "../App.css"
import shoes from './shoes.json';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



function Home() {
    const classes = useStyles();


    return (
        <div className='Home'>

            <div className='nike'>
                < img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="" width='300px' height='200px' />
            </div>

            <div className={classes.root}>
                <Grid container spacing={2}>
                    {Object.keys(shoes).map((keyName) => {
                        const shoe = shoes[keyName]
                        return (
                            <Grid item xs={12} md={6} lg={4} sm={6} key={keyName}>
                                <Link to={`/product/${keyName}`}>
                                    <Paper className={classes.paper}>
                                        <div className='Menn'>
                                            <h4>{shoe.name}</h4>
                                            <img src={shoe.imageURL} width='100%' height="300px" alt={shoe.name}></img>
                                            <div className='home__Price'>
                                                <h3>${shoe.price}</h3>
                                            </div>
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                        )

                    })}

                </Grid>
            </div>
        </div>
    )
}

export default Home

