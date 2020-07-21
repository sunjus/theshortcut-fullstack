var currency_unit = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  var change = {
    status: "OPEN",
    change: [],
  };
  // Sort cid from High currency_unit to low
  var cid_sorted = cid
    .slice()
    .sort((a, b) => currency_unit[b[0]] - currency_unit[a[0]]);
  var change_remain_i = Math.floor((cash - price) * 100);
  let should_closed = true;
  for (let [name, value] of cid_sorted) {
    const unit_i = Math.floor(currency_unit[name] * 100);
    const value_i = Math.floor(value * 100);
    const ncoins_has = Math.floor(value_i / unit_i);
    const ncoins_need = Math.floor(change_remain_i / unit_i);
    const change_value_i = Math.min(ncoins_has, ncoins_need) * unit_i;
    change.change.push([name, change_value_i / 100]);
    change_remain_i -= change_value_i;

    if (ncoins_has > ncoins_need) {
      should_closed = false;
    }
  }
  if (change_remain_i > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (should_closed) {
    change.status = "CLOSED";
    change.change = cid;
  } else {
    change.status = "OPEN";
    change.change = change.change.filter((v) => v[1] > 0);
  }
  return change;
}
