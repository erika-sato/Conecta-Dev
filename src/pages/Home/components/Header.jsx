import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon'
import {Bell} from 'react-feather'
import {Avatar} from '@material-ui/core';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems:'center'
    },

    button: {
        marginRight: 10,
    }, 
    bell: {
        marginRight: 10,
    }
})

const Header = () => {
    const classes = useStyles()

    return ( 
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <img src="src/images/logo.png" alt="logo" className={classes.img} />
                   <div className={classes.grow}></div>
                    <div className={classes.userSection}>
                    <Button className={classes.button} variant="contained" color="primary">Novo Post</Button>
                   
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>

                    <Avatar alt="Erika sato" src="/"/>
                   
                   
                    </div>
                   
                    {/* <div>
                        <a href="/">Conecta Dev</a>
                        <input type="text"></input>
                    </div>
                    <div>
                    
                        <span>img1</span>
                        <span>img2</span>
                    </div> */}
                </Toolbar>
            </AppBar>
     );
}
 
export default Header;