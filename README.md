# vue-bs-drawer

Vue.js sidebar / drawer component using bootstrap 4 classes.

See [example here](https://jasonkroll.github.io/vue-bs-drawer/)

## Getting Started

### Prerequisites

You will need to install Bootstrap 4 in your project.
You can install using the instructions on the [Bootstrap](https://v4-alpha.getbootstrap.com/) homepage.

Or (recommended) just use the [BootstrapVue](https://bootstrap-vue.js.org/) package.

### Installing

Install the via NPM

```
npm install --save vue-bs-drawer
```

Register component globally

```
// Your entry main.js
import Vue from 'vue'
import App from './App'

import VueBsDrawer from 'vue-bs-drawer'

Vue.component('bs-drawer', VueBsDrawer)
```

or register locally in your .vue file

#### Example
```
<template>
  <div id='mycomponent'>>
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
          <!-- Add some nav elements here-->
        </bs-drawer>

        <div class="px-4 col-12 col-md-9 col-lg-10 offset-md-3 offset-lg-2">
          <!-- Main View here -->
          <router-view></router-view>
        </div>
        <!-- Add another drawer on the other side if needed -->
        <bs-drawer
          ref="rightDrawer"
          side="right"
          :showDrawer="false"
          :btnTop="0"
          class="col-9 col-sm-8 col-md-4 col-lg-4 col-xl-2 bs-drawer__animate">
          <!-- Add some nav elements here-->
        </bs-drawer>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import 'VueBsDrawer' from 'vue-bs-drawer'
export default {
  components: {
    'bs-drawer': VueBsDrawer
  },
  data () {
    return {
       msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
```
#### Sizing
Use standard Bootstrap `col-*` classes in the component to size the drawer.
e.g.
```
<bs-drawer v-on:bs-drawer-opened="closeRight"
  side="left"
  class="col-10 col-sm-3 col-md-3 col-lg-2 bs-drawer__animate">
  <!-- Add some nav elements here-->
</bs-drawer>
```
#### Responsive Sidebar
Use the `sidebar=<size>` property to display as a responsive sidebar. Sizes include sm, md & lg.

Then adjust your main content with the correct Bootstrap offset classes. E.g. for `size="md` and a `col-md-3` size, use an offset of `offset-md-3`.

This will automatically hide your sidebar when the screen size is smaller than the Bootstrap `md` breakpoint.
e.g.
```
...
<bs-drawer v-on:bs-drawer-opened="closeRight"
  side="left"
  sidebar="md"
  class="col-10 col-sm-3 col-md-3 bs-drawer__animate">
  <!-- Add some nav elements here-->
</bs-drawer>
<div class="px-4 col-12 col-md-9 col-lg-10 offset-md-3">
  <!-- Main View here -->
  <router-view></router-view>
</div>
...
```

## Contributing

### serve with hot reload at localhost:8080
npm run dev

### distribution build with minification
npm run build

### build the docs into gh-pages
npm run build:docs

### run unit tests
npm run test:unit

## Authors

* **Jason Kroll** - *Initial work* - [vue-bs-drawer](https://github.com/JasonKroll/vue-bs-drawer)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Inspired by and based on the work done by [asyraf9](https://github.com/asyraf9) with the [bootstrap-sidebar](https://github.com/asyraf9/bootstrap-sidebar)
