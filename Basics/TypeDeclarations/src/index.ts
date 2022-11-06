// We installed axois, now we just have to import it
import axios from "axios";

// To make a basic get request
axios.get("http://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log('Success')
    console.log(res.data.name)
  })
  .catch((event) => {
    console.log('Error', event)
  })

