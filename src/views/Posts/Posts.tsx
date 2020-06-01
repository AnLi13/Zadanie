import React from 'react';
import service, { IPostProps, IPostResponse } from '../../services/service';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 25px',
        border: 'white 5px dashed',
        borderRadius: '24px',
        padding: '24px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    post: {
        textAlign: 'center',
        fontSize: '22px',
        color: 'white',
        fontWeight: 'bold'
    }

})



const Posts = () => {

    const classes = useStyles();
    const [posts, setPosts] = React.useState<IPostProps | null>(null);

    React.useEffect(() => {
        service.showPosts().then((resp) => {
            if (resp) {
                console.log(resp);
                setPosts(resp);
            }
        });
    })
    return (
        <div className={classes.container}>
            {!!posts && posts?.posts.map((post : any) => (
                <div className={classes.post}>
                    <p>{post.userId}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts;