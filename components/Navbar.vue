<template>
  <div><!-- Begin Main Div -->
    <header class="navbar navbar-expand-md navbar-dark d-print-none font-weight-normal" v-bind:class="{ 'd-none': !isVisible }" backup="navbar-overlap"><!-- Begin Header -->
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span class="navbar-toggler-icon" />
        </button>
        <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href=".">
            <img src="~assets/static/finja_light.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
          </a>
        </h1>
        <div class="navbar-nav flex-row order-md-last">
          <div class="nav-item dropdown d-none d-md-flex me-3">
            <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg> -->
              <span class="badge bg-red" />
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-card">
              <div class="card">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
                </div>
              </div>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span class="avatar avatar-sm" style="" />
              <div class="d-none d-xl-block ps-2">
                <!-- <div>{{ user.name }}</div> -->
                <div>User Name</div>
                <!-- <div class="mt-1 small text-muted">{{ user.email }}</div> -->
                <div class="mt-1 small text-muted">User Email</div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <!-- <router-link to="/settings" class="dropdown-item"><span v-html="getIcon('settings_dark')"></span> Settings</router-link> -->
              <div class="dropdown-divider" />
              <!-- <a href="javascript:;" class="dropdown-item" @click.prevent="logout"><span v-html="getIcon('logout_dark')"></span> {{ $t('logout') }}</a> -->
            </div>
          </div>
        </div>
        <div id="navbar-menu" class="collapse navbar-collapse">
          <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <!-- <dynamic-link :text="navigation_links"></dynamic-link> -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" @click="addTab()">
                    <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('user','#ffffff')">
                    </span>
                  <span class="nav-link-title">
                      Customer
                    </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('stack','#ffffff')">
                    </span>
                  <span class="nav-link-title">
                      Products
                    </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('currency_dollar','#ffffff')">
                    </span>
                  <span class="nav-link-title">
                      OLP Transaction
                    </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="$store.state.svgIcons.getIcon('notebook','#ffffff')">
                    </span>
                  <span class="nav-link-title">
                      Bills
                    </span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                    <span class="nav-link-title">
                      Settings
                    </span>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Accounts
                  </a>
                  <a class="dropdown-item" href="#">
                    Companies
                  </a>
                  <a class="dropdown-item" href="#">
                    Distributors
                  </a>
                  <a class="dropdown-item" href="#">
                    Payment Channels
                  </a>
                  <a class="dropdown-item" href="#">
                    User Management
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header><!-- End Header -->
    <div><!-- Begin Sidebar -->
      <b-sidebar id="sidebar-1" title="Sidebar" class="width15rem" shadow>
        <Aside />
      </b-sidebar>
    </div><!-- End Sidebar -->
  </div><!-- End Main Div -->
</template>

<script>
// import { mapGetters } from 'vuex'
// import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    // LocaleDropdown
  },

  data: () => ({
    isVisible: true
    // appName: window.config.appName,
    // photo_url: '',
    // menus_tree: [],
    // navigation_links: '<span></span>'
  }),
  // computed: mapGetters({
  //   user: 'auth/user'
  // }),
  watch: {
    // menus_tree: function () {
    //   this.navigation_links = this.generateMenu()
    // }
  },
  mounted () {
    const _this = this
    this.$EventBus.$on('toggleNavbar', (param) => { _this.toggleNavbar(param) })
    // let _this = this
    // this.enableEventListener(this.getEventListenerConfig(this, 'menus_tree', 'menus_tree'))
    // this.enableEvent('navigation_links', 'fetchMenuTree', this)
    // this.photo_url = 'background-image: url(' + this.user.photo_url + ')'
    // this.fetchMenuTree()
    // setTimeout(function () {
    //   // Echo.private('App.Models.User.' + _this.user.id)
    //   //   .notification((notification) => {
    //   //     console.log(notification.message)
    //   //   })
    //   // Echo.private('events')
    //   //   .listen('RealTimeMessage', (e) => console.log('RealTimeMessage: ' + e.message));
    // }, 1000)
  },
  // beforeDestroy () {
  //   this.disableEventListener(this.getEventListenerConfig(this, 'menus_tree'))
  //   this.disableEvent('navigation_links')
  // },
  methods: {
    toggleNavbar (param) {
      this.isVisible = !this.isVisible
    },
    addTab () {
      this.$EventBus.$emit('newTab', {
        key: 'Customer',
        label: 'Customer',
        component: 'Customer',
        closable: true
      })
    }
    // async logout () {
    //   // Log out the user.
    //   await this.$store.dispatch('auth/logout')

    //   // Redirect to login.
    //   this.$router.push({ name: 'login' })
    // },
    // fetchMenuTree () {
    //   this.HttpRequest(this.HttpRequestConfig('get', '/api/menus/fetchMenuTree', 'menus_tree'))
    // }
    // generateMenu () {
    //   const _this = this
    //   let menuHtml = '<ul class="navbar-nav">'
    //   this.menus_tree.forEach(function (menu, key) {
    //     if (menu.childrens && menu.childrens.length) {
    //       menuHtml += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#navbar-' + menu.name + '" data-bs-toggle="dropdown" role="button" aria-expanded="false">'
    //       if (menu.icon) {
    //         menuHtml += '<span class="nav-link-icon d-md-none d-lg-inline-block" v-html="getIcon(\'' + menu.icon + '\')"></span>'
    //       }
    //       menuHtml +='<span class="nav-link-title">' + menu.display_name + '</span></a><div class="dropdown-menu">'
    //       menuHtml += _this.getMenuTree(menu.childrens)
    //       menuHtml += '</div></li>'
    //     } else {
    //       menuHtml += '<li class="nav-item"><router-link class="nav-link" to="' + menu.link + '">'
    //       if (menu.icon) {
    //         menuHtml += '<span class="nav-link-icon d-md-none d-lg-inline-block" v-html="getIcon(\'' + menu.icon + '\')"></span>'
    //       }
    //       menuHtml += '<span class="nav-link-title">' + menu.display_name + '</span></router-link></li>'
    //     }
    //   })
    //   menuHtml += '</ul>'
    //   return menuHtml
    // },
    // getMenuTree (tree) {
    //   const _this = this
    //   let treeHtml = ''
    //   tree.forEach(function (leaf, key) {
    //     if (leaf.childrens && leaf.childrens.length) {
    //       treeHtml += '<div class="dropend"><a class="dropdown-item dropdown-toggle" href="#sidebar-' + leaf.name + '" data-bs-toggle="dropdown" role="button" aria-expanded="false">' + leaf.display_name + '</a><div class="dropdown-menu">'
    //       treeHtml += _this.getMenuTree(leaf.childrens)
    //     } else {
    //       treeHtml += '<router-link class="dropdown-item" to="' + leaf.link + '">' + leaf.display_name + '</router-link>'
    //     }
    //   })
    //   treeHtml += '</div></div>'
    //   return treeHtml
    // }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
