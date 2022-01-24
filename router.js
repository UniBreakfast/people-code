export default {
  '#verification': gotoV12n,
}

import { isCorrect } from './verification.js'

async function gotoV12n() {
  if (!gotoV12n.ran) {
    const greeting = await getGreeting()
    greetText.innerHTML = greeting

    verifyBtn.onclick = async () => {
      const password = pwdFld.value.trim()

      if (await isCorrect(password)) {
        v12nInformer.innerText = 'Verification passed!'
        v12nNav.hidden = false
      } else {
        v12nInformer.innerText = 'Incorrect password.'
      }
    }

    gotoV12n.ran = true

  } else {
    v12nInformer.innerText = 'Enter your password.'
    v12nNav.hidden = true
  }
}


async function getGreeting() {
  return `
    Welcome to the proto app People Code.<br>
    You should be me, UniBreakfast. Otherwise please go away.<br>
    I just made this to keep track of my coding sessions with people.
  `
}
