import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import {Link} from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore.collection('posts')
      .get()
      .then((snapshot) => {
        const posts=snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        // console.log('posts', posts);
        setPosts(posts);
      });
      
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Sachin</div>

      {posts.map((post, index) => (
        <div className="post" key={`posts-${index}`} >
          <Link to={`/post/${post.id}`}>
            <h3>
              {post.title}
            </h3>

            <p>{post.subTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
