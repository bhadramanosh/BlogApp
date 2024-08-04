import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    category: "Travel",
    title: "Travel the world!!!!!",
    img_url: "hfd",
  },
  {
    id: 2,
    category: "Art",
    title: "Art!!!!!!!!!!!!",
    img_url: "jfij",
  },
  {
    id: 3,
    category: "Food",
    title: "Food is Art!!!!",
    img_url: "jfdvi",
  },
];

const Home = () => {
  return (
    <Grid container spacing={3} sx={{ marginTop: 3 }}>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardMedia component="img" height="140" image={post.img_url} alt={post.title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {post.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="contained">
                Delete
              </Button>
              <Button size="small" color="secondary" variant="contained">
                Update
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
