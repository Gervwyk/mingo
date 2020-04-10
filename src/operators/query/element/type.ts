// Query Element Operators: https://docs.mongodb.com/manual/reference/operator/query-element/

import { createQueryOperator,  $type as __type } from '../../_predicates'

export const $type = createQueryOperator(__type)
