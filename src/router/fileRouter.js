import About from "../pages/About";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  {path: '/about', element: About},
  {path: '/posts', element: Posts},
  {path: '/posts/:id', element: PostIdPage},
  {path: '/', element: Posts},
  {path: '/login', element: Posts},
  {path: '*', element: NoPage},
]

export const publicRoutes = [
  {path: '/login', element: Login},
  {path: '/about', element: About},
  {path: '*', element: Login},
]