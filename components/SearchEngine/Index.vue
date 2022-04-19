<template>
  <div>
    <div class="container-fluid">
      <div class="container mt-3">
        <div class="mb-3 col-md-6 ml-auto mr-auto">
          <label class="form-label">Search Customer</label>
          <div class="row g-2">
            <div class="col-auto">
              <div class="form-selectgroup">
                <label class="form-selectgroup-item">
                  <input type="radio" name="icons" value="home" class="form-selectgroup-input" checked="">
                  <span class="form-selectgroup-label"><span v-html="$store.state.svgIcons.getIcon('credit_card','#656d77')" /> Finja Card</span>
                </label>
                <label class="form-selectgroup-item">
                  <input type="radio" name="icons" value="user" class="form-selectgroup-input">
                  <span class="form-selectgroup-label"><span v-html="$store.state.svgIcons.getIcon('link','#656d77')" /> Supply Chain</span>
                </label>
              </div>
            </div>
            <div class="col-sm">
              <input type="text" class="form-control" placeholder="Search for CNIC..." v-model="search_input">
            </div>
          </div>
        </div>

        <div class="mb-3 col-md-6 ml-auto mr-auto" v-if="search_input">
          <div class="card mb-3 position-absolute w-95 z-index9991">
            <div class="card-header">
              <h3 class="card-title">Search Results</h3>
            </div>
            <div class="list-group list-group-flush list-group-hoverable">
              <div class="list-group-item" v-for="item in datalist" :key="item">
                <div class="row align-items-center">
                  <div class="col text-truncate">
                    <a href="#" class="text-body d-block" @click="search">{{ names_datalist[Math.floor(Math.random() * names_datalist.length)] }}</a>
                    <small class="d-block text-muted text-truncate mt-n1">{{ item }} Change deprecated html tags to text decoration classes (#29604)</small>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="list-group-item-actions" v-html="$store.state.svgIcons.getIcon('star','#656d77')"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 dragables-items" v-if="customer_cinc">
          <SearchEngineCustomer :customer-cinc="customer_cinc" class="dragable-item" />
          <SearchEngineBills :customer-cinc="customer_cinc" class="dragable-item" />
          <SearchEngineActivitySummary :customer-cinc="customer_cinc" class="dragable-item" />
          <SearchEngineTransactions :customer-cinc="customer_cinc" class="dragable-item" />
        </div>
    </div>
  </div>
</template>

<style>
  .scrolling-wrapper{
    overflow-x: auto;
  }
</style>

<script>
export default {
  data: () => ({
    search_input: '',
    search_datalist: [
      '35202-1111111-1',
      '35202-1211111-2',
      '35202-1231111-3',
      '35202-1234111-4',
      '35202-1234511-5',
      '35202-1234561-6',
      '35202-1234567-7',
      '35201-1111111-1',
      '35201-1211111-2',
      '35201-1231111-3',
      '35201-1234111-4',
      '35201-1234511-5',
      '35201-1234561-6',
      '35201-1234567-7',
      '35203-1111111-1',
      '35203-1211111-2',
      '35203-1231111-3',
      '35203-1234111-4',
      '35203-1234511-5',
      '35203-1234561-6',
      '35203-1234567-7',
      '35204-1111111-1',
      '35204-1211111-2',
      '35204-1231111-3',
      '35204-12341114',
      '35204-1234511-5',
      '35204-1234561-6',
      '35204-1234567-7',
      '35205-1111111-1',
      '35205-1211111-2',
      '35205-1231111-3',
      '35205-1234111-4',
      '35205-1234511-5',
      '35205-1234561-6',
      '35205-1234567-7',
      '35206-1111111-1',
      '35206-1211111-2',
      '35206-1231111-3',
      '35206-1234111-4',
      '35206-1234511-5',
      '35206-1234561-6',
      '35206-1234567-7',
      '35207-1111111-1',
      '35207-1211111-2',
      '35207-1231111-3',
      '35207-1234111-4',
      '35207-1234511-5',
      '35207-1234561-6',
      '35207-1234567-7',
      '35208-1111111-1',
      '35208-1211111-2',
      '35208-1231111-3',
      '35208-1234111-4',
      '35208-1234511-5',
      '35208-1234561-6',
      '35208-1234567-7',
      '35209-1111111-1',
      '35209-1211111-2',
      '35209-1231111-3',
      '35209-1234111-4',
      '35209-1234511-5',
      '35209-1234561-6',
      '35209-1234567-7'
    ],
    datalist: [],
    names_datalist: [
      'Melba Schwartz',
      'Debbie Bowers',
      'Jamie Fisher',
      'Travis Reed',
      'Roderick Erickson',
      'Brenda Fuller',
      'Jorge Brooks',
      'Felicia Pope',
      'Lucas Todd',
      'Taylor Foster'
    ],
    customer_cinc: ''
  }),
  methods: {
    search () {
      this.customer_cinc = this.search_input
      this.search_input = ''
      setTimeout(function () {
        const sliders = document.querySelectorAll('.dragables-items')
        for (let i = 0; i < sliders.length; i++) {
          const slider = sliders[i]
          let isDown = false
          let startX
          let scrollLeft

          slider.addEventListener('mousedown', (e) => {
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
          })
          slider.addEventListener('mouseleave', () => {
            isDown = false
            slider.classList.remove('active')
          })
          slider.addEventListener('mouseup', () => {
            isDown = false
            slider.classList.remove('active')
          })
          slider.addEventListener('mousemove', (e) => {
            if (!isDown) { return }
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 3
            slider.scrollLeft = scrollLeft - walk
            // console.log(walk)
          })
        }
      }, 1000)
    }
  },
  watch: {
    search_input () {
      const _this = this
      this.datalist = []
      this.search_datalist.forEach(function (item, index) {
        if (item.includes(_this.search_input) && _this.datalist.length < 5) {
          _this.datalist.push(item)
        }
      })
    }
  }
}
</script>
