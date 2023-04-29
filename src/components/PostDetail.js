import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";

function PostDetail() {

  const [posts, setPosts] = useState({});
  const {postId}=useParams();

  useEffect(() => {
    firestore.collection('posts').doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot',snapshot.data());
        setPosts(snapshot.data());
      })
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
      <p>{posts.subTitle}</p>
      {/* {console.log('posts', posts)} */}
    </div>
  );
}

export default PostDetail;
