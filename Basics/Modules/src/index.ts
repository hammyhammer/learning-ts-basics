// You do not have to import functions from other files to use them in other files in TS

// If we export on a ts file, we need to do the following below.
// ** JS instead of TS **
import { add, sample, pi } from "./utils.js"
import User from './user.js'
add(1, 3)