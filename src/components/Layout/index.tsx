import {Fragment} from 'react';
import {Outlet} from "react-router-dom";
const Layout = () => {
  return (
    <Fragment>
      <header id="header">
        <h3 className="header-title">大屏数据可视化模板</h3>
      </header>
      <div id="container">
        <Outlet/>
      </div>
      <footer id="footer"/>
    </Fragment>
  );
};

export default Layout;