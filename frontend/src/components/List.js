import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/';
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
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item xs={11}>
                                        <Link to={'user/' + id} className={classes.link}>
                                            <ListItemText primary={username} />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={1}>
                                        {(userID === id) ? <></> : (
                                            <Link to={'switch/' + id} className={classes.link}>
                                                <ListItemIcon children={<Person />} />
                                            </Link>
                                        )}
                                    </Grid>
                                </Grid>
                            </ListItem>
                            {(arr.length - 1 === i) ? <></> : <Divider />}
                        </React.Fragment>
                    );
                })
            }
        </List>
    );
})


