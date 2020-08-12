import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts, `here`)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

      {
        posts.map(elem => {
          console.log(elem)
          return <Post
          key={elem.id}
          post={elem}
          likePost={likePost}
          />
        })
      }
    </div>
  );
};

export default Posts;
