export default function AppMenu() {
  return (
    <div className="AppMenu">
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link">
          <img src="logo192.png" class="brand-image img-circle elevation-3" />
          <span class="brand-text font-weight-light">
            <strong>saba</strong> saba
          </span>
        </a>
        <div class="sidebar">
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img
                src="/dist/img/sweda.png"
                className="brand-image img-circle elevation-3"
              />
            </div>
            <div class="info">
              <a href="#" class="d-block">
                승우기
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
              class="nav nav-pills nav-sidebar flex-column nav-child-indent"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                  <p>
                    local
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/container" class="nav-link">
                      <i className="fa-brands fa-docker"></i>
                      <p> Container</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/images" className="nav-link">
                      <i className="fa-solid fa-image"></i>
                      <p> images</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/vulner" className="nav-link">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      <p> vulnerability</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/log" className="nav-link">
                      <i className="fa-solid fa-font-awesome"></i>
                      <p> Log</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <p>
                    remote
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/container?remote=remote" className="nav-link">
                      <i className="fa-brands fa-docker"></i>
                      <p> Container</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/keymange" className="nav-link">
                  <i className="fa-solid fa-key"></i>
                  <p> keySinging</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/setting" className="nav-link">
                  <i className="fa-solid fa-gear"></i>
                  <p> setting</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}
