import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NewPost from "./pages/Post/New";
import Feed from './pages/Feed';
import Signin from './pages/Signin';
import Auth from "./components/Auth";
import Home from "./pages/Home";

export function AppRouter () {
    return (
        <BrowserRouter>
        <Auth>
        <Routes>
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/" element={<Feed />} />
                    <Route path="post/new" element={<NewPost />} />
                    <Route path="*" element={<h1>Not found 404!</h1>} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="//*" element={<Home />} /> 
        </Routes>
        </Auth>
        </BrowserRouter>
    )
}

