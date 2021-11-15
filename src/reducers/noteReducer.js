const noteReducer = (state = [], action) => {
    // if (action.type === 'NEW_NOTE') {
    //     // state.push(action.data)
    //     // return state
    //   return state.concat(action.data)
    // }
    // return state

    // expand to account for toggle importance action
    switch(action.type) {
        case 'NEW_NOTE':
            // return state.concat(action.data)
            
            // using array spread syntax
            return [...state, action.data]
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteToChange = state.find(note => note.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note => note.id !== id ? note : changedNote)
        }
        default:
            return state

    }
  }

// function to randomly generate id for a new note
const generateId = () => {
    return Number((Math.random() * 1000000).toFixed(0))
  }

export const createNote = (content) => {
    return {
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId()
      }
    }
}
  
export const toggleImportanceOf = (id) => {
    return {
      type: 'TOGGLE_IMPORTANCE',
      data: {
        id
      }
    }
}

export default noteReducer