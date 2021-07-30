import { useState } from 'react';
import { 
    Paper, 
    Grid, 
    Typography,
    makeStyles,
    FormControl,
    NativeSelect,
    FormHelperText,
    TextField,
} from '@material-ui/core';

import { getBrowserLocale } from '../Const';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: 0,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  amount:{
    marginTop: '32px',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#28a745',
    overflow: 'scroll',
    '@media (min-width: 600px)':{
        overflow: 'auto',
    },
  },
}));

const CalculatePrice = ({calculate, options}) => {
    const classes = useStyles();
    const [provider, setProvider] = useState('Promedio');
    const [amount, setAmount] = useState('');
    
    const handleOptionChange = (event) => {
        setProvider(event.target.value);
    };

    const handleAmountChange = (event) => {
        if(isNaN(event.target.value)){
            return
        }
        setAmount(event.target.value)
    }

    return(
        <Grid container item>
            <Grid container item xs={12}>
                <Grid container item xs={12} sm={6} >  
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                          className={classes.selectEmpty}
                          defaultValue='Promedio'
                          name="Proveedor"
                          onChange={handleOptionChange}
                          inputProps={{ 'aria-label': 'Proveedor' }}
                        >
                        {
                            options.map((provider) => (
                                <option value={provider} key={provider}>{provider}</option>
                            ))
                        }
                        </NativeSelect>
                        <FormHelperText>Proveedor</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid container item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        placeholder="Cantidad"
                        value={amount}
                        onChange={handleAmountChange}
                        className={classes.textField}
                    />
                </Grid>
            </Grid>
            <Grid container justify='center' item xs={9}> 
                <Typography variant='h6' className={classes.amount}>
                    {calculate(provider,amount|| 0)}
                </Typography>
            </Grid>
        </Grid>
    );
}
export default CalculatePrice;