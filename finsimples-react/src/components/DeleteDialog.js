import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik';

const DeleteDialog = (props) => {


    const formik = useFormik({
        initialValues: {
            id: props.id,
            descricao: props.descricao,
            table: props.table
        },
        onSubmit: async values => {
            
        }
    })

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Deseja remover o registro selecionado?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Ao confirmar, o {props.descricao} de ID {props.id} não será mais encontrado no sistema. Tem certeza que deseja
                    remover o registro?
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type='button' size="small" color='error' variant='outlined' onClick={()=>props.onClose()}>Cancelar</Button>
                    <Button type='submit' size="small" color='success' variant='outlined'>Sim</Button>
                </CardActions>
            </form>
        </React.Fragment>
  );
}

export default DeleteDialog;