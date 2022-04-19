<template>
  <div>
    <aside class="navbar navbar-vertical navbar-expand navbar-dark w-100">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand navbar-brand-autodark">
          <a href=".">
            <img src="~assets/static/finja_light.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
          </a>
        </h1>
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="navbar-nav pt-lg-3">
            <li class="nav-item">
              <a class="nav-link" href="#">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('home','#ffffff')">
                  </span>
                <span class="nav-link-title">
                    Home
                  </span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('package','#ffffff')"></span>
                <span class="nav-link-title">
                    Interface
                  </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="#">
                      Empty page
                    </a>
                    <a class="dropdown-item" href="#">
                      Accordion
                    </a>
                    <a class="dropdown-item" href="#">
                      Blank page
                    </a>
                    <a class="dropdown-item" href="#">
                      Buttons
                    </a>
                    <a class="dropdown-item" href="#">
                      Cards
                    </a>
                    <a class="dropdown-item" href="#">
                      Cards Masonry
                    </a>
                    <a class="dropdown-item" href="#">
                      Colors
                    </a>
                    <a class="dropdown-item" href="#">
                      Dropdowns
                    </a>
                    <a class="dropdown-item" href="#">
                      Icons
                    </a>
                    <a class="dropdown-item" href="#">
                      Modals
                    </a>
                    <a class="dropdown-item" href="#">
                      Maps
                    </a>
                    <a class="dropdown-item" href="#">
                      Map fullsize
                    </a>
                    <a class="dropdown-item" href="#">
                      Vector maps
                    </a>
                  </div>
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="#">
                      Navigation
                    </a>
                    <a class="dropdown-item" href="#">
                      Charts
                    </a>
                    <a class="dropdown-item" href="#">
                      Pagination
                    </a>
                    <a class="dropdown-item" href="#">
                      Skeleton
                    </a>
                    <a class="dropdown-item" href="#">
                      Tabs
                    </a>
                    <a class="dropdown-item" href="#">
                      Tables
                    </a>
                    <a class="dropdown-item" href="#">
                      Carousel
                    </a>
                    <a class="dropdown-item" href="#">
                      Lists
                    </a>
                    <a class="dropdown-item" href="#">
                      Typography
                    </a>
                    <a class="dropdown-item" href="#">
                      Markdown
                    </a>
                    <div class="dropend">
                      <a class="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        Authentication
                      </a>
                      <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Sign in</a>
                        <a href="#" class="dropdown-item">Sign up</a>
                        <a href="#" class="dropdown-item">Forgot password</a>
                        <a href="#" class="dropdown-item">Terms of service</a>
                        <a href="#" class="dropdown-item">Lock screen</a>
                      </div>
                    </div>
                    <div class="dropend">
                      <a class="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        Error pages
                      </a>
                      <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">404 page</a>
                        <a href="#" class="dropdown-item">500 page</a>
                        <a href="#" class="dropdown-item">Maintenance page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('checkbox','#ffffff')"></span>
                <span class="nav-link-title">
                    Forms
                  </span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('star','#ffffff')"></span>
                <span class="nav-link-title">
                    Extra
                  </span>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Activity
                </a>
                <a class="dropdown-item" href="#">
                  Gallery
                </a>
                <a class="dropdown-item" href="#">
                  Invoice
                </a>
                <a class="dropdown-item" href="#">
                  Search results
                </a>
                <a class="dropdown-item" href="#">
                  Pricing cards
                </a>
                <a class="dropdown-item" href="#">
                  Users
                </a>
                <a class="dropdown-item" href="#">
                  License
                </a>
                <a class="dropdown-item" href="#">
                  Music
                </a>
                <a class="dropdown-item" href="#">
                  Widgets
                </a>
                <a class="dropdown-item" href="#">
                  Wizard
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown" role="button" aria-expanded="true">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('layout2','#ffffff')"></span>
                <span class="nav-link-title">
                    Layout
                  </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="#">
                      Horizontal
                    </a>
                    <a class="dropdown-item" href="#">
                      Vertical
                    </a>
                    <a class="dropdown-item" href="#">
                      Vertical transparent
                    </a>
                    <a class="dropdown-item" href="#">
                      Right vertical
                    </a>
                    <a class="dropdown-item" href="#">
                      Condensed
                    </a>
                    <a class="dropdown-item" href="#">
                      Condensed dark
                    </a>
                    <a class="dropdown-item" href="#">
                      Combined
                    </a>
                  </div>
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="#">
                      Navbar dark
                    </a>
                    <a class="dropdown-item" href="#">
                      Navbar sticky
                    </a>
                    <a class="dropdown-item" href="#">
                      Navbar overlap
                    </a>
                    <a class="dropdown-item" href="#">
                      Dark mode
                    </a>
                    <a class="dropdown-item" href="#">
                      RTL mode
                    </a>
                    <a class="dropdown-item" href="#">
                      Fluid
                    </a>
                    <a class="dropdown-item" href="#">
                      Fluid vertical
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                  <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('file_text','#ffffff')"></span>
                <span class="nav-link-title">
                    Documentation
                  </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>
