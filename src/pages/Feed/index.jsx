import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../components/PostCard'
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    root: {
        width: "100vh",
    }
}))

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Érika Sato',
            username: 'erikasato',
            avatar: 'src/images/avatars/img.jpg'
        },

        title: "Criando um App do zero utilizando React.JS",
        date: "April 7, 2022",
        description: 'Oi pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "src/images/posts/post1.png"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Érika Sato',
            username: 'erikasato',
            avatar: 'src/images/avatars/img.jpg'
        },

        title: "Comparativo entre React.JS e Vue.JS - Performance",
        date: "April 1, 2022",
        description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiência',
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "src/images/posts/post2.png"
    },
]

const Feed = () => {
    const classes = useStyles()


    return (

        <Container maxWidth="md">
            
            <Box display="flex">
                <Navbar />
                <div className={classes.root}>
                    {
                        posts.map((post) => (
                            <PostCard key={post.id} post={post} />

                        ))
                    }
                </div>

            </Box>
        </Container>



    );
}

export default Feed;