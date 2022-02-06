import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";


import Post from './Post/Post';

import useStyles from './styles';

const Posts = ({ setCurrentId }) =>{
    const {posts, isLoading} = useSelector((state) => state.posts);
 
    const classes = useStyles();

    if(posts.length === 0 && !isLoading) return 'No Posts';

    return (
       isLoading ? <CircularProgress /> : (
           <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
               {posts?.map((i) => (
                   <Grid key={i._id} item xs={12} sm={12} mid={6} lg={3}>
                       <Post post={i} setCurrentId={ setCurrentId}/>
                   </Grid>
               ))}
           </Grid>
       )
    );
}

export default Posts;