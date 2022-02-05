import { Button, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import api from '../../services/api';

const MovimentacaoForms = (props) => {

    const [categorias, setCategorias] = React.useState([]);
    const [categoriaSelected, setCategoriaSelected] = React.useState([]);

    React.useEffect(async () => {
        
    }, [])

    const formik = useFormik({
        initialValues: {
            id: props.id,
            idCategoria: typeof props.initialObject == 'object' ? props.initialObject.categoria.id : '',
            descricao: typeof props.initialObject == 'object' ? props.initialObject.descricao : '',
            
            ativo:true
        },
        onSubmit: async values => {
            try{
                api.put('/insert/movimentacao')
            }catch(e){

            }
            
        }  
    })

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="select-categoria">Categoria</InputLabel>
                                <Select
                                    labelId="select-categoria"
                                    id="categoria"
                                    fullWidth
                                    label="Categoria"
                                    value={formik.values.idCategoria}
                                    onChange={(e) => {
                                        const selected = e.target.value;
                                        setCategoriaSelected(selected);
                                        formik.values.idCategoria = selected;
                                    }}
                                >
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="descricao"
                                    label="Descrição"
                                    value={formik.values.descricao}
                                    name='descricao'
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="valor"
                                    label="Valor"
                                    value={formik.values.valor}
                                    name='valor'
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type='button' size="small" color="error" onClick={props.onClose} variant="outlined">Cancelar</Button>
                    <Button type='submit' size="small" color="success" variant="outlined">Salvar</Button>
                </CardActions>
            </form>
        </React.Fragment>

    )
}

export default MovimentacaoForms;