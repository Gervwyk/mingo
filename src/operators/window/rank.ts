import { Options } from "../../core";
import { AnyVal, RawObject } from "../../types";
import { WindowOperatorInput } from "../pipeline/_internal";
import { rank } from "./_internal";

/** Returns the position of a document in the $setWindowFields stage partition. */
export function $rank(
  obj: RawObject,
  collection: RawObject[],
  expr: WindowOperatorInput,
  options: Options
): AnyVal {
  return rank(obj, collection, expr, options, false /*dense*/);
}
