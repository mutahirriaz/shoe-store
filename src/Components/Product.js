import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

function Product() {
    const classes = useStyles();

    const { id } = useParams()
    const shoe = shoes[id]
    // console.log(shoe)

    if (!shoe) {
        return (
            <h1>Not Available</h1>
        )
    }

    return (
        <div className='Home'>
            <div className={classes.root}>
                <Grid container spacing={2}>


                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <div key={shoe.id} >
                            <Paper className={classes.paper}>
                                <div className='product'>
                                    <h4>{shoe.name}</h4>
                                    <div className='product__imgpara'>

                                        <img src={shoe.imageURL} width='50%' height="300px" alt={shoe.name}></img>
                                        

                                        <span className='product__para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est nulla facilis nostrum corporis cum impedit, dolorem et nemo exercitationem ipsa, consequatur harum modi quaerat nisi fugiat officiis! Necessitatibus, soluta.<br /></span>

                                    </div>
                                    <div className='product__price'>
                                        <h3>Price:</h3>
                                        <h3>$ {shoe.price}</h3>
                                    </div>

                                </div>
                            </Paper>
                        </div>
                    </Grid>




                </Grid>
            </div>
        </div>
    )
}

export default Product
