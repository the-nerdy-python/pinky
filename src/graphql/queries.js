// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRat = `query GetRat($id: ID!) {
  getRat(id: $id) {
    id
    sex
    status
    size
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
    }
    nextToken
  }
}
`;
