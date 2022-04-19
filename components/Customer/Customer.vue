<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          Junaid Shabbir | Transactions
        </h3>
      </div>
      <div class="card-body border-bottom py-3">
        <div class="d-flex">
          <div class="text-muted">
            Show
            <div class="mx-2 d-inline-block">
              <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
            </div>
            entries
          </div>
          <div class="ms-auto text-muted">
            Search:
            <div class="ms-2 d-inline-block">
              <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
            </div>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th class="w-1">
                <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices">
              </th>
              <th class="w-1">
                No. <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-sm text-dark icon-thick"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                /><polyline points="6 15 12 9 18 15" /></svg>
              </th>
              <th>Narration</th>
              <th>Channel</th>
              <th>CNIC</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">374795376530</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">Cash Withdrawal at ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>1000.00</td>
              <td>
                15 Dec 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">369148206002</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">ATM Transaction Fee payable to FLSL for  ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>1200.00</td>
              <td>
                12 Apr 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">143835507967</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">FLSL Service Fee payable to FLSL for  ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>534.00</td>
              <td>
                23 Oct 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">832081082995</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">Paid to POS | lahore</a></td>
              <td>
                ATM
              </td>
              <td>
                3520289639999
              </td>
              <td>1500.00</td>
              <td>
                2 Sep 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
                        <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">374795376530</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">Cash Withdrawal at ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>1000.00</td>
              <td>
                15 Dec 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">369148206002</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">ATM Transaction Fee payable to FLSL for  ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>1200.00</td>
              <td>
                12 Apr 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">143835507967</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">FLSL Service Fee payable to FLSL for  ATM | Basics Zafar Ali Road PK</a></td>
              <td>
                POS
              </td>
              <td>
                3520289639999
              </td>
              <td>534.00</td>
              <td>
                23 Oct 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
            <tr>
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">832081082995</span></td>
              <td><a href="invoice.html" class="text-reset" tabindex="-1">Paid to POS | lahore</a></td>
              <td>
                ATM
              </td>
              <td>
                3520289639999
              </td>
              <td>1500.00</td>
              <td>
                2 Sep 2017
              </td>
              <td>
                Credit
              </td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Invoice
                    </a>
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer d-flex align-items-center">
        <p class="m-0 text-muted">
          Showing <span>1</span> to <span>8</span> of <span>16</span> entries
        </p>
        <ul class="pagination m-0 ms-auto">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              /><polyline points="15 6 9 12 15 18" /></svg>
              prev
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              /><polyline points="9 6 15 12 9 18" /></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    quickView () {
      this.$EventBus.$emit('showQuickView', { component: 'CustomerBill' })
    }
  }
}
</script>
