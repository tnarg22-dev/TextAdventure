// Get the text element that we will use to tell the story
const textElement = document.getElementById("text")
// Get the buttons we will press for out options
const Buttons = document.getElementById("buttons")

let state = {}
// fuction that starts the game and displays the first text option
function Game() {
  state = {}
  showText(1)
}
// fucntion that shows the options 
function DisplayButtons(option) {
  return option.requiredState == null || option.requiredState(state)
}
// fuction that allows you to select the next option and sets your next state.
function sltOption(option) {
  const NextTextID = option.nextText
  if (NextTextID <= 0) {
    return Game()
  }
  state = Object.assign(state, option.setState)
  showText(NextTextID)
}
// this is the handler for showing options and changing states in the text adventure and incoprates the other fuctions to do so.
// this works by finding the frist text ID then going to the next text ID based on the options the player clicked on.
// each text ID has its own set of options that may lead to another Text ID to continue the game.
function showText(TextOptIndex) {
  const text = textPaths.find(TextOpt => TextOpt.id === TextOptIndex)
// rights the next text based on the current TextOpt
  textElement.innerText = text.text

  while (Buttons.firstChild) {
Buttons.removeChild(Buttons.firstChild)
  }
// fills the buttons inner text based on each option that is avalible to choose from depending on the text
  text.options.forEach(option => {
    if (DisplayButtons(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => sltOption(option))
      Buttons.appendChild(button)
    }
  })
}
const textPaths = [
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

Game()
