<template>
  <div class="main-layout">
    <Navbar />
    <div class="content">
      <div class="page-wrapper">
        <TabsComponent />
        <Nuxt />
      </div>
    </div>
    <ModalsFullScreen />
  </div>
</template>

<script>
// import Navbar from '~/components/Navbar'

export default {
  components: {
  }
}
</script>

<style>
.content{
  margin-top: 0px;
}
</style>
