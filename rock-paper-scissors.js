async function playRPSround() {
  const choiceOfPlayer = chooseForPlayer()
  const choiceOfOpponent = show3().then(show2).then(show1)
    .then(chooseForOpponent)

  try {
    const choices = await Promise.all(choiceOfPlayer, choiceOfOpponent)

    if (choices[0] === choices[1]) {
      draw()

    } else if (
      ['rock,scissors', 'paper,rock', 'scissors,paper']
        .includes(choices.join())
    ) {
      congrat()

    } else {
      condole()
    }

  } catch {
    condole()
  }



  await show2()
  await show1()

}
