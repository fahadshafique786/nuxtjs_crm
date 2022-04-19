<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          Junaid Shabbir | Bills
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
            <tr class="table-header">
              <th class="w-1">
                <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices">
              </th>
              <th class="w-1">
                CNIC
              </th>
              <th>NAME</th>
              <th>IBAN</th>
              <th>BALANCE</th>
              <th>ISSUE DATE</th>
              <th>DUE DATE</th>
              <th>PAID DATE</th>
              <th>STATUS</th>
              <th>TOTAL CREDIT TRANSACTIONS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr class="normal">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">3520289639999</span></td>
              <td>Junaid Shabbir</td>
              <td>90000000002</td>
              <td>3018.00</td>
              <td>May 1, 2021 12:00 AM</td>
              <td>May 6, 2021 12:00 AM</td>
              <td>April 6, 2021 4:45 PM</td>
              <td>BALANCE CONVERSION</td>
              <td>4</td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Transactions
                    </a>
                  </div>
                </span>
              </td>
            </tr>

            <tr class="normal">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">3520289639999</span></td>
              <td>Junaid Shabbir</td>
              <td>90000000002</td>
              <td>3018.00</td>
              <td>May 1, 2021 12:00 AM</td>
              <td>May 6, 2021 12:00 AM</td>
              <td>April 6, 2021 4:45 PM</td>
              <td>BALANCE CONVERSION</td>
              <td>4</td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Transactions
                    </a>
                  </div>
                </span>
              </td>
            </tr>

            <tr class="normal">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">3520289639999</span></td>
              <td>Junaid Shabbir</td>
              <td>90000000002</td>
              <td>3018.00</td>
              <td>May 1, 2021 12:00 AM</td>
              <td>May 6, 2021 12:00 AM</td>
              <td>April 6, 2021 4:45 PM</td>
              <td>BALANCE CONVERSION</td>
              <td>4</td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Transactions
                    </a>
                  </div>
                </span>
              </td>
            </tr>

            <tr class="normal">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td><span class="text-muted">3520289639999</span></td>
              <td>Junaid Shabbir</td>
              <td>90000000002</td>
              <td>3018.00</td>
              <td>May 1, 2021 12:00 AM</td>
              <td>May 6, 2021 12:00 AM</td>
              <td>April 6, 2021 4:45 PM</td>
              <td>BALANCE CONVERSION</td>
              <td>4</td>
              <td class="text-end">
                <span class="dropdown">
                  <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                      Transactions
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
      this.$EventBus.$emit('showQuickView', { component: 'CustomerTransactions', title: 'Transactions | Quick View' })
    }
  }
}
</script>
