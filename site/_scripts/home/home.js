// divide will be tree-shaken by rollup, and this comment removed
import { multiply } from "../modules/_math-helpers"

const product = multiply(3, 8)

console.log(`I did it! Three times eight is ${product}`)
