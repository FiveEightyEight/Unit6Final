import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core/';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: '100%',
    },
});

export default withStyles(styles)(props => {
    const { classes, items, error, name, value, open, keyName, handleChange, handleOpenAndClose } = props;
    return (
        <form autoComplete="off">
            <FormControl className={classes.formControl} error={error}>
                <InputLabel htmlFor="controlled-open-select">{name}</InputLabel>
                <Select
                    open={open}
                    onClose={handleOpenAndClose}
                    onOpen={handleOpenAndClose}
                    value={value}
                    onChange={handleChange(keyName)}
                    inputProps={{
                        name: name.toLowerCase(),
                        id: 'controlled-open-select',
                    }}
                >
                    {
                        (!items) ? <></>
                            :
                            items.map((e, i) => {
                                const { value, name } = e;
                                return <MenuItem value={value} key={i} >{name}</MenuItem>
                            })
                    }
                </Select>
            </FormControl>
        </form>
    );
});

/*
    // NEEDED IN CONTAINER

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleOpenAndClose = () => {
        this.setState({ open: !this.state.open });
    };

*/
