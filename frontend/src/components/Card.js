import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core/';

const styles = {
    header: {
        padding: '20px',
    },
    media: {
        minHeight: 300,
        objectFit: 'contain',
        padding: '10px',
    },
};

export default withStyles(styles)(props => {
    const { classes, img_url, title, genre } = props;
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    height="140"
                                    image={img_url}
                                    title={title}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container
                                    className={classes.header}
                                >
                                    <Grid item xs={12}>
                                        <Typography
                                            variant='h3'
                                            align='left'
                                        >
                                            {title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant='h6'
                                            align='left'
                                        >
                                            {genre}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
});