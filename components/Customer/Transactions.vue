<template>
  <div>
    <div class="card background-color-azure">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <dl class="row">
              <dt class="col-5">
                Name:
              </dt>
              <dd class="col-7">
                Junaid Shabbir
              </dd>
              <dt class="col-5">
                IBAN:
              </dt>
              <dd class="col-7">
                90000000002
              </dd>
              <dt class="col-5">
                Balance:
              </dt>
              <dd class="col-7">
                3018.00
              </dd>
              <dt class="col-5">
                Balance Outstanding:
              </dt>
              <dd class="col-7">
                0.00
              </dd>
              <dt class="col-5">
                Total Charges:
              </dt>
              <dd class="col-7">
                518.00
              </dd>
            </dl>
          </div>
          <div class="col-sm-12 col-md-4">
            <dl class="row">
              <dt class="col-5">
                Month:
              </dt>
              <dd class="col-7">
                Mar - Apr
              </dd>
              <dt class="col-5">
                Issue Date:
              </dt>
              <dd class="col-7">
                May 1, 2021
              </dd>
              <dt class="col-5">
                Due Date:
              </dt>
              <dd class="col-7">
                May 6, 2021
              </dd>
              <dt class="col-5">
                Total Charges Outstanding:
              </dt>
              <dd class="col-7">
                0.00
              </dd>
            </dl>
          </div>
          <div class="col-sm-12 col-md-4">
            <dl class="row">
              <dt class="col-5">
                Total Penalty:
              </dt>
              <dd class="col-7">
                0.00
              </dd>
              <dt class="col-5">
                Total Penalty Outstanding:
              </dt>
              <dd class="col-7">
                0.00
              </dd>
              <dt class="col-5">
                Total Credit:
              </dt>
              <dd class="col-7">
                3018.00
              </dd>
              <dt class="col-5">
                Total Debit:
              </dt>
              <dd class="col-7">
                3018.00
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body border-bottom py-3">
        <div class="d-md-flex">
          <div class="text-muted">
            Show
            <div class="mx-2 d-inline-block">
              <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
            </div>
            entries |
          </div>
          <div class="pl-1 pr-1">
            <span class="dropdown">
              <button class="btn btn-sm dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="javascript:void(0)" @click="quickView">
                  Transactions
                </a>
              </div>
            </span>
          </div>
          <div class="ms-auto text-muted">
            | Search:
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
              <th class="text-nowrap">
                Application ID
              </th>
              <th class="text-nowrap">
                Action
              </th>
              <th class="text-nowrap">
                Transaction Date
              </th>
              <th class="text-nowrap">
                Description
              </th>
              <th class="text-nowrap">
                Amount
              </th>
              <th class="text-nowrap">
                Type
              </th>
              <th class="text-nowrap">
                Code
              </th>
              <th class="text-nowrap">
                Channel
              </th>
              <th class="text-nowrap">
                Stan
              </th>
              <th class="text-nowrap">
                Transaction ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="credit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                CREDIT
              </td>
              <td>2021-04-05 16:43:01</td>
              <td>Cash Withdrawal At ATM | Basics Zafar Ali Road PK</td>
              <td>1000.00</td>
              <td>Issuance</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>189415683887</td>
            </tr>
            <tr class="credit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                CREDIT
              </td>
              <td>2021-04-05 16:43:01</td>
              <td>ATM Transaction Fee Payable To FLSL For ATM | Basics Zafar Ali Road PK</td>
              <td>18.00</td>
              <td>Charge</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>784901500323</td>
            </tr>
            <tr class="credit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                CREDIT
              </td>
              <td>2021-04-05 16:43:01</td>
              <td>FLSL Service Fee Payable To FLSL For ATM | Basics Zafar Ali Road PK</td>
              <td>500.00</td>
              <td>Charge</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>971197029928</td>
            </tr>
            <tr class="credit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>3</td>
              <td>
                CREDIT
              </td>
              <td>2021-04-05 16:43:07</td>
              <td>Paid To POS | Lahore</td>
              <td>1500.00</td>
              <td>Issuance</td>
              <td>Fcap</td>
              <td>pos</td>
              <td>286313994170</td>
              <td>312172230656</td>
            </tr>
            <tr class="debit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                DEBIT
              </td>
              <td>2021-04-05 16:45:42</td>
              <td>Repayment | 189415683887</td>
              <td>151.00</td>
              <td>Issuance</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>952182574334</td>
            </tr>
            <tr class="debit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                DEBIT
              </td>
              <td>2021-04-05 16:45:45</td>
              <td>Converted To EMI | 107260454320</td>
              <td>849.00</td>
              <td>Issuance</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>107260454320</td>
            </tr>
            <tr class="debit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                DEBIT
              </td>
              <td>2021-04-05 16:45:45</td>
              <td>Converted To EMI | 115563662968</td>
              <td>18.00</td>
              <td>Charge</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>115563662968</td>
            </tr>
            <tr class="debit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>2</td>
              <td>
                DEBIT
              </td>
              <td>2021-04-05 16:45:45</td>
              <td>Converted To EMI | 156473239072</td>
              <td>500.00</td>
              <td>Charge</td>
              <td>Fclc</td>
              <td>atm</td>
              <td>286313994170</td>
              <td>156473239072</td>
            </tr>
            <tr class="debit">
              <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
              <td>3</td>
              <td>
                DEBIT
              </td>
              <td>2021-04-05 16:45:45</td>
              <td>Converted To EMI | 368907551031</td>
              <td>1500.00</td>
              <td>Issuance</td>
              <td>Fcap</td>
              <td>pos</td>
              <td>724929458946</td>
              <td>368907551031</td>
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
