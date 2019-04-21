import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Avatar, List, ListItemIcon, ListItem, ListItemText, ListItemAvatar, Typography } from '@material-ui/core/';
import { Person } from '@material-ui/icons/';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
});

export default withStyles(styles)(props => {
    const { classes, image, username, user_id, body } = props;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                {
                    (image) ?
                        <ListItemAvatar>
                            <Avatar alt={username} src={image} />
                        </ListItemAvatar>
                        :
                        <ListItemIcon children={<Person />} />
                }
                <ListItemText
                    primary={body}
                    secondary={
                        <Link to={'/user/' + user_id} className={classes.link}>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                {username}
                            </Typography>
                        </Link>
                    }
                />
            </ListItem>
        </List>
    );
})