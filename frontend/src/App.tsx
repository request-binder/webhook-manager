import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Binder from './components/Binder';
import BinderList from './components/BinderList';
import NewBinder from './components/NewBinder';

import myimage from './assets/HatchfulExport-All/logo_transparent.png';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: (
        <>
        <img alt='my_image' style={{ width: '400px', height: 'auto' }} src={ myimage }></img>
        <NewBinder />
        <BinderList />
      </>
    ),
  }, {
    path: "/:binderId/:requestId?",
    element: (
      <Binder />
    )
  }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
