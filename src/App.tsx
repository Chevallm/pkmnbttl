import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './types/Pokemon'
import { PickPokemon } from './PickPokemon'

interface AppState {
  user: {
    pokemons: Pokemon[]
  }
}

function App() {
  
  const [state, setState] = useState<AppState>({
    user: {
      pokemons: []
    }
  });

  return (
    <>
      {state.user.pokemons.length < 1 && (
        <PickPokemon howMuch={3}></PickPokemon>
      )}
    </>
  )
}

export default App
