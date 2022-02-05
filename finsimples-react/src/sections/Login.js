import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert } from '@mui/material';
import UsuarioService from '../services/UsuarioService';



const Login = () => {

    const [isAlertActived, setIsAlertActived] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            let message = 'Login realizado com sucesso.';
            const usuario = {
                login: data.get('login'),
                senha: data.get('senha'),
            }
            console.log(usuario)
            const response = UsuarioService.findByLoginAndSenha(usuario);
            response.then(response => {

                window.location.replace(window.location.origin + "/dashboard")
                return response.data
            })
                .catch(function (error) {
                    setIsAlertActived(true)
                    console.log(error)
                    if (error.response) {
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        } catch (e) {
            console.log(e)
            console.log("usuario não existe")
        }

    };
    function activeAlert(isActived) {
        if (isActived) {
            return <Alert severity="error">Usuário ou senha invalido!</Alert>
        }
    }
    return (
        <Container component="main" maxWidth="xs" className="login-background">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" component="h2">FinSimples</Typography>
                <Box className="loginform" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                {activeAlert(isAlertActived)}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="login"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Entrar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" color="secondary">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;