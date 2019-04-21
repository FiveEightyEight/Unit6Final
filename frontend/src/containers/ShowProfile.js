import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Grid, Typography, } from '@material-ui/core/';
import userService from '../services/users'
import { Card, Comments, Input } from '../components';

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
});

export default withStyles(styles)(class ShowProfile extends Component {
    state = {
        show: null,
        genres: null,
        users: null,
        comment: '',
    };

    idMatch = (id, key, arr = []) => {
        for (let e of arr) {
            if (e.id === id) return e[key];
        }
        return 'Uknown'
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleClick = name => e => {
        if (name === 'submit') {
            this.handleValidation();
            return;
        }
        return;
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleValidation();
        }
    };

    handleValidation = () => {
        const comment = this.state.comment.trim();
        const { show_id } = this.state.show;
        const showUser = JSON.parse(localStorage.getItem('showUser'));
        this.setState({
            comment: '',
        })
        userService.post('comments/',
            {
                comment_body: comment,
                user_id: showUser.id,
                show_id: show_id,
            })
            .then(({ data }) => {
                return data;
            })
            .then(({ id }) => {
                const { show } = this.state
                show.comments.push({
                    comment_body: comment,
                    comment_id: id,
                    user_id: showUser.id
                })
                this.setState({
                    show,
                });
            })
            .catch(err => {
                console.log('error', err)
            })

    };

    componentDidMount() {
        const { id } = this.props.match.params || null;
        if (!id.match(/[0-9]/g)) {
            return;
        };
        const show = userService.get('shows/all/comments/' + id);
        const genres = userService.getGenres();
        const allUsers = userService.get('users/all');
        Promise.all([show, genres, allUsers])
            .then(data => {
                return { show: data[0].data, genres: data[1], users: data[2].data, show_id: parseInt(id) };
            })
            .then(({ show, genres: { genres }, users, show_id }) => {

                const compressed = show.reduce((acc, e) => {
                    acc.title = acc.title || e.title;
                    acc.genre_id = acc.genre_id || e.genre_id;
                    acc.img_url = acc.img_url || e.img_url;
                    acc.user_id = acc.user_id || e.show_user;
                    acc.show_id = acc.show_id || show_id;
                    if (e.comment_body) acc.comments.push({ comment_id: e.id, user_id: e.user_id, comment_body: e.comment_body })
                    return acc
                }, { comments: [], })
                this.setState(() => ({
                    show: compressed,
                    genres,
                    users,
                }));
            })
    };

    render() {
        const { classes } = this.props;
        const { show, genres, users, comment } = this.state;
        const username = (show) ? this.idMatch(show.user_id, 'username', users) : null;
        const comments = (show) ? show.comments : null;
        return (

            <>
                <Grid container
                    direction={(show) ? 'row' : 'column'}
                    justify="flex-start"
                    className={classes.body}
                >
                    {
                        (show) ?
                            <Grid item xs={12} md={6}>
                                <Card {...show} genre={this.idMatch(show.genre_id, 'genre_name', genres)} />
                            </Grid>

                            :
                            <Grid item xs={12}>
                                <CircularProgress />
                            </Grid>
                    }
                    <Grid item xs={12} className={classes.header}>
                        <Typography variant='h4'
                            align='left'
                        >
                            {(username) ? 'Being watched by ' + username : 'Loading'}
                        </Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={10}>
                        <Input name='comment' handleChange={this.handleChange}
                            value={comment}
                            onKeyPress={this.onKeyPress}
                            placeholder={'Add Comment'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant='contained'
                            className={classes.button}
                            onClick={this.handleClick('submit')}
                        >
                            Submit
                        </Button>
                    </Grid>
                    {
                        (comments) ?
                            (comments.length > 0) ?
                                <Grid container
                                    direction={(show) ? 'column' : 'row'}
                                    justify="flex-start"
                                    className={classes.body}
                                >
                                    {comments.map((e, i, arr) => {
                                        const { user_id, comment_body } = arr[arr.length - i - 1];
                                        return (
                                            <Grid item xs key={i}>
                                                <Comments username={this.idMatch(user_id, 'username', users)}
                                                    body={comment_body}
                                                    image={null}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                :
                                <Grid item xs={12}>
                                    <Typography variant='h5'
                                        align='center'
                                    >
                                        Be the first to comment!
                                    </Typography>
                                </Grid>
                            :
                            <></>
                    }
                </Grid>
            </>
        )
    }
})