import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Posts from './pages/posts/Posts';


//layouts
import DefaultLayout from "./layouts/DefaultLayout";
import SinglePost from './pages/posts/SinglePost';

//context
import { GlobalProvider } from './context/GlobalContext';


function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/contact" Component={ContactPage} />
              <Route path="/posts" Component={Posts} />
              <Route path="/posts/:id" Component={SinglePost} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;