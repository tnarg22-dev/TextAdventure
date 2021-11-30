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
        text: "You suddenly wake up in a cold, damp, cell. You see a guard walks by and suddenly the keys drop right in front of your cell. you pick them up and unlock the door. Do you go right or left",
        options:[
            {
                text: "Go Left",
                SetState:{},
                nextText:2
            },
            {
                text: 'Go Right',
                nextText: 3
            }
        ]
        
    },
    {
        id:2,
        text: "You went Left, ",
        options:[
          {
              text: "this is option 1222",
              SetState:{},
              nextText:2
          },
          {
              text: 'This is option 2222',
              nextText: 2
          }
      ]
    },
    {
      id:3,
      text: "You went Right, ",
      options:[
        {
            text: "this is option 1222",
            SetState:{},
            nextText:2
        },
        {
            text: 'This is option 2222',
            nextText: 2
        }
    ]
  }
]

Game()
