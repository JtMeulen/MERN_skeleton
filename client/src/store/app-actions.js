export const addClick = (amount) => {
  return {
    type: 'ADD_CLICK',
    amount: amount
  }
}

export const substractClick = (amount) => {
  return {
    type: 'SUBSTRACT_CLICK',
    amount: amount
  }
}
