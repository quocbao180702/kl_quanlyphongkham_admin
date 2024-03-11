
import { Outlet } from 'react-router-dom'
import Header from './components/header'
/* import { Link } from 'react-router-dom'
 */
function App() {
  return (
    <>
      <div>
        <Header />
        {/* <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-light" id="menu">
                  <li>
                    <Link to="/bacsi" className="nav-link px-0 align-middle text-dark">
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Bác Sĩ</span></Link>
                  </li>

                  <li>
                    <Link to="/benhnhan" className="nav-link px-0 align-middle text-dark">
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Bệnh Nhân</span></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col py-3">
              <Outlet />
            </div>
          </div>
        </div>  */}
        <Outlet />
      </div>
    </>
  )
}

export default App
