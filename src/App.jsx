import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Signin from "./pages/Signin";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'


function App() {
  

  return (
    
    <ThemeProvider theme={theme}>       {/*ThemeProvider envolvendo toda a aplicação para mudar tema-padrão do Material-UI*/}
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="*" element={<h1>Not found 404!</h1>} />
      
      
      </Routes>
    </BrowserRouter>  
  
   </ThemeProvider>

 )
}

export default App
