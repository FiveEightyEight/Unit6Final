import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/';
import { Person } from '@material-ui/icons/';
import { Link } from 'react-router-dom';


const styles = {
    root: {
        width: '100%',
        maxWidth: '360px',
        // backgroundColor: theme.palette.background.paper,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    }
};

export default withStyles(styles)(props => {
    const { classes, list, userID } = props;
    return (
        <List component="nav" className={classes.root}>
            {
                list.map((e, i, arr) => {
                    const { id, username } = e;
                    return (
                        <React.Fragment key={i}>
                            <ListItem>
                                <Link to={'user/' + id} className={classes.link}>
                                    <ListItemText primary={username} />
                                </Link>
                                {(userID === id) ? <></> : (
                                    <Link to={'switch/' + id} className={classes.link}>
                                        <ListItemIcon children={<Person />} />
                                    </Link>
                                )}
                            </ListItem>
                            {(arr.length - 1 === i) ? <></> : <Divider />}
                        </React.Fragment>
                    );
                })
            }
        </List>
    );
})


