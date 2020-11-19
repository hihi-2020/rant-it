import request from 'superagent'

const rootUrl = '/api/v1'

// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }

export function getAllRantsAPI (){
  return request.get('/api/v1/rants')
  .then(res => res.body)
}

export function addRantAPI (theState) {
  console.log('we got to the api file!!')
  console.log(new Date().toUTCString(+13))
  const newRant = {
    rant:theState.rant,
    author:theState.author,
    title:theState.title,
    date: new Date().toUTCString(+13)

    
  }
  return request
      .post('/api/v1/rants').send(newRant)
      .then(response => response.body)
}
