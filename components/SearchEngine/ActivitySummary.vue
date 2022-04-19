<template>
  <div :class="[customer_info_show_more ? 'col-sm-12 col-md-5' : 'col-sm-12 col-md-3']">
    <!-- Begin Customer Details -->
    <div class="card mb-2" :class="[customer_info_show_more ? '' : 'card-stacked']">
      <!-- Begin Customer Information -->
      <div class="card-body">
        <div v-b-toggle.customer-activity-summary-1 class="row align-items-center">
          <div class="col-auto">
            <span class="bg-blue text-white avatar" v-html="this.$helper.getIcon(this, 'user', '#ffffff')" />
          </div>
          <div class="col">
            <div class="font-weight-medium">
              Activity Summary
            </div>
            <div class="text-muted">
              3 Products
            </div>
          </div>
        </div>

        <b-collapse id="customer-activity-summary-1">

          <ul class="nav nav-tabs" data-bs-toggle="tabs">
            <li class="nav-item">
              <a href="#tabs-customer-activity-summary-fcbp" class="nav-link active" data-bs-toggle="tab"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                POS</a>
            </li>
            <li class="nav-item">
              <a href="#tabs-customer-activity-summary-fctu" class="nav-link" data-bs-toggle="tab"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                ATM</a>
            </li>
            <li class="nav-item">
              <a href="#tabs-customer-activity-summary-fcib" class="nav-link" data-bs-toggle="tab"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                IBFT</a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane show active" id="tabs-customer-activity-summary-fcbp">
              <div class="row mt-2">
                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12']">
                  <div class="mb-2">
                    <b>Application</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>3690.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>1000.82</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Subscription</b>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Collection</b>
                  </div>
                  <div class="mb-2">
                    Channel Charge Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Outstanding: <strong>0.00</strong>
                  </div>
                </div>

                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12 d-none']">
                  <div class="mb-2">
                    <b>Installment</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>3690.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>1000.82</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Penalty</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>0.00</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tabs-customer-activity-summary-fctu">
              <div class="row mt-2">
                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12']">
                  <div class="mb-2">
                    <b>Application</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>50.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>50.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div>
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Subscription</b>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Collection</b>
                  </div>
                  <div class="mb-2">
                    Channel Charge Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Fed Outstanding: <strong>0.00</strong>
                  </div>
                </div>

                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12 d-none']">
                  <div class="mb-2">
                    <b>Installment</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>50.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>1000.82</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Penalty</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Fed Outstanding: <strong>0.00</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tabs-customer-activity-summary-fcib">
              <div class="row mt-2">
                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12']">
                  <div class="mb-2">
                    <b>Application</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div>
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Subscription</b>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Collection</b>
                  </div>
                  <div class="mb-2">
                    Channel Charge Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Channel Charge Fed Outstanding: <strong>0.00</strong>
                  </div>
                </div>

                <div :class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12 d-none']">
                  <div class="mb-2">
                    <b>Installment</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Charges Fed Outstanding: <strong>0.00</strong>
                  </div>
                  <hr />
                  <div class="mb-2">
                    <b>Penalty</b>
                  </div>
                  <div class="mb-2">
                    Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Outstanding: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Fed Sum: <strong>0.00</strong>
                  </div>
                  <div class="mb-2">
                    Fed Outstanding: <strong>0.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <button type="button" class="btn btn-icon btn-pill btn-bitbucket float-right" title="Expandable" @click="customerInfoShowMore">
                <span v-if="customer_info_show_more" v-html="this.$helper.getIcon(this, 'arrow_narrow_left', '#ffffff')" />
                <span v-if="!customer_info_show_more" v-html="this.$helper.getIcon(this, 'arrow_narrow_right', '#ffffff')" />
              </button>
              <button v-b-tooltip.hover type="button" class="btn btn-icon btn-pill btn-warning float-right mr-1" title="Quick View" @click="quickView">
                <span v-html="this.$helper.getIcon(this, 'eye', '#ffffff')" />
              </button>
            </div>
          </div>
        </b-collapse>
      </div>
    </div><!-- End Customer Information -->

    <div class="card card-sm">
      <!-- Begin Customer Details View -->
      <div class="card-body">
        <div class="row align-items-center" @click="addTab()">
          <div class="col-auto">
            <span class="bg-danger text-white avatar" v-html="this.$helper.getIcon(this, 'list', '#ffffff')" />
          </div>
          <div class="col">
            <div class="font-weight-medium">
              Detailed Summary
            </div>
            <div class="text-muted">
              Junaid Shabbir - 3520289639999
            </div>
          </div>
        </div>
      </div>
    </div><!-- End Customer Quick View -->
  </div><!-- End Customer Details -->
</template>

<style scoped>
  .mb-2 strong{
    float: right;
  }
</style>

<script>
export default {
  props: ['customerCinc'],
  data: () => ({
    customer_info_show_more: false
  }),
  methods: {
    customerInfoShowMore () {
      this.customer_info_show_more = !this.customer_info_show_more
    },
    quickView () {
      this.$EventBus.$emit('showQuickView', { component: 'Customer' })
    },
    addTab () {
      this.$EventBus.$emit('newTab', {
        key: 'Customer',
        label: 'Customer',
        component: 'Customer',
        closable: true
      })
    }
  }
}
</script>
