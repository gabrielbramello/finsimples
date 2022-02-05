import { Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import Title from '../components/Title';
import AddIcon from '@mui/icons-material/Add';
import ActionMenu from '../components/ActionMenu';
import CustomizedDialogs from '../components/CustomizedDialog';
import MovimentacaoForms from '../components/forms/MovimentacaoForms';
import api from '../services/api';

const Despesas = () => {

    const [formNovoOpen, setFormNovoOpen] = React.useState(false);

    React.useEffect(async ()=>{

        try{
            api.get('/despesas')
        }catch(e){

        }

    },[])

    function createData(id, date, name, shipTo, paymentMethod, amount) {
        return { id, date, name, shipTo, paymentMethod, amount };
    }

    const rows = [
        createData(
            0,
            '16 Mar, 2019',
            'Elvis Presley',
            'Tupelo, MS',
            'VISA ⠀•••• 3719',
            312.44,
        ),
        createData(
            1,
            '16 Mar, 2019',
            'Paul McCartney',
            'London, UK',
            'VISA ⠀•••• 2574',
            866.99,
        ),
    ];


    return (
        <React.Fragment>
            <CustomizedDialogs open={formNovoOpen} onClose={()=>setFormNovoOpen(false)}>
                <MovimentacaoForms/>
            </CustomizedDialogs>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Grid container spacing={2}>
                    <Grid item xs={10} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Title>Lista de Produtos</Title>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined" onClick={() => setFormNovoOpen(true)} endIcon={<AddIcon />}>
                            Novo
                        </Button>
                    </Grid>
                </Grid>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Descrição</TableCell>
                            <TableCell align="right">Valor</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{`$${row.amount}`}</TableCell>
                                <TableCell align="right">
                                    <ActionMenu
                                        id={row.id}
                                        object={row}
                                        editTitle="Editar Produto"
                                        deleteTitle="Remover Produto"
                                        table="produto"
                                        descricao="Produto"
                                        
                                    />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    )
}

export default Despesas;