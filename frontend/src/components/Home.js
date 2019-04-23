import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core/';

const styles = {
    block: {
        padding: '50px',
    },
    paper: {
        padding: '20px',
        paddingTop: '50px',
        paddingBottom: '50px',
        minHeight: '100px',
    }
};

export default withStyles(styles)(props => {
    const { classes, spinner } = props;
    return (

        <Grid container
            className={classes.block}
        >
            <Grid item xs>
                <Paper className={classes.paper}
                    elevation={20}
                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Typography variant='h4'
                                align='center'
                                gutterBottom={true}
                            >
                                Welcome to the TV Show Watchlist App!
                            </Typography>
                        </Grid>
                        {
                            (spinner) ?
                                <Grid item>
                                    <CircularProgress />
                                </Grid>
                                :
                                <></>
                        }
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    );
})