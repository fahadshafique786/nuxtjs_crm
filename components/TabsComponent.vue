<template>
  <div>
    <vue-tabs-chrome ref="tabs" v-model="tab" :tabs="tabs" />
    <component
    :id="currentTab.key"
    :is="currentTab.component"
    :key="currentTab.key"
    v-for="currentTab in tabs"
    v-bind:class="{ 'd-none': currentTab.key !== tab }" />
  </div>
</template>

<script>
import VueTabsChrome from 'vue-tabs-chrome'

export default {
  components: {
    VueTabsChrome
  },
  data () {
    return {
      tab: 'SearchEngine',
      tabs: [
        {
          label: 'Search',
          key: 'SearchEngine',
          component: 'SearchEngine',
          closable: false,
          favicon: ''
        }
      ]
    }
  },
  mounted () {
    const _this = this
    this.$EventBus.$on('newTab', (tab) => { _this.addTab(tab) })
  },
  methods: {
    addTab (tab) {
      let notExists = true

      this.tabs.forEach(function (item, index) {
        if (item.key === tab.key) {
          notExists = false
        }
      })

      if (notExists) {
        const newTab = {
          key: tab.key,
          label: tab.label,
          component: tab.component,
          closable: tab.closable
        }
        this.$refs.tabs.addTab(newTab)
        this.tab = tab.key
      }
    }
  }
}
</script>

<style>
  .vue-tabs-chrome{
    background-color: #232E3C;
  }
  .tabs-label{
    color: #ffffffb3 !important;
  }
  .tabs-item.active .tabs-label{
    color: #000000b3 !important;
  }
  .tabs-item:hover .tabs-label{
    color: #000000b3 !important;
  }
</style>
