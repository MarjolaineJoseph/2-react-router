import React from 'react';

//this is stateless so no need to create a class extending component
const PostsItem = ({match}) => {
    return <div>{match.params.id}</div>
}

export default PostsItem;