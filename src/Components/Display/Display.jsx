import { 
    Paper, 
    Grid, 
    Typography,
    makeStyles, 
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import externalApi from '../../services/externalApi';
import { formatDate, formatNumber } from '../Const';
import DisplayTable from './DisplayTable';

const useStyles = makeStyles((theme) => ({
    avegeragePaper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

function Display() {
    const classes = useStyles();
    const [data, setData] = useState({sources:[]});
    const [rows, setRows] = useState([]);

    const loadContent = async () => {
        const quotes = await externalApi.get();
        setData(quotes.data);
        let row = []
        quotes.data.sources.forEach((source, index) =>{
            row.push({
                id: index,
                name: source.name,
                price: source.quote,
                last_update: source.last_retrieved
            });
        });
        setRows(row)
        console.log(quotes.data);
    };
    useEffect(() => {
        //the API is not mine, if you want to check the source is
        //https://api.exchangedyn.com/free/quotes/usdves
        loadContent();
    }, [])

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
                            Fecha: {formatDate(Date())}
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
            <DisplayTable rows={rows} />
        </>
    );
}
export default Display;