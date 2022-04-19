<template>
  <div>
    <div class="quickview" :class="{'d-none': !quickview_display}">
      <div class="modal-header remove-border-radius"><!-- Begin Modal Header -->
        <span class="pointer" v-html="this.$helper.getIcon(this,'arrow_narrow_left','#000000')" @click="backQuickView"></span>
        <h5 class="modal-title">{{ quickview_display_title }}</h5>
        <span class="pointer" v-html="this.$helper.getIcon(this,'x','#000000')" @click="closeQuickView"></span>
      </div><!-- End Modal Header -->
        <div class="quickview-body"><!-- Begin Modal Body -->
          <div v-for="screen in quickview_screens" :key="screen.component" :class="{ 'd-none': !screen.isActive }">
          <component :is="screen.component"></component>
        </div><!-- End Modal Body -->
      </div>
    </div>
  </div>
</template>

<style scoped>
  .quickview{
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: #f4f6fa;
    z-index: 1000;
  }
  .quickview-body{
    width: 100%;
    height: 92%;
    overflow: auto;
    padding: 0;
  }
  .remove-border-radius{
    border-radius: 0px;
  }
  .pointer{
    cursor: pointer;
  }
</style>

<script>
export default {
  data: () => ({
    quickview_display: false,
    quickview_display_title: 'Quick View',
    quickview_screens: []
  }),
  methods: {
    showQuickView (args) {
      this.quickview_display = true

      const component = {
        component: args.component,
        title: args.title,
        isActive: false
      }

      let checkIfExists = false
      for (let counter = 0; counter < this.quickview_screens.length; counter++) {
        if (this.quickview_screens[counter].component === args.component) {
          checkIfExists = true
        }
      }

      if (!checkIfExists) {
        this.quickview_screens.push(component)
      }

      for (let counter = 0; counter < this.quickview_screens.length; counter++) {
        if (this.quickview_screens[counter].component === args.component) {
          this.quickview_screens[counter].isActive = true
          this.changeQuickViewTitle((this.quickview_screens[counter].title))
          console.log(this.quickview_screens[counter].title)
          console.log(this.quickview_display_title)
          console.log(args)
        } else {
          this.quickview_screens[counter].isActive = false
        }
      }
    },
    closeQuickView () {
      this.quickview_screens = []
      this.quickview_display = false
    },
    backQuickView () {
      this.quickview_screens.pop()
      if (this.quickview_screens.length) {
        this.quickview_screens[(this.quickview_screens.length - 1)].isActive = true
        this.changeQuickViewTitle((this.quickview_screens[(this.quickview_screens.length - 1)].title))
      } else {
        this.quickview_display = false
      }
    },
    changeQuickViewTitle (title = null) {
      this.quickview_display_title = (title) ?? 'Quick View'
    }
  },
  mounted () {
    const _this = this
    this.$EventBus.$on('showQuickView', (args) => { _this.showQuickView(args) })
  }
}
</script>
