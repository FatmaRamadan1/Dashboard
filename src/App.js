import './style/dark.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Listchat from './pages/listchat/Listchat';
import ProfileList from './pages/profilelist/ProfileList';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
            <Route path="users" >
              <Route index element={<List />} />
            </Route>
            <Route path='chats'>
                <Route index element={<Listchat/>}/>
            </Route>
            <Route path='profile'>
                <Route index element={<ProfileList/>}/>
            </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
