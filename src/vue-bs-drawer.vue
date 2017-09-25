<template>
  <div class="bs-drawer" :class="sideClass">
    <div class="bs-drawer__content">
      <div class="bs-drawer__nav-container" :class="`bs-drawer__nav-container-${side} ` + contentClass" :style="{backgroundColor: bg}">
        <slot>

        </slot>
      </div>
      <div v-if="showToggleBtn" class="bs-drawer__btn-container" :class="`bs-drawer__btn-container-${side}`">
        <button :class="[btnClass, open ? btnOpenClass : '' ]"  @click="toggleOpen" :style="btnCustomStyle">
          <slot v-if="open" name="opened">
              <svg class="bs-drawer__svg" width="11.428571428571429"
                height="16"
                viewBox="0 0 1280 1792">
                  <path d="M1171 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path> 
              </svg>
          </slot>
          <slot v-else name="closed">
              <svg class="bs-drawer__svg" width="11.428571428571429"
                height="16"
                viewBox="0 0 1280 1792">
                  <path d="M1171 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path> 
              </svg>
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-bs-drawer',
  data () {
    return {
      open: this.showDrawer,
      sidebarSizes: ['sm', 'md', 'lg']
    }
  },
  props: {
    side: {
      type: String,
      default: 'left'
    },
    showDrawer: {
      type: Boolean,
      default: true
    },
    bg: {
      type: String,
      default: '#f5f5f5'
    },
    btnTop: {
      type: String,
      default: '45%'
    },
    btnStyle: {
      type: Object,
      default () {
        return {
          top: this.btnTop
        }
      }
    },
    btnMainClass: {
      type: String,
      default: 'bs-drawer__btn'
    },
    btnOpenClass: {
      type: String,
      default: 'bs-drawer__btn-open'
    },
    showToggleBtn: {
      type: Boolean,
      default: true
    },
    sidebar: {
      type: String,
      validator (value) {
        return ['sm', 'md', 'lg'].indexOf(value) > -1
      }
    }
  },
  methods: {
    toggleOpen () {
      this.open = !this.open
    },
    openDrawer () {
      this.open = true
    },
    closeDrawer () {
      this.open = false
    }
  },
  computed: {
    isSideBar () {
      return this.sidebarSizes.indexOf(this.sidebar) > -1
    },
    hiddenContentClass () {
      return `hidden-${this.sidebar}-down`
    },
    btnSideClass () {
      return `${this.btnMainClass}-${this.side}`
    },
    btnClass () {
      // .d-none.d-md-block.d-xl-none (shows the element only on medium and large devices)
      var hiddenClass = 'd-none d-block'
      switch (this.sidebar) {
        case 'sm':
          hiddenClass = hiddenClass + ' d-sm-none'
          break
        case 'md':
          hiddenClass = hiddenClass + ' d-md-none'
          break
        case 'lg':
          hiddenClass = hiddenClass + ' d-lg-none'
          break
        case 'xl':
          hiddenClass = hiddenClass + ' d-xl-none'
          break
        default:
          break
      }

      return this.isSideBar ? `${this.btnMainClass} ${hiddenClass} hidden-${this.sidebar}-up ${this.btnSideClass}` : `${this.btnMainClass} ${this.btnSideClass}`
    },
    contentClass () {
      var show = `bs-drawer__${this.sidebar}-show`
      return this.isSideBar
        ? `${show}`
        : ''
    },
    sideClass () {
      var side = `${this.contentClass} bs-drawer__${this.side}`
      return this.open ? `${side} bs-drawer__drawer-open` : side
    },
    btnText () {
      if (this.customText) {
        return this.customText
      } else {
        if (this.side === 'left') {
          return this.open ? '<' : '>'
        } else {
          return this.open ? '>' : '<'
        }
      }
    },
    btnCustomStyle () {
      var style = this.btnStyle
      if (Object.keys(this.btnStyle).indexOf('top') < 0) {
        this.btnTop
          ? style.top = this.btnTop
          : '45%'
      }
      return style
    }
  },
  watch: {
    open (newValue) {
      newValue
       ? this.$emit('bs-drawer-opened')
       : this.$emit('bs-drawer-closed')
    }
  }
}
</script>

<style lang='scss'>

.rotate {
  -webkit-transform: rotate(180deg) translate(5px, 0);
  -ms-transform: rotate(180deg) translate(5px, 0);
  -o-transform: rotate(180deg) translate(5px, 0);
  -moz-transform: rotate(180deg) translate(5px, 0);
  transform: rotate(180deg) translate(5px, 0);  
}

@media (min-width: 576px) {
  .row .bs-drawer__sm-show.bs-drawer__left.bs-drawer__sm-show {
      left: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }

  /*right sidebar is untested */
  .row .bs-drawer.bs-drawer__right.bs-drawer__sm-show {
      right: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }
}

/* medium screen sizes*/ 
@media (min-width: 768px) {
  .row .bs-drawer__md-show.bs-drawer__left {
      left: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }

  .row .bs-drawer.bs-drawer__md-show.bs-drawer__right {
      right: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }
}

/* large screen sizes*/ 
@media (min-width: 992px) {
  .row .bs-drawer__lg-show.bs-drawer__left {
      left: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }

  .row .bs-drawer.bs-drawer__lg-show.bs-drawer__right {
      right: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }
}

/* extra large screen sizes*/ 
@media (min-width: 1200px) {
  .row .bs-drawer__xl-show.bs-drawer__left {
      left: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }

  .row .bs-drawer.bs-drawer__xl-show.bs-drawer__right {
      right: 0;
      -webkit-transform: translate(0,0);
      -ms-transform: translate(0,0);
      -o-transform: translate(0,0);
      -moz-transform: translate(0,0);
      transform: translate(0,0);
  }
}

*:focus {
  outline: 0 !important;
}
.bs-drawer {
  position: fixed;
  height: 100%;
  min-height: 100%;
  top: 0px;
  bottom: 0;
  z-index: 1001;
  padding-bottom: 0px;
}

.bs-drawer__content {
  height: 100%;
  width: 100%;
}

.bs-drawer__nav-container {
  z-index: 1000;
  height: 100%;
  width: calc(100% - 5px);
  overflow: auto;
}

.bs-drawer__nav-container-left {
  float: left;
  margin-left: -15px;
  // border-right: 1px solid #eee;
}

.bs-drawer__nav-container-right {
  float: right;
  margin-right: -15px;
  // border-left: 1px solid #eee;
}

////////////////
//Button Styles
//////////////// 
.bs-drawer__btn {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  border-radius: 0;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
  background: rgba(4, 80, 0, 0.4);
}

.bs-drawer__btn {
  .bs-drawer__svg {
    position: absolute;
    fill: #fff;
    top: 20%;
    left: 10%;
    width: 80%;
    height: 60%;
    transition: all 0.5s ease-out;
  }
}

.bs-drawer__btn-left {
  border-radius: 0;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  .bs-drawer__svg {
    -webkit-transform: rotate(180deg) translate(1px, 0);
    -ms-transform: rotate(180deg) translate(1px, 0);
    -o-transform: rotate(180deg) translate(1px, 0);
    -moz-transform: rotate(180deg) translate(1px, 0);
    transform: rotate(180deg) translate(1px, 0);  
    width: 80%;
    height: 60%;
  }
}

.bs-drawer__btn-left.bs-drawer__btn-open {
  .bs-drawer__svg {
    -webkit-transform: rotate(0deg) translate(-2px, 0);
    -ms-transform: rotate(0deg) translate(-2px, 0);
    -o-transform: rotate(0deg) translate(-2px, 0);
    -moz-transform: rotate(0deg) translate(-2px, 0);
    transform: rotate(0deg) translate(-2px, 0);
    width: 80%;
    height: 60%;
  }
}
.bs-drawer__btn-right.bs-drawer__btn-open {
  .bs-drawer__svg {
    -webkit-transform: rotate(180deg) translate(-2px, 0);
    -ms-transform: rotate(180deg) translate(-2px, 0);
    -o-transform: rotate(180deg) translate(-2px, 0);
    -moz-transform: rotate(180deg) translate(-2px, 0);
    transform: rotate(180deg) translate(-2px, 0);
    width: 80%;
    height: 60%;
  }
}

.bs-drawer__btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-out;
}

.bs-drawer__btn-container {
  z-index: 1050;
  background-color: transparent;
  width: 20px;
  height: 100%;
}

.bs-drawer__btn-container-left {
  float: right;
}

.bs-drawer__btn-container-right {
  float: left;
  width: auto;
}

.bs-drawer__animate {
  -webkit-transition: -webkit-transform 300ms ease;
  -moz-transition: -moz-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
}

.bs-drawer.bs-drawer__left {
  display: block;
  overflow: auto;
  left: 0;
  -webkit-transform: translate(-webkit-calc(-100% + 35px),0);
  -moz-transform: translate(-moz-calc(-100% + 35px),0);
  transform: translateX(-100%) translateX(35px);
}

.bs-drawer.bs-drawer__left.bs-drawer__drawer-open {
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
}

.bs-drawer.bs-drawer__right {
  right: 0;
  -webkit-transform: translate(-webkit-calc(100% - 35px),0);
  -moz-transform: translate(-moz-calc(100% - 35px),0);
  transform: translateX(100%) translateX(-35px);
}

.bs-drawer.bs-drawer__right.bs-drawer__drawer-open {
  right: 0;
  -webkit-transform: translate(0,0);
  -moz-transform: translate(0,0);
  -ms-transform: translate(0,0);
  -o-transform: translate(0,0);
  transform: translate(0,0);
}

</style>
