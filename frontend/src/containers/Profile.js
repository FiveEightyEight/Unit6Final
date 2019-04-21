import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ShowCard } from '../components';
import { CircularProgress, Grid, Typography } from '@material-ui/core/';
import userService from '../services/users'

const styles = {
    header: {
        padding: '20px',
        margin: '10px',
    },
    body: {
        padding: '20px',
    }
};

export default withStyles(styles)(class Profile extends Component {
    state = {
        showList: null,
        genres: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params || null;
        if (!id.match(/[0-9]/g)) {
            return;
        };
        const userInfo = userService.get('shows/all/user/' + id)
        const genres = userService.getGenres()
        Promise.all([userInfo, genres])
            .then(data => {
                return {showList: data[0].data, genres: data[1]};
            })
            .then( ({showList, genres:{genres}}) => {
                this.setState(() => ({
                    showList,
                    genres,
                }));
            })
    };

    render() {
        const { classes } = this.props;
        const { showList, genres } = this.state;
        const username = (showList) ? showList[0].username : null;
        return (
            <Grid container
                direction={(showList) ? 'row' : 'column'}
                justify="flex-start"
                alignItems="center"
                className={classes.body}
            >
                <Grid item xs={12} className={classes.header}>
                    <Typography variant='h4'
                        align='center'
                    >
                        {(username) ? username + "'s watchlist" : 'Loading'}
                    </Typography>
                </Grid>
                {
                    (showList) ?
                        showList.map((e, i, arr) => {
                            return (
                                <Grid item xs={12} md={6} key={i}>
                                    <ShowCard {...e} genres={genres}/>
                                </Grid>
                            )

                        })
                        :
                        <Grid item xs={12}>
                            <CircularProgress />
                        </Grid>
                }
            </Grid>
        );
    };
});