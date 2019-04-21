import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
});

export default withStyles(styles)(props => {
    const { classes, image, username, body } = props;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                {
                    (image) ?
                        <ListItemAvatar>
                            <Avatar alt={username} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        :
                        <ListItemIcon children={<Person />} />
                }
                <ListItemText
                    primary={body}
                    secondary={
                        <Typography component="span" className={classes.inline} color="textPrimary">
                            {username}
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
})