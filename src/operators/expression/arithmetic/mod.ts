// Arithmetic Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#arithmetic-expression-operators

import { computeValue, Options } from "../../../core";
import { AnyVal, RawObject } from "../../../types";

/**
 * Takes two numbers and calculates the modulo of the first number divided by the second.
 *
 * @param obj
 * @param expr
 * @returns {number}
 */
export function $mod(obj: RawObject, expr: AnyVal, options: Options): number {
  const args = computeValue(obj, expr, null, options) as number[];
  return args[0] % args[1];
}
