import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import shoes from './shoes.json';
import React from 'react'

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


function About() {
    const classes = useStyles();


    return (
        <div className='Home'>
            
                
            
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {Object.keys(shoes).map((keyName) => {
                        const shoe = shoes[keyName]
                        if (shoe.gender === "MEN") {
                            return(
                                <Grid  item xs={12} md={6} lg={3} sm={6} key={keyName}>
                                    <Link to={`/${keyName}`}>
                                        <Paper>
                                            <div className='Menn'>
                                                <div>
                                                <h4> {shoe.name}</h4>
                                                    <img src={shoe.imageURL} alt={shoe.name} width='100%' height='300px'></img>                                                 
                                                    <div className='home__Price'>
                                                <h3>${shoe.price}</h3>
                                             </div>
                                                </div>
                                            </div>
                                        </Paper>
                                    </Link>
                                </Grid>
                            )

                        }else{
                            return false
                        }

                    })}
                </Grid>
            </div>

        </div>
    )
}

export default About
