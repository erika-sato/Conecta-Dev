import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {useNavigate} from 'react-router-dom'
import authService from "../../services/authService";
import FormHelperText from "@material-ui/core/FormHelperText";


const useStyles = makeStyles((theme) => ({
         root: {
             height: '100vh',            
         },
        image: {
            backgroundImage: 'url(/src/images/background.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            textAlign: 'center',
            padding: theme.spacing(2)
        },
        avatar: {
            background: theme.palette.primary.main,
            marginBottom: theme.spacing(1)
        },
        button: {
            marginTop: theme.spacing(1)
        },
        form: {
            margin: theme.spacing(2, 4)
        }
     }))

     function Copyright() {
         return (
            <Typography variant='body2' align='center'>
                 {'Copyright © '} <a color='inherit' href='https://www.github.com/erika-sato'>
                        Érika Sato </a>   {' '}
         {new Date().getFullYear()}
            </Typography>
         )
     }


    function Signin() {
        const classes = useStyles()
        const navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [errorMessage, setErrorMessage] = useState()

      async function handleSignin() {
            //chamada à API. Se retorno ok, direciona para Home. Se não estiver ok, exige msg para o usuário
         
         try {
            await authService.signin(email, password)
            //200
            navigate('/')
       
        } catch (error) {
             setErrorMessage(error.response.data.message)
         }
         
        }

        return (

            <Grid container className={classes.root}>
                <Grid 
                item 
                container 
                md={7}
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.image}
                >

                    <Typography style={{ color: '#fff', fontSize: 25, lineHeight: '45px' }}>
                        <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>
                    </Typography>
                   
                    <Typography variant="body2" style={{ color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15,lineHeight: '30px'}}>
                        Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                    </Typography>
               
                </Grid>

                <Grid item md={5}>
                    <Box display='flex' mt={8} flexDirection='column' alignItems='center' m={8}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon  />
                        
                        </Avatar>
                       
                        <Typography variant= 'h5'> Acesso </Typography>
                   
                   <form className={classes.form}>
                       <TextField
                       variant='outlined'
                       margin='normal'
                       required
                       fullWidth
                       id='email'
                       label="E-mail"
                       autoFocus
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       />

                        <TextField
                       variant='outlined'
                       margin='normal'
                       required
                       fullWidth
                       id='password'
                       name='password'
                       label="Senha"
                       type='password'
                       autoComplete="current-password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       />

                       <Button
                           fullWidth
                           variant='contained'
                           color='primary'
                           className={classes.button}
                           onClick={handleSignin}>
                        Entrar
                       </Button>

                       {
                           errorMessage &&
                           <FormHelperText error> {/*a propriedade error deixa o texto em vermelho*/}
                               {errorMessage}
                           </FormHelperText>
                       }

                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>

                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                       
                   </form>

                   <Copyright />
                    </Box>
                </Grid>
            </Grid>

           
        );
    }
 
export default Signin