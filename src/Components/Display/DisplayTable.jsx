import { 
    Paper, 
    Grid,  
    Table, 
    TableCell, 
    TableRow, 
    TableHead, 
    TableBody, 
    TableContainer,
    useMediaQuery,
} from '@material-ui/core';
import { formatNumber } from '../Const'

const DisplayTable = ({rows, ...others}) => {
  const isSmallScreen = useMediaQuery('(max-width:669px)');

  return(

          <Grid container justify='center' {...others} >
            <TableContainer component={Paper}>
              <Table 
              size={isSmallScreen?'small': 'medium' } 
              aria-label="tabla de precios del dolar">
                <TableHead>
                  <TableRow>
                    <TableCell>Proveedor</TableCell>
                      <TableCell >Precio</TableCell>
                      <TableCell >Ultima&nbsp;Actualización</TableCell>
                    </TableRow>
                  </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell >{formatNumber(row.price)}</TableCell>
                      <TableCell >{row.last_update}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
    )

}
export default DisplayTable