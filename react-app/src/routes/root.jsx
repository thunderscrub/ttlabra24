import { Outlet, Link } from "react-router-dom";
import testForm from "../testForm";

export default function Root() {
    return (
      <>
        <div id="sidebar" style={{position:"fixed",zIndex:"1",overflow:"auto"}}>
          <h1>ApplyToUni</h1>
          <nav style={{flex: "1",overflow: "auto", paddingTop: "1rem"}}>
            <ul>
            <li>
                <Link to={`/`}>Front page</Link>
              </li>
              <li>
                <Link to={`/FormsList`}>Forms</Link>
              </li>
              <li>
                <Link to="/FormBuilder" state={{from: testForm}}>Form builder</Link>
              </li>
              <li>
                <Link to="/FormRenderer" state={{from: testForm}}>Form renderer (test)</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"><Outlet /></div>
      </>
    );
  }