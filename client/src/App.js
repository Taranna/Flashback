import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Forms/Form";
import Posts from "./components/Posts/Posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useStyles from "./styles";
import flashback from "./images/flashback.jpg";

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Chilanka", "cursive"].join(","),
    },
  });
  const [currentId, setCurrentId] = useState(0); //initial set to null ,if id is not selected
  const dispatch = useDispatch();
  const classes = useStyles();
  // here we keep track of current id ,because have to share the
  // state of current id between the <Posts/> and <Form/> &App is only parent component of both Posts and Form
  useEffect(() => {
    dispatch(getPosts()); //dispatch action
  }, [currentId, dispatch]); //useEffect is initially DidMount() component ,but changes to WillUpdate()

  return (
    <ThemeProvider theme={theme}>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Flashback
          </Typography>
          <img
            className={classes.image}
            src={flashback}
            alt="flashback"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
