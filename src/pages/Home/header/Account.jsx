import Avatar from "@material-ui/core/Avatar"
import {useSelector, useDispatch} from 'react-redux'
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import {useState, useRef} from 'react'
import {signOut} from '../../../actions/accountActions'
import {useNavigate} from 'react-router-dom'

function Account() {
   const account = useSelector((state) => state.account)
   const [isOpen, setOpen] = useState(false)  //isOpen inicia false, quando clicado, muda para true
   const ref = useRef()  //usará o Avatar como referência
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const isAuthenticated = !!account.user  //o menu do avatar só deve aparecer se o usuário estiver logado (pois não faria sentido fazer logout), por isso esta verificação.

   const handleOpen = () => {
       setOpen(true)
   }

   const handleClose = () => {
    setOpen(false)
   }


   const handleSignOut = () => {
    handleClose()
    dispatch(signOut())
    navigate('/')
   }


    return(
        <>
         <Avatar 
         ref={ref}
         onClick={handleOpen} 
         alt="Erika sato" 
         src={account.user && account.user.avatar}
         />

         {
             isAuthenticated ? (
         
         <Menu
         anchorEl={ref.current}
         anchorOrigin={{              //posição 
             vertical: 'bottom',
             horizontal: 'center'
         }}
         open={isOpen}  //controla se esse componente será renderizado ou não
         onClose={handleClose}
         getContentAnchorEl={null}  //pra menu aparecer abaixo do avatar, e não por cima
         >
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Meus Favoritos</MenuItem>
        <MenuItem>Meus Posts</MenuItem>
        <MenuItem>Minhas conexões</MenuItem>
        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
         </Menu>
           
           ) : (

        <Menu
         anchorEl={ref.current}
         anchorOrigin={{              //posição 
             vertical: 'bottom',
             horizontal: 'center'
         }}
         open={isOpen}  //controla se esse componente será renderizado ou não
         onClose={handleClose}
         getContentAnchorEl={null}  //pra menu aparecer abaixo do avatar, e não por cima
         >
        <MenuItem>Registrar Grátis</MenuItem>
        <MenuItem>Entrar</MenuItem>
       
         </Menu>
           )}
        </>

    )
}

export default Account