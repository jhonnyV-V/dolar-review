import { 
    Paper, 
    Grid, 
    Typography,
    makeStyles, 
} from '@material-ui/core';
import { useContext } from 'react';
import AppContext from '../../AppContext'; 
import { formatDate, formatNumber } from '../Const';
import DisplayTable from './DisplayTable';

const useStyles = makeStyles((theme) => ({
    avegeragePaper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    tableContainer:{
      marginBottom: theme.spacing(4),  
    },
}));

function Display() {
    const classes = useStyles();
    const { rows, data } = useContext(AppContext)

        //for now this will be the only option available
        //i have planed a few more, like getting prices from a range of dates
        //using my own API that still in development but with also be open source

    return(
        <>
            <Paper className={classes.avegeragePaper}>
                <Grid container justify='center'>
                    <Grid container justify='center'>
                        <Typography
                        variant='h5'>
                            Fecha: {formatDate(new Date(rows[0]?.last_update))}
                        </Typography>
                    </Grid>
                    <Grid container justify='center'>
                        <Typography
                        variant='h5'>
                            Promedio: {formatNumber(data.average)}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <DisplayTable rows={rows} className={classes.tableContainer} />
        </>
    );
}
export default Display;