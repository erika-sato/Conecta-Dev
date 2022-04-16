import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Signin from "./pages/Signin";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Mock'
import { Provider } from 'react-redux'
import store from "./store";
import GuestRoute from './routes/GuestRoute'
import Auth from "./components/Auth";
import NewPost from "./pages/Post/New";
import { AppRouter } from "./Router"



function App() {


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>       {/*ThemeProvider envolvendo toda a aplicação para mudar tema-padrão do Material-UI*/}


        <Auth>
          <BrowserRouter>

            <Routes>
              {/* <GuestRoute path="/sign-in" element={<Signin />} />  */}
              <Route path="/sign-in" element={<Signin />} />
              {/* <Route path="/post/new" element={<NewPost />}/> */}
              <Route path="//*" element={<Home />} />
            </Routes>

          </BrowserRouter>

        </Auth>




      </ThemeProvider>
    </Provider>

  )
}

export default App;


