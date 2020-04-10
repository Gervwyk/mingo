// Query Evaluation Operators: https://docs.mongodb.com/manual/reference/operator/query-evaluation/

import { computeValue, Options } from '../../../core'
import { Callback } from '../../../util'

/**
 * Allows the use of aggregation expressions within the query language.
 *
 * @param selector
 * @param value
 * @returns {Function}
 */
export function $expr(selector: string, value: any, options: Options): Callback<boolean> {
  return obj => computeValue(obj, value, null, options)
}