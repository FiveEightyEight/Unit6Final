import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid } from '@material-ui/core/';
import { Card } from '../components';
import userService from '../services/users'

const styles = theme => ({
    header: {
        padding: '20px',
        margin: '10px',
    },
    body: {
        padding: '20px',
    },
    button: {
        margin: theme.spacing.unit,
        height: '56px',
    },
    card: {
        margin: '10px',
    }
});

export default withStyles(styles)(class Shows extends Component {
    state = {
        shows: null,
        genMap: null,
        genres: null,
    };

    componentDidMount() {
        const allShows = userService.get('shows/all/users');
        const allGenres = userService.getGenres();
        Promise.all([allShows, allGenres])
            .then(([{ data }, { genres }]) => {
                return { shows: data, genres, };
            })
            .then(({ shows, genres }) => {
                return userService.showBuilder(shows, genres);
            })
            .then(({ shows, genMap, genres }) => {
                this.setState({
                    shows,
                    genMap,
                    genres,
                })
            })

    };

    render() {
        const { classes } = this.props;
        const { shows } = this.state;
        const show = (shows) ? Object.keys(shows) : null;
        return (
            <Grid container
                direction={(shows) ? 'row' : 'column'}
                justify={(shows) ? 'flex-start' : 'center'}
                alignItems="center"
            >
                {
                    (shows) ?
                        show.map((name, i) => {
                            return (
                                <Grid item xs={12} md={8} key={i} className={classes.card}>
                                    <Card {...shows[name]} />
                                </Grid>
                            )
                        })
                        :
                        <Grid item>
                            <CircularProgress />
                        </Grid>
                }
            </Grid>
        );
    };
});