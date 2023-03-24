type Customer = {
  birtday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birtday: new Date() }
}

let customer = getCustomer(0)

console.log(customer?.birtday)