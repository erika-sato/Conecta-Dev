import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    },
    left: {
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellowgreen'
    },
    right: {
        flexBasis: '42%',
        backgroundColor: 'blueviolet'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    }
}))

const Signin = () => {
   const classes = useStyles()
   
    return ( 
        <div className={classes.root}>  {/*esta div é o Flex Container*/}
           
            <div className={classes.left}>  {/*Flex Item*/ }
            <Typography style={{ color: '#fff', fontSize: 25, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255,255,255, 0.7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software.
        </Typography>
            </div>


            <div className={classes.right}>  {/*Flex Item*/ }
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text"  />
                    <input type="text"  />
                </form>

            </div>


        </div>
     );
}
 
export default Signin;