import React, { Component } from 'react';
import isURL from 'validator/lib/isURL';
import { withStyles } from '@material-ui/core/styles';
import { DropDown, Input } from '../components';
import { Button, CircularProgress, Grid, Paper, Typography } from '@material-ui/core/';
import { Consumer } from '../contexts/User';
import { Redirect } from 'react-router-dom';
import userService from '../services/users';

const styles = theme => ({
    header: {
        paddingTop: '50px',
        paddingBottom: '5px',
        paddingLeft: '20px',

    },
    subHeader: {
        paddingTop: '5px',
        paddingBottom: '30px',
        paddingLeft: '20px',

    },
    input: {
        paddingLeft: '15px',
    },
    buttonGrid: {
        marginTop: '20px',
        marginBottom: '20px',
        paddingLeft: '15px',
    },
    button: {
        margin: theme.spacing.unit,
        width: '100%',
        // height: '56px',
    },
});

export default withStyles(styles)(class PostShow extends Component {
    state = {
        user: null,
        showTitle: '',
        showTitleError: false,
        imgURL: '',
        imgURLError: false,
        open: false,
        genre: '',
        genreError: false,
        genres: [],
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleClick = (name) => e => {
        if (name === 'submit') {
            this.handleValidation();
            return;
        }
        return;
    }

    handleOpenAndClose = () => {
        this.setState({ open: !this.state.open });
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleValidation();
        }
    };

    handleValidation = () => {
        const { showTitle, imgURL, genre } = this.state;
        const title = showTitle.trim();
        const URL = imgURL.trim();
        if (!title) {
            this.setState({ showTitleError: true })
            // return;
        } else {
            this.setState({ showTitleError: false })
        }
        if (!isURL(URL)) {
            this.setState({ imgURLError: true })
            // return;
        } else {
            this.setState({ imgURLError: false })
        }
        if (genre === '') {
            this.setState({ genreError: true })
            // return;
        } else {
            this.setState({ genreError: false })
        }
        if (title && isURL(URL) && genre !== '') {
            this.submitForm(title, URL, genre)
            return;
        }
        return;
    }

    submitForm = (title, URL, genre) => {
        const { user: { id } } = this.state;

        const data = {
            title,
            img_url: URL,
            user_id: id,
            genre_id: genre,
        }
        userService.post('shows/', data)
            .then( ({data}) => {
                this.setState({
                    showTitle: '',
                    showTitleError: false,
                    imgURL: '',
                    imgURLError: false,
                    open: false,
                    genre: '',
                    genreError: false,
                })
                this.props.history.push(`/show/${data.id}`)
            })
            .catch( err => {
                this.setState({
                    showTitle: '',
                    showTitleError: true,
                    imgURL: '',
                    imgURLError: true,
                    open: false,
                    genre: '',
                    genreError: true,
                })
            })

    }

    componentDidMount() {
        userService.getGenres()
            .then(({ genres }) => {
                return genres.map(e => { return { value: e.id, name: e.genre_name } });
            })
            .then(genres => {
                this.setState({ genres });
            });

        userService.init()
            .then(({ showUser }) => {
                this.setState(() => ({
                    user: showUser,
                }));
            });

    };

    render() {
        const { classes } = this.props;
        const { user, showTitle, showTitleError, imgURL, imgURLError, genre, genreError, open, genres } = this.state;
        return (
            <Consumer>
                {
                    (contextUser) => (!contextUser) ? <Redirect to='/' />
                        :
                        (!user) ? <CircularProgress />
                            :
                            <Grid container>
                                <Grid item
                                    xs={12}
                                >
                                    <Paper
                                        elevation={5}
                                    >
                                        <Grid container
                                            direction="row"
                                            justify="center"
                                            alignItems="stretch"
                                        >
                                            <Grid item xs={12}>

                                                <Typography
                                                    className={classes.header}
                                                    variant='h3'
                                                >
                                                    Welcome {user.username},
                                            </Typography>
                                                <Typography
                                                    className={classes.subHeader}
                                                    variant='h5'
                                                >
                                                    Add new show to watch...
                                            </Typography>
                                                <Grid item xs={8} className={classes.input}>
                                                    <Input name='showTitle' handleChange={this.handleChange}
                                                        value={showTitle}
                                                        onKeyPress={this.onKeyPress}
                                                        placeholder={'Show Title'}
                                                        error={showTitleError}
                                                    />
                                                </Grid>
                                                <Grid item xs={8} className={classes.input}>
                                                    <Input name='imgURL' handleChange={this.handleChange}
                                                        value={imgURL}
                                                        onKeyPress={this.onKeyPress}
                                                        placeholder={'Image URL'}
                                                        error={imgURLError}
                                                    />
                                                </Grid>
                                                <Grid item xs={8} className={classes.input}>
                                                    <DropDown
                                                        items={genres}
                                                        name='Genre'
                                                        value={genre}
                                                        open={open}
                                                        handleChange={this.handleChange}
                                                        keyName='genre'
                                                        handleOpenAndClose={this.handleOpenAndClose}
                                                        error={genreError}
                                                    />
                                                </Grid>
                                                <Grid item xs={8} className={classes.buttonGrid}>
                                                    <Button
                                                        variant='contained'
                                                        className={classes.button}
                                                        onClick={this.handleClick('submit')}
                                                    >
                                                        Submit
                                            </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                }
            </Consumer>
        )
    };
});