import React from 'react'
import ReactDOM from 'react-dom'
import PlacarContainer from './components/PlacarContainer'

const dados = {
    partida:{
        estadio: "Itaquera",
        data: "01/08/2018",
        horario: "19h"
    },
    casa: {
        nome: "Corinthians"
    },
    visitante: {
        nome: "Palmeiras"
    }
}

ReactDOM.render(
    <PlacarContainer { ...dados} />,
    document.getElementById('app')
)
