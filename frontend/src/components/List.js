import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core/';
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
    const { classes, list } = props;
    console.log(list)
    return (
        <List component="nav" className={classes.root}>
            {
                list.map((e, i, arr) => {
                    const { id, username } = e;
                    return (
                        <Link to={'user/' + id} key={id}>
                            <ListItem>

                                <ListItemText primary={username} />

                            </ListItem>
                            {(arr.length - 1 === i) ? <></> : <Divider />}
                        </Link>
                    );
                })
            }
        </List>
    );
})


