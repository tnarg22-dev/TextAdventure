// Get the text element that we will use to tell the story
const textElement = document.getElementById("text")
// Get the buttons we will press for out options
const optionButtonsElement = document.getElementById("option-buttons")

let state ={}

function startGame(){
    let state ={}
    showTextNode(1)
}


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }
 
function selectOption(option){
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
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
        id:2
    }
]

startGame()
