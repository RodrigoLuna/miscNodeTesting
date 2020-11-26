const axios = require('axios')

let fuckingData = null
let num = 210

const tryUntilSuccess = (index) => {
    return new Promise((resolve) => {
        console.log(index);

        axios.get('https://jsonplaceholder.typicode.com/todos/' + index)
              .then(res => { 
                fuckingData = res.data                 
              })
              .catch(e => {        
                if (e.response) {
                  console.log(e.response.status)
                } else if (e.request) {
                  console.log(e.request)
                } else {
                  console.error('Error:', e.message);
                }
              })


        if (fuckingData === null) {
            return setTimeout(() => resolve(tryUntilSuccess(--num)), 2000);
        } else {
            return resolve()
        }
    })
}

tryUntilSuccess(num).then(() => console.log('done'));
