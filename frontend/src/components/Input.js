import React from 'react';
import { TextField } from '@material-ui/core/';

export default ( props => {
    const {name, handleChange, onKeyPress, placeholder, value} = props
   return (
        <TextField
          id="filled-full-width"
          name={name}
          style={{ margin: 8 }}
          placeholder={placeholder}
          fullWidth
          margin="normal"
          onChange={handleChange(name)}
          onKeyDown={onKeyPress}
          value={value}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
    );
});