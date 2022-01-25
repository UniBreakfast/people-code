import router from './router.js'

enter()

async function enter() {
  const token = localStorage.pplCod_token

  if (!token) router[location.hash = '#verification']()

  else if (await isValid(token) != true) location.hash = '#verification'

  else if (location.hash) onhashchange()

  else router[location.hash = '#day']()

  /*
  if don't have token go to verify
  else if token is invalid go to verify
  else if location hash go there
  else if remember last scr go there
  else go to day screen
  */
}

async function isValid(token) {
  const correctToken = 'q1w2e3r4t5'

  return token === correctToken
}
