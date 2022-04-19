<template>
  <div :class="[customer_info_show_more ? 'col-sm-12 col-md-5' : 'col-sm-12 col-md-3']">
    <!-- Begin Customer Details -->
    <div class="card mb-2" :class="[customer_info_show_more ? '' : 'card-stacked']">
      <!-- Begin Customer Information -->
      <div class="card-body">
        <div v-b-toggle.customer-transactions-1 class="row align-items-center">
          <div class="col-auto">
            <span class="bg-blue text-white avatar" v-html="this.$helper.getIcon(this, 'user', '#ffffff')" />
          </div>
          <div class="col">
            <div class="font-weight-medium">
              Transactions
            </div>
            <div class="text-muted">
              5 Records
            </div>
          </div>
        </div>

        <b-collapse id="customer-transactions-1">
          <div class="row mt-2">
            <div :class="[customer_info_show_more ? 'col-12' : 'col-12']">
              <div class="table-responsive">
                <table class="table table-vcenter card-table">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Amount</th>
                      <th>Action</th>
                      <th>Date</th>
                      <th>Channel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>345942031220</td>
                      <td class="text-muted">
                        500.00
                      </td>
                      <td class="text-muted">
                        credit
                      </td>
                      <td class="text-muted">
                        2020-12-30
                      </td>
                      <td class="text-muted">
                        atm
                      </td>
                    </tr>
                    <tr>
                      <td>345942031220</td>
                      <td class="text-muted">
                        500.00
                      </td>
                      <td class="text-muted">
                        credit
                      </td>
                      <td class="text-muted">
                        2020-12-30
                      </td>
                      <td class="text-muted">
                        atm
                      </td>
                    </tr>
                    <tr>
                      <td>345942031220</td>
                      <td class="text-muted">
                        500.00
                      </td>
                      <td class="text-muted">
                        credit
                      </td>
                      <td class="text-muted">
                        2020-12-30
                      </td>
                      <td class="text-muted">
                        atm
                      </td>
                    </tr>
                    <tr>
                      <td>345942031220</td>
                      <td class="text-muted">
                        500.00
                      </td>
                      <td class="text-muted">
                        credit
                      </td>
                      <td class="text-muted">
                        2020-12-30
                      </td>
                      <td class="text-muted">
                        atm
                      </td>
                    </tr>
                    <tr>
                      <td>345942031220</td>
                      <td class="text-muted">
                        500.00
                      </td>
                      <td class="text-muted">
                        credit
                      </td>
                      <td class="text-muted">
                        2020-12-30
                      </td>
                      <td class="text-muted">
                        atm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

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
      this.$EventBus.$emit('showQuickView', { component: 'CustomerTransactions' })
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
