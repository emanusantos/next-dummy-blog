import PostItem from './post-item'
import classes from './post-grid.module.css'

const PostGrid = ({ posts }) => {
    return (
        <ul>
            {posts.map(post => <PostItem key={Math.floor(Math.random() * 10)} />)}
        </ul>
    );
};

export default PostGrid;