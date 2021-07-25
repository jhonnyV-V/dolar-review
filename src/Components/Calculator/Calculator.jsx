import { 
    Paper, 
    Grid, 
    Typography,
    makeStyles, 
} from '@material-ui/core';
import { useContext } from 'react';
import AppContext from '../../AppContext'; 
import { formatNumber } from '../Const';
import CalculatePrice from './CalculatePrice'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

const Calculator = () => {
    const classes = useStyles();
    const { rows, data } = useContext(AppContext)
    const options = {
        Promedio: data.average
    }

    rows.forEach((provider) => {
        options[provider.name] = provider.price
    });

    const fromDolarToVes = (selection, amount) => {
        if(isNaN(amount)){
            return 0; 
        }

        return formatNumber((options[selection || 'Provider'] * amount));
    };

    const fromVesToDolar = (selection, amount) => {
        if(isNaN(amount)){
            return 0; 
        }

        return formatNumber((amount / options[selection || 'Provider']),'USD');
    };

        //for now this will be the only option available
        //i have planed a few more, like getting prices from a range of dates
        //using my own API that still in development but with also be open source

    return(
        <Grid container justify='center'>  
            <Grid item xs={12} sm={6} className={classes.container}>
                <Typography variant='h6'>Dolares a Bolivares</Typography>
                
                <CalculatePrice
                options={Object.keys(options)} 
                calculate={fromDolarToVes}/>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.container}>
                <Typography variant='h6'>Bolivares a Dolares</Typography>

                <CalculatePrice
                optionObject={options}
                options={Object.keys(options)}
                calculate={fromVesToDolar}/>
            </Grid>


        </Grid>
    );
}
export default Calculator;