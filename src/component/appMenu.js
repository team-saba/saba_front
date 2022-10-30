export default function AppMenu() {
  return (
    <div className="AppMenu">
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
          {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"/> */}
          <span class="brand-text font-weight-light">
            <strong>saba</strong> saba
          </span>
        </a>
        <div class="sidebar">
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image"></div>
            <div class="info">
              <a href="#" class="d-block">
                선용이
              </a>
            </div>
          </div>

          <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input
                class="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <i class="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                  <p>
                    Menu
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/container" class="nav-link">
                      <p>Container</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/images" className="nav-link">
                      <p>images</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/analyis" className="nav-link">
                      <p>analyis</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/vulner" className="nav-link">
                      <p>vulnerability</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/log" className="nav-link">
                      <p>Log</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}
