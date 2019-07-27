// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRat = `mutation CreateRat($input: CreateRatInput!) {
  createRat(input: $input) {
    id
    sex
    status
    size
    bornDate
    tub
  }
}
`;
export const updateRat = `mutation UpdateRat($input: UpdateRatInput!) {
  updateRat(input: $input) {
    id
    sex
    status
    size
    bornDate
    tub
  }
}
`;
export const deleteRat = `mutation DeleteRat($input: DeleteRatInput!) {
  deleteRat(input: $input) {
    id
    sex
    status
    size
    bornDate
    tub
  }
}
`;
export const createLitter = `mutation CreateLitter($input: CreateLitterInput!) {
  createLitter(input: $input) {
    id
    count
    date
    tub
  }
}
`;
export const updateLitter = `mutation UpdateLitter($input: UpdateLitterInput!) {
  updateLitter(input: $input) {
    id
    count
    date
    tub
  }
}
`;
export const deleteLitter = `mutation DeleteLitter($input: DeleteLitterInput!) {
  deleteLitter(input: $input) {
    id
    count
    date
    tub
  }
}
`;
export const createExpense = `mutation CreateExpense($input: CreateExpenseInput!) {
  createExpense(input: $input) {
    id
    expense
    description
    price
    purchaseDate
  }
}
`;
export const updateExpense = `mutation UpdateExpense($input: UpdateExpenseInput!) {
  updateExpense(input: $input) {
    id
    expense
    description
    price
    purchaseDate
  }
}
`;
export const deleteExpense = `mutation DeleteExpense($input: DeleteExpenseInput!) {
  deleteExpense(input: $input) {
    id
    expense
    description
    price
    purchaseDate
  }
}
`;
