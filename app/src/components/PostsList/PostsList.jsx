import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts } from "../../redux/actions/postsAC";
import PostsItem from "../PostsItem/PostsItem";
import Grid from "@mui/material/Grid";
import { useDebounce } from "../../hooks/useDebounce";


const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);
  console.log({posts})

  const search = useSelector((store) => store.search)

  const debouncedSearch = useDebounce(search, 1000)

  useEffect(() => {
    dispatch(loadAllPosts(debouncedSearch)); 
  }, [debouncedSearch, dispatch])


  

  if (!posts.length) return <div>Posts list is empty</div>;

  return (
    <Grid container spacing={2} justifyContent="center">
      {posts.map((post) => {
        return <PostsItem key={post._id} {...post} />;
      })}
    </Grid>
  );
};

export default PostsList;
