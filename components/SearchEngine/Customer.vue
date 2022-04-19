<template>
  <div v-bind:class="[customer_info_show_more ? 'col-sm-12 col-md-5' : 'col-sm-12 col-md-3']"><!-- Begin Customer Details -->
    <div class="card mb-2" v-bind:class="[customer_info_show_more ? '' : 'card-stacked']"><!-- Begin Customer Information -->
      <div class="card-body">
        <div class="row align-items-center" v-b-toggle.customer-info-1>
          <div class="col-auto">
            <span class="bg-blue text-white avatar" v-html="this.$helper.getIcon(this, 'user', '#ffffff')"></span>
          </div>
          <div class="col">
            <div class="font-weight-medium">
              Basic Information
            </div>
            <div class="text-muted">
              Junaid Shabbir - 3520289639999
            </div>
          </div>
        </div>

        <b-collapse id="customer-info-1">
          <div class="row mt-2">
            <div v-bind:class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12']">

              <div class="mb-2">First Name: <strong>Junaid</strong></div>
              <div class="mb-2">Last Name: <strong>Shabbir</strong></div>
              <div class="mb-2">Full Name: <strong>Junaid Shabbir</strong></div>
              <div class="mb-2">Father Name: <strong>Shabbir Ahmad</strong></div>
              <div class="mb-2">Husband Name: <strong>----</strong></div>
              <div class="mb-2">CNIC: <strong>3520289639999</strong></div>
              <div class="mb-2">CNIC Issue Date: <strong>2019-11-14</strong></div>
              <div class="mb-2">CNIC Expiry: <strong>2029-11-14</strong></div>
              <div class="mb-2">IBAN: <strong>90000000002</strong></div>
              <div class="mb-2">Current Address: <strong>----</strong></div>
              <div class="mb-2">Permanent Address: <strong>House 389, Hussain Block, Bismillah Housing Scheme, Manawan Road Lahore.</strong></div>
              <div class="mb-2">Tags: <strong>Organic</strong></div>
              <div class="mb-2">Billing Cycle: <strong>30</strong></div>

            </div>

            <div v-bind:class="[customer_info_show_more ? 'col-sm-12 col-md-6' : 'col-12 d-none']">

              <div class="mb-2">Profile: <strong>Employee</strong></div>
              <div class="mb-2">City: <strong>LAHORE</strong></div>
              <div class="mb-2">District: <strong>----</strong></div>
              <div class="mb-2">DOB: <strong>1991-07-28</strong></div>
              <div class="mb-2">NTN: <strong>----</strong></div>
              <div class="mb-2">Tax Filer: <strong><span v-html="this.$helper.getIcon(this, 'x', '#ff2825')"></span></strong></div>
              <div class="mb-2">CB ECIB: <strong><span v-html="this.$helper.getIcon(this, 'x', '#ff2825')"></span></strong></div>
              <div class="mb-2">CB Datacheck: <strong><span v-html="this.$helper.getIcon(this, 'x', '#ff2825')"></span></strong></div>
              <div class="mb-2">CB Verification Interval: <strong>3month</strong></div>
              <div class="mb-2">CB Verification Threshold: <strong>----</strong></div>
              <div class="mb-2">Last Verified By: <strong>----</strong></div>
              <div class="mb-2">Last Verified At: <strong>----</strong></div>
              <div class="mb-2">Status: <strong><span v-html="this.$helper.getIcon(this, 'check', '#000000')"></span></strong></div>

            </div>

            <div class="col-12">
              <button type="button" class="btn btn-icon btn-pill btn-bitbucket float-right" @click="customerInfoShowMore" title="Expandable">
                <span v-if="customer_info_show_more" v-html="this.$helper.getIcon(this, 'arrow_narrow_left', '#ffffff')"></span>
                <span v-if="!customer_info_show_more" v-html="this.$helper.getIcon(this, 'arrow_narrow_right', '#ffffff')"></span>
              </button>
              <button type="button" class="btn btn-icon btn-pill btn-warning float-right mr-1" @click="quickView" v-b-tooltip.hover title="Quick View">
                <span v-html="this.$helper.getIcon(this, 'eye', '#ffffff')"></span>
              </button>
            </div>
          </div>
        </b-collapse>

      </div>
    </div><!-- End Customer Information -->

    <div class="card card-sm"><!-- Begin Customer Details View -->
      <div class="card-body">
        <div class="row align-items-center" @click="addTab()">
          <div class="col-auto">
            <span class="bg-danger text-white avatar" v-html="this.$helper.getIcon(this, 'list', '#ffffff')"></span>
          </div>
          <div class="col">
            <div class="font-weight-medium">
              Detailed Information
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
