import { createRoot } from "react-dom/client";
import { App } from './components/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Suspense } from 'react';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';


const root = document.getElementById('root')

if (!root) {
  throw new Error("root not found")
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <Suspense><Shop/></Suspense>
      },
    ]
  },
]);

container.render(<RouterProvider router={router} />)