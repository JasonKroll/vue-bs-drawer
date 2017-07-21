<template>
  <div class="bs-drawer" :class="sideClass">
    <div class="bs-drawer__content">
      <div class="bs-drawer__nav-container" :class="`bs-drawer__nav-container-${side} ` + contentClass" :style="{backgroundColor: bg}">
        <slot>

        </slot>
      </div>
      <div v-if="showToggleBtn" class="bs-drawer__btn-container" :class="`bs-drawer__btn-container-${side}`">
        <button class="bs-drawer__btn" :class="hiddenBtnClass" @click="toggleOpen" :style="btnCustomStyle">
          <slot v-if="open" name="open">
            {{btnText}}
          </slot>
          <slot v-else name="closed">
            {{btnText}}
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
          top: this.btnTop + '%'
        }
      }
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
    hiddenBtnClass () {
      return this.isSideBar ? `hidden-${this.sidebar}-up` : ''
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

<style scoped lang='scss'>

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
  .row .bs-drawer.bs-drawer__left.bs-drawer__sm-show .bs-drawer__btn {
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
  .row .bs-drawer.bs-drawer__md-show.bs-drawer__left .bs-drawer__btn {
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
  .row .bs-drawer.bs-drawer__lg-show.bs-drawer__left .bs-drawer__btn {
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
  .row .bs-drawer.bs-drawer__xl-show.bs-drawer__left .bs-drawer__btn {
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

.bs-drawer__btn {
  background: rgba(0, 0, 0, 0.4);
  // text-justify: center;
  color: #eee;
  width: 20px;
  z-index: 1060;
  margin: 0;
  border-radius: 0;
  // border: 0.1rem solid #f5f5f5;
  border: 0;
  padding: 20px 5px;
  font-weight: bold;
  position: absolute;
  transition: all 0.3s ease-out;
  padding: auto;

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
