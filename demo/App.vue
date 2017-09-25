<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="success" :sticky="true">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <span>Vue BS Drawer Example</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <div class="row">
        <bs-drawer v-on:bs-drawer-opened="closeRight"
          ref="leftDrawer"
          side="left"
          :showDrawer="false"
          :showToggleBtn="true"
          btnTop="195px"
          bg="transparent"
          sidebar="md"
          class="col-10 col-sm-3 col-md-3 col-lg-2 bs-drawer__animate">
            <b-card class="ml-3 my-3" header="Sidebar Nav">
              <b-nav vertical>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </b-card>
        </bs-drawer>

        <div class="px-4 col-12 col-md-9 col-lg-10 offset-md-3 offset-lg-2 ml-auto ">
          <router-view></router-view>
        </div>

        <bs-drawer
          ref="rightDrawer"
          v-on:bs-drawer-opened="closeLeft"
          side="right"
          :showDrawer="false"
          :btnStyle="rightBtnStyles[styleIndex]"
          :btnTop="0"
          class="col-9 col-sm-8 col-md-4 col-lg-4 col-xl-2 bs-drawer__animate">
              <b-nav vertical>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
              <b-button @click="toggleStyle" size="sm">Button styles</b-button>

        </bs-drawer>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      rightBtnStyles: [
        {},
        {
          top: '0',
          bottom:'0',
          marginTop: '54px',
          width: '20px',
          height: '100%',
          borderRadius: '50%',
          border: '0',
          borderRadius: '0',
          background: 'rgba(0, 0, 0, 0.2)',
          fill: 'green'
        },
        {
          background: 'rgba(150, 5, 0, 0.2)',
          padding: '0 5px',
          borderRadius: '0',
          marginTop: '54px',
          marginRight: '15px',
          height: '100%',
          top: '0'
        },
        {
          background: 'rgba(4, 80, 0, 0.4)',
          verticalAlign: 'middle',
          padding: '0',
          height: '40px',
          borderRadius: '0',
          background: 'rgba(0, 0, 0, 0.2)',
        }
      ],
      styleIndex: 0
    }
  },
  methods: {
    closeRight () {
      this.$refs.rightDrawer.closeDrawer()
      this.$refs.rightDrawer2.closeDrawer()
    },
    closeLeft () {
      this.$refs.leftDrawer.closeDrawer()
    },
    toggleStyle () {
      this.styleIndex === 3
        ? this.styleIndex = 0
        : this.styleIndex += 1
    }
  }
}
</script>

<style lang='scss'>
body {
  background-color: #eed;
}


.container-fluid {
  padding-top: 56px;
}
.bs-drawer__left {
  padding-top: 5rem;
}
.bs-drawer__right {
  // margin-top: 54px;
}
.bs-drawer__nav-container-right {
  padding: 2rem;
  padding-top: 5rem;
}
.bs-drawer__btn {
  width: 50px;
}


</style>
