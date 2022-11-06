// We installed axois, now we just have to import it
import axios from "axios";

// Lodash does not come in with Types, unlike axios.
// We need to find individual types else where. We can find popular repos that would have them

import _ from "lodash";
// To learn what methods we can use, hover over an underscore

// To make a basic get request
axios.get("http://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log('Success')
    console.log(res.data.name)
  })
  .catch((event) => {
    console.log('Error', event)
  })

