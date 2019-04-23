import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const styles = {
    header: {
        padding: '20px',
    },
    media: {
        minHeight: 300,
        objectFit: 'contain',
        padding: '10px',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    users: {
        margin: '5px',
    }
};

export default withStyles(styles)(props => {
    const { classes, img_url, title, genre, users } = props;
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
                                    {
                                        (users) ?
                                            <>
                                                <hr />
                                                <Grid item xs={12}>
                                                    <Grid container
                                                        direction="row"
                                                        justify="flex-start"
                                                        alignItems="center"
                                                    >
                                                        <Grid item xs={12}>
                                                            <Typography
                                                                variant='h6'
                                                                align='left'
                                                            >
                                                                Who's Watching?
                                                        </Typography>
                                                        </Grid>
                                                        {
                                                            users.map((e, i) => {
                                                                const { show_id, username } = e;
                                                                return (
                                                                    <Grid item xs key={i} className={classes.names}>
                                                                        <Link to={'/show/' + show_id} className={classes.link}>
                                                                            <Typography
                                                                                variant='body2'
                                                                                align='left'
                                                                            >
                                                                                {username}
                                                                            </Typography>
                                                                        </Link>
                                                                    </Grid>
                                                                )
                                                            })
                                                        }

                                                    </Grid>
                                                </Grid>
                                            </>
                                            :
                                            <></>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
});