import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function getAllRantsAPI (){
  return request.get('/api/v1/rants');
}

export function addRant (theState) {
  const newRant = {
    rant:theState.rant,
    author:theState.author

    
  }
  return request
      .post('/api/v1/rants').send(newRant)
      .then(response => response.body)
}
