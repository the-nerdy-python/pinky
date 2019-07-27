// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRat = `query GetRat($id: ID!) {
  getRat(id: $id) {
    id
    sex
    status
    size
    bornDate
    tub
  }
}
`;
export const listRats = `query ListRats($filter: ModelRatFilterInput, $limit: Int, $nextToken: String) {
  listRats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sex
      status
      size
      bornDate
      tub
    }
    nextToken
  }
}
`;
export const getLitter = `query GetLitter($id: ID!) {
  getLitter(id: $id) {
    id
    count
    date
    tub
  }
}
`;
export const listLitters = `query ListLitters(
  $filter: ModelLitterFilterInput
  $limit: Int
  $nextToken: String
) {
  listLitters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      count
      date
      tub
    }
    nextToken
  }
}
`;
export const getExpense = `query GetExpense($id: ID!) {
  getExpense(id: $id) {
    id
    expense
    description
    price
    purchaseDate
  }
}
`;
export const listExpenses = `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      expense
      description
      price
      purchaseDate
    }
    nextToken
  }
}
`;
