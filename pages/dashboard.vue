<template>
  <div>
    <h1 style="margin-top: 1000px">Dashboard</h1>
    <button @click="addTab()">
      Add Tab
    </button>
    <button @click="toggleNavbar()">
      Toggle Navbar
    </button>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Dashboard'
  },
  methods: {
    addTab () {
      this.$EventBus.$emit('newTab', {
        key: 'Customer',
        label: 'Customer',
        component: 'Customer',
        closable: true
      })
    },
    toggleNavbar () {
      this.$EventBus.$emit('toggleNavbar', {})
    }
  }
}
</script>
