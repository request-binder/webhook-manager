import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Binder from './components/Binder';
import BinderList from './components/BinderList';
import NewBinder from './components/NewBinder';
// import { Header } from './components/Header';

import myimage from '../dist/logo.png';

// const Header = () => {
//   return (
//     <header>
//        <img alt='my_image' src={ myimage }></img>
//     </header>
//   );
// };

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <NewBinder />
        <BinderList />
      </div>
    ),
  }, {
    path: "/:binderId",
    element: (
      <Binder />
    )
  }
  ])
  return (
    <>
        <header>
          <img alt='my_image' style={{ width: '200px', height: 'auto' }} src={ myimage }></img>
        </header>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
