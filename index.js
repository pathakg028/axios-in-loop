const axios = require('axios');

const getTitle = (num) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
    .then(response => {
      return resolve(response.data.title)
    })
    .catch(error => {
      return reject(error.message)
    })
  })
}

const start = async() => {
  for (let num of [1, 2, 3, 4, 5]) {
    await getTitle(num).then((title) => {
      console.log(`num ${num}: ${title}`);
    })
  }
  console.log('Done');
}

start();

//Output 
// ---
// num 1: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// num 2: qui est esse
// num 3: ea molestias quasi exercitationem repellat qui ipsa sit aut
// num 4: eum et est occaecati
// num 5: nesciunt quas odio
// Done