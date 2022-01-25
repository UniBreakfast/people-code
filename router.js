const router = {
  '#verification': gotoV12n,
  '#day': gotoDay,
}

export default router

import { isCorrect } from './verification.js'

onhashchange = () => {
  const {hash} = location
  const gotoFn = router[hash]

  if (!gotoFn) return

  localStorage.pplCod_screen = hash
  gotoFn()
}

async function gotoV12n() {
  if (!gotoV12n.ran) {
    const greeting = await getGreeting()
    greetText.innerHTML = greeting

    verifyBtn.onclick = async () => {
      const password = pwdFld.value.trim()
      const token = await isCorrect(password)

      if (!token) v12nInformer.innerText = 'Incorrect password.'

      v12nInformer.innerText = 'Verification passed!'
      localStorage.pplCod_token = token
      v12nNav.hidden = false
    }

    v12nNav.onclick = e => {
      const hash = e.target.getAttribute('href')

      if (hash) location.hash = hash
    }

    gotoV12n.ran = true

  } else {
    v12nInformer.innerText = 'Enter your password.'
    v12nNav.hidden = true
  }
}

async function gotoDay() {

}

async function getGreeting() {
  return `
    Welcome to the proto app People Code.<br>
    You should be me, UniBreakfast. Otherwise please go away.<br>
    It's just an app to keep track of my coding sessions with people.
  `
}
