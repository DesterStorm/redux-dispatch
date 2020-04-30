let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

let increment = () => dispatch(action)
increment()
increment()
increment()

function render(){
  document.body.textContent = state.count
}

changeState(state, action)