import {createBrowserRouter} from 'react-router-dom'
import Layout from "@/components/Layout";
import Home from "@/components/Home";
export interface RouteElement{
  path:string
  id:string
  loader?:() => Promise<any>
  element:JSX.Element
  children?:RouteElement[]
}
const routes: RouteElement[] = [
  {
    path:'/',
    id:'layout',
    element:<Layout/>,
    children:[
      {
        path:'/',
        id:'home',
        element:<Home/>
      }
    ]
  }
];

export default createBrowserRouter(routes);
