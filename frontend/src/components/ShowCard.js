import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core/';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';

const styles = {
    card: {
        // maxWidth: 345,
        // width: '100%',
        margin: '5px',
    },
    media: {
        minHeight: 300,
        objectFit: 'contain',
    },
    content: {
        padding: 0,
        paddingTop: '5px',
    }
};

const stars = (num) => {
    const arr = [];
    const int = Math.floor(num)
    const halfStar = (num - int) >= 0.5; 
    for (let i = 0; i < 5; i++) {
        
        if (i < int) {
            arr.push(<Star key={i} />)
        } else if (i <= int && i < num && halfStar) {
            arr.push(<StarHalf key={i} />)
        } else {
            arr.push(<StarBorder key={i} />)
        }
    }
    return arr;
};

const getGenre = (id = null, arr = []) => {
    for (let genre of arr) {
        if(genre.id === id) return genre.genre_name; 
    }
    return 'Uknown'
};

function ShowCard(props) {
    const { classes, img_url, title, rating, genre_id, genres } = props;
    return (
        <Card className={classes.card}
        >
            <CardActionArea style={{ margin: '0px' }}>
                <CardMedia
                    component="img"
                    className={classes.media}
                    height="140"
                    image={img_url}
                    title={title}
                />
                <CardContent className={classes.content}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Typography gutterBottom
                                variant="h4"
                                component="h2"
                                >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography gutterBottom
                                variant="h6"
                                component="h2">
                                {getGenre(genre_id, genres)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {(rating)? 
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            // component="p"
                            align='center'
                        >
                            {stars(rating)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body2'
                            align='center'
                        >
                            Rating: {rating}/5
                        </Typography>
                    </Grid>
                </Grid>: <></>
                }

            </CardActions>
        </Card>
    );
}

ShowCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowCard);