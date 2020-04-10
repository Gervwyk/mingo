// Query Logical Operators: https://docs.mongodb.com/manual/reference/operator/query-logical/

import { assert, isArray, Callback } from '../../../util'
import { Options } from '../../../core'
import { $or } from './or'


/**
 * Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
 *
 * @param selector
 * @param value
 * @returns {Function}
 */
export function $nor(selector: string, value: any, options: Options): Callback<boolean> {
  assert(isArray(value), 'Invalid expression. $nor expects value to be an Array')
  let f: Callback<boolean> = $or('$or', value, options)
  return (obj: any) => !f(obj)
}
