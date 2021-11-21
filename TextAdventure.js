// Get the text element that we will use to tell the story
const textElement = document.getElementById("text")
// Get the buttons we will press for out options
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}
// fuction that starts the game and displays the first text option
function startGame() {
  state = {}
  showText(1)
}
// fucntion that shows the options 
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
// fuction that allows you to select the next option and sets your next state.
function sltOption(option) {
  const nextNodeId = option.nextText
  if (nextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showText(nextNodeId)
}
// this is the handler for showing options and changing states in the text adventure and incoprates the other fuctions to do so.
// this works by finding the frist text ID then going to the next text ID based on the options the player clicked on.
// each text ID has its own set of options that may lead to another Text ID to continue the game.
function showText(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
// rights the next text based on the current textnode
  textElement.innerText = textNode.text

  while (optionButtonsElement.firstChild) {
optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
// fills the buttons inner text based on each option that is avalible to choose from depending on the text
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => sltOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
const textNodes = [
    {
        id: 1,
        text: "this is a test for ur adventure",
        options:[
            {
                text: "this is option 1",
                SetState:{},
                nextText:2
            },
            {
                text: 'This is option 2',
                nextText: 2
            }
        ]
        
    },
    {
        id:2,
        text: "this is the next step in the adventure"
    }
]

startGame()
