import {RouterProvider} from "react-router-dom";
import router from '@/config/routes.config'
import '@/styles/index.less'
import Layout from "@/components/Layout";
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
