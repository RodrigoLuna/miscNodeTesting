const axios = require('axios')

let num = 202

const tryUntilSuccess = (index) => {
    return new Promise((resolve) => {
        console.log(index);
        axios.get('https://jsonplaceholder.typicode.com/todos/' + index)
              .then(res => { return resolve(res.data.title) })
              .catch(e => {       
                console.log('Failed to fetch query') 
                return setTimeout(() => resolve(tryUntilSuccess(--num)), 2000);
              })


    })
}

tryUntilSuccess(num).then((data) => { 
  console.log(data)
  console.log('done') 
});
