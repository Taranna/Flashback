import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";
//GET the current id

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: " ",
    title: " ",
    message: " ",
    tags: "",
    selectedFile: "",
  });

  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((p) => p._id === currentId) : null
  // );
  //only want the data for the updated Post

  const dispatch = useDispatch();
  const classes = useStyles();
  //using UseEffect to fill values of The Form

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);
  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh in the browser
    //if currentId is NOT NULL ,then dont dispatch the createPost
    if (currentId === 0) {
      dispatch(createPost(postData));
      // clear();
    } else {
      // dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  // if (currentId) {
  //   dispatch(updatePost(currentId, postData)); //first param is id
  // } else {
  //   dispatch(createPost(postData)); //pass All Data from state postData,if theres no currently selected id,means post is being created   }
  // }
  // clear();
  //handler function
  //clear() is to clear the fields on clickinng Submit

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" color="secondary">
          Creating a Flashback
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({
              ...postData,
              creator: e.target.value,
            })
          }
        />

        {/* using spread to ensure that data persists for the new text fields ,when changing the second parameter in setPostData() */}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(" ,") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
