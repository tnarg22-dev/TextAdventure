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
                nextText: 11
            }
        ]
        
    },
    {
        id:2,
        text: "You went Left, and immediately smack into the guard who dropped the key. He flashes a grin and keeps walking.",
        options:[
          {
              text: "You can follow him quietly.",
              SetState:{},
              nextText:21
          },
          {
              text: 'You can attempt to knock him out.',
              nextText: 22
          }
      ]
    },
    {
      id:22,
      text: "The guard easily overpowers you and knocks you out. The last thing you hear is -strange how he didnt just follow me-",

  },
  {
    id:21,
    text: "You see him go through an old wooden door. You follow behind slowly and go through the door also. To your surprise the door opens into a lush forest, or so it appears. As you look closer you see a wizard meditating in the middle of a dead tree stump. Next to him rests a wand",
    options:[
      {
          text: "You tap on the Wizard's shoulder to ask if he can help you.",
          SetState:{},
          nextText:23
      },
      {
          text: 'You take the wand and try to use it.',
          nextText: 24
      }
  ]
},
{
  id:23,
  text: "He opens his eyes, grinning, and responds gently -I am the one who freed you from the cage, you must escape this place. I will send you to safety- The wizard begins an incantation",
  options:[
    {
        text: "You allow the wizard to cast his spell",
        SetState:{},
        nextText:25
    },
    {
        text: 'You ask to go to the bathroom first',
        nextText: 26
    }
]
},
{
  id:24,
  text: "You wave the wand around haphazardly and suddenly find yourself on a sand-dune in a great desert. You stumble aimlessy looking for water until you expire",

},
{
  id:25,
  text: "You suddenly find yourself at home. You allow yourself to breathe a sigh of relief when suddenly youre challenged to a riddle. The wizard dares you to guess his favorite snack -boiled newt- or -fried bat-wings-. -If you guess incorrectly I'll send you back to prison-",
  options:[
    {
        text: "Boiled Newt",
        SetState:{},
        nextText:27
    },
    {
        text: 'fried bat-wings',
        nextText: 28
    }
]
},
{
  id:26,
  text: "You break the wizards concentration and find yourself in the Antartic next to a suspicious looking pile",

},
{
  id:28,
  text: "You have survived the Escape! Choose your reward!",
  options:[
    {
        text: "A fistbump",
        SetState:{},
        nextText:29
    },
    {
        text: 'A high-five',
        nextText: 30
    }
]
},
{
  id:27,
  text: "All of a sudden you are right back in your cell, and there you remain for an undeterminate amount of time",

},
{
  id:29,
  text: "You receive a rightious fist bump",

},
{
  id:30,
  text: "You experience a world-altering high-five",

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
  ,
  {
    id:11,
    text: "You hear a guard rounding  the corner a head of you, but you see an open cell to your left. ",
    options:[
      {
          text: "Rush Him and take his sword",
          SetState:{},
          nextText:12
      },
      {
        text: 'hide under the bed in the empty cell',
        nextText: 13
      }
 
  ]
},
{
  id:12,
  text: "you were surprised to see multiple guards when you rounded the corner. You were stabbed to death.",
  options:[
    {
        text: "Start over",
        SetState:{},
        nextText:1
    },
   
 
]
},
{
  id:13,
  text: " You see multiple sets of boots walk pass the cell as you hide under the bed, you realize that there was multiple guards. In the corner of the room opposite side of the room in the corner, you can see a hole. You see that the hole is about big enough for you to fit through. ",
  options:[
    {
        text: "Try to kick open more a bigger hole and squeeze through",
        SetState:{},
        nextText:14
    },
    {
      text: "Walk out of the cell and try to find another way.",
      SetState:{},
      nextText:15
  },
  ]
},
{
  id:14,
  text: " you were able to squeeze through, you fall a short drop into some bushes.In Front of you, you see the open sea a dock with a few single person sized row boats, you look around and see a watch tower to you left and to your right you see a patrol coming your way.",
  options:[
    {
        text: "Make a break for it and run to the dock",
        SetState:{},
        nextText:16
    },
    {
      text: "Hide in wait",
      SetState:{},
      nextText:17
  },
 
  ]
},
{
  id:15,
  text:"As you round the cornner, you were surprised to see multiple guards when you rounded the corner. You were stabbed to death",
  options:[
    {
        text: " Start over",
        SetState:{},
        nextText:1
    },
 
  ]
},
{
  id:17,
  text:"you were spotted by the watchtower. Guards rush over and apprehend you.",
  options:[
    {
        text: " Start over",
        SetState:{},
        nextText:1
    },
 
  ]
},
{
id:17,
text: " you make a break for it, you look back and see guards about to fire arrows at you.",
options:[
  {
      text: "Dodge left",
      SetState:{},
      nextText:18
  },
  {
    text: "Dodge Right",
    SetState:{},
    nextText:19
    
}
]
},
{
  id:18,
  text: " You dodge left and were shot with a volley of arrows.",
  options:[
    {
        text: "start over",
        SetState:{},
        nextText:1
    }
]
},
{
  id:19,
  text: " You make it to the dock, you grab a row boat and get away!",
  options:[
    {
        text: "You win, Play again?",
        SetState:{},
        nextText:1
    }
]
}
]

Game()
