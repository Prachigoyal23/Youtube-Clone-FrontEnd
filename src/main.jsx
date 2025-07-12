import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoPage from './Pages/VideoPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import { AuthProvider } from "./Context/AuthContext.jsx";
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import CreateChannel from './Components/CreateChannel.jsx'
import Channel from './Pages/Channel.jsx'
import Channels from './Pages/Channels.jsx'
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/video/:videoId",
        element: <VideoPage />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/createChannel",
        element: <CreateChannel />
      },
      {
        path: "/channel",
        element: <Channel />
      },
      {
        path: "/channels/:id",
        element: <Channels />
      },
      {
        path: "*",
        element: <NotFound />
}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  </StrictMode>,
)
