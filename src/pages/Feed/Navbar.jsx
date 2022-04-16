import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({      //theme: um default da minha aplicação, proveniente do Material-UI
    root: {
        padding: theme.spacing(2),            //o espaçamento default do theme é 8px. Colocando o nº 2 como parâmetro, a fç fará 8*2 = 16px, promovendo flexibilidade caso haja necessidade de mudanças no futuro
        width:"275px",
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    },
    font: {
        fontFamily: 'Roboto'
    }

}))

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javascript'},
    { id: 3, name: 'dotnet'},
    { id: 4, name: 'php'},
    { id: 5, name: 'materialdesign'},
    { id: 6, name: 'webdev'},
]

const Navbar = () => {
  const classes = useStyles()
  
  
    return ( 
        <Paper className={classes.root}>

            <Button 
            className={classes.button} 
            variant="outlined" 
            color="secondary">
            Registrar grátis 
            </Button>

        <ListSubheader>
            {'Tags em alta'}
        </ListSubheader>
        {
            tags.map((item) => (
                <ListItem dense button key={`item-${item.id}-${item.name}`}>
                  <ListItemText primary={`#${item.name}`}/>
                </ListItem>
            ))
        }
        
        <ListItem className={classes.font} button>
            Exibir mais tags
        </ListItem>

        </Paper>
     );
}
 
export default Navbar;