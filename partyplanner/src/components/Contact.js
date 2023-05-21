import React from 'react'
import { TextField } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';


export default function Contact() {

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

  return (
    <div className='contact'>
        <h1>GET IN TOUCH!!</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Phone #" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />  
        <TextField id="outlined-basic" label="Event Date" variant="outlined" />
        <TextField id="outlined-basic" label="Event Location" variant="outlined" />
        <TextField id="outlined-basic" label="Type of Event You Are Hosting" variant="outlined" />
        <TextField id="outlined-basic" label="Estimated Guest Count" variant="outlined" />
        <TextField id="outlined-basic" label="Link to Pinterest or anything else you would like to tell us about you event?" variant="outlined" />

  <br/>
        <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Desired Event Price Point</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
          }
          label="$50,000 to $75,000"
        />
        <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label="$75,000 to $100,000"
        />
        <FormControlLabel
          control={
            <Switch checked={state.antoine} onChange={handleChange} name="antoine" />
          }
          label="$100,000 to $200,000"
        />
      </FormGroup>
      <FormHelperText></FormHelperText>
    </FormControl>
    <button>Submit</button>
    </div>
  )
}



