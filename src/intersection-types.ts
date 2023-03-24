type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  // its a must to implement 2 different function from 2 different types
  drag: () => { },
  resize: () => { }
}