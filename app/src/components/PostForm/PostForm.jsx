import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { queryNewPost } from "../../redux/actions/postsAC";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    const preparedPostQuery = {
      title,
      text,
      image,
      tags: tags.split(",").map((el) => el.trim()),
    };

    const body = JSON.stringify(preparedPostQuery);

    console.log(body);

    dispatch(queryNewPost(body));
  };

  const isTitleError = false;

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        my: 'auto'
      }}
    >
      <Paper variant="outlined">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Post
          </Typography>
          <Box
            component="form"
            onSubmit={submitHandler}
            noValidate
            sx={{ mt: 1, px: 4 }}
          >
            <TextField
              error={isTitleError}
              margin="normal"
              fullWidth
              required
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              helperText={isTitleError && "Title must have min 3 symbols"}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              margin="normal"
              fullWidth
              required
              id="text"
              label="Text"
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="image"
              label="Image"
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="Tags"
              label="Tags"
              variant="outlined"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostForm;
