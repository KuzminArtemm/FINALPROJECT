import "./App.css";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import PostForm from "./components/PostForm/PostForm";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostsList from "./components/PostsList/PostsList";
import SignIn from "./components/Auth/SignIn/SignIn";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { RequireAuth } from "./components/Auth/RequireAuth/RequireAuth";

const themeLight = createTheme({
  palette: {
    background: {
      default: "whitesmoke",
    },
  },
});

// Two long comment

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Container
            maxWidth="md"
            sx={{ flexGrow: 1, display: "flex", mt: 3, flexDirection: 'column' }}
            className="container"
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/posts"
                element={
                  <RequireAuth>
                    <PostsList />
                  </RequireAuth>
                }
              />
              <Route
                path="/postform"
                element={
                  <RequireAuth>
                    <PostForm />
                  </RequireAuth>
                }
              />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
