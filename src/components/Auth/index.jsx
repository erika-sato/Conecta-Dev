//useEffect terá 2 parâmetros: 1º uma fç, e 2º o obj a ser monitorado para executar a fç
//useCallback evitará que a fç seja executada repetidamente

import {useEffect, useCallback} from 'react'
import authService from '../../services/authService'
import {setUserData} from '../../actions/accountActions'
import {useDispatch} from 'react-redux'

function Auth({children}) {
    const dispatch = useDispatch()
    const initAuth = useCallback(async() => {    //verificar se usuário já está autenticado. caso tenha perdido informações, irei recuperá-las. se não estiver autenticado, fica como está
    if (authService.isAuthenticated()) {         //ou seja, se há um token, o app verifica se o token é válido, e faz um login silenciado somente com o token, sem login e senha
//recuperar os dados novamente do usuário logado
    await dispatch(setUserData()) }

  }, [dispatch])
  
  useEffect(() => {
    initAuth()
  }, [initAuth])

    return children

}

export default Auth