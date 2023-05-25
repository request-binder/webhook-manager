import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Binder from './components/Binder';
import BinderList from './components/BinderList';
import NewBinder from './components/NewBinder';

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
    <RouterProvider router={router} />
  )
}

export default App;
