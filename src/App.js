import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Habit from './components/Habit/Habit'
import './App.css';
import {Player} from 'video-react' 

class App extends React.Component {
  state = {
    default: 0,
    content: [
      {
        name: 'Los 7 hábitos de los adolescentes altamente efectivos',
        description: 'Traducción del inglés-Los siete hábitos de los adolescentes altamente efectivos es un libro de autoayuda de éxito en ventas de 1998 escrito por Sean Covey, el hijo de Stephen Covey. El libro se publicó el 9 de octubre de 1998 a través de Touchstone Books y se basa en gran medida en Los siete hábitos de las personas altamente efectivas'

      },
      {
        name: 'Ser proactivo',
        // eslint-disable-next-line
        description: 'Una persona proactiva no culpa a los demás por lo que le está pasando, es consciente de que\
        fueron sus decisiones las que la llevaron donde está pero no se queda en el simple\
        reconocimiento de sus acciones, tiene el poder para decir "estoy aquí por las decisiones que\
        tomé, pero mañana quiero estar allá.\
        La proactividad se basa en guiarnos por nuestros valores, en no entregar a otros el control\
        sobre nuestras decisiones y en trabajar continuamente en nuestro desarrollo buscando\
        influenciar a quienes se encuentran en nuestro entorno cercano.'
      },
      {
        name: 'Empezar con el fin en la mente',
        // eslint-disable-next-line
        description: 'Si empezamos cada día de nuestras vidas sabiendo lo que queremos hacer y hacia dónde nos\
        dirigimos, seguro que llegaremos al liderazgo personal.\
        Para desarrollar este hábito existe una herramienta fundamental LA MISIÓN PERSONAL, que\
        es una declaración basada en nuestros principios y valores, de manera que nos permita tomar\
        decisiones derivadas de ellos. '
      },
      {
        name: 'Poner primero lo primero',
        // eslint-disable-next-line
        description: 'Casi toda la gente está en la búsqueda de organizar el tiempo, pero casi nadie se preocupa por\
        organizar sus prioridades, lo cual resulta siempre más efectivo. La cuestión es que para ser\
        realmente efectivo, se debe poner lo verdaderamente importante por encima de lo urgente, ya\
        que lo urgente sólo es importante para otros.\
        Logrando desarrollar este hábito se aplica el principio de implementar nuestros planes de\
        acción para lograr propósitos significativos.'
      },
      {
        name: 'Pensar Ganar/Ganar',
        // eslint-disable-next-line
        description: 'La cultura en la que vivimos está enmarcada en el concepto de yo gano-tu pierdes. Desde\
        pequeños lo vemos en la escuela, luego en la universidad, más adelante en el trabajo, en la\
        política y en los negocios. En la cabeza tenemos instalado el chip de la competencia en lugar\
        del chip de la colaboración.\
        Para ser realmente efectivos debemos pensar GANAR/GANAR en todas nuestras relaciones\
        interpersonales, "hay suficiente para todos".\
        La victoria de uno no siempre es la derrota del otro, desarrollar el cuarto hábito quiere decir\
        que ambas partes de cualquier acuerdo siempre saldrán beneficiadas.'
      },
      {
        name: 'Antes que buscar ser comprendido, comprender',
        // eslint-disable-next-line
        description: 'Es difícil interactuar con otros, dialogar o convivir sin tener problemas, si buscamos\
        encontraremos que en la raíz de estos problemas está la dificultad de comprendernos unos a\
        otros.\
        El quinto hábito consiste en aprender a escuchar, en entender a los demás desde su propia\
        perspectiva, si logramos desarrollar este hábito podremos no sólo evitar problemas\
        interpersonales, sino adelantar con más agilidad los procesos con soluciones\
        GANAR/GANAR.'
      },
      {
        name: 'Sinergizar',
        // eslint-disable-next-line
        description: 'EL TODO ES MÁS QUE LA SUMA DE SUS PARTES, eso significa la sinergia. La creación de\
        este hábito requiere del trabajo en equipo, el cual, cuando se basa en la confianza y en los\
        principios, genera creatividad, innovación y efectividad.'
      },
      {
        name: 'Afilar la sierra',
        // eslint-disable-next-line
        description: 'El desarrollo de este hábito se da cuando somos capaces de hacer mantenimientos\
        innovaciones benéficas a los demás hábitos.\
        Si recuerdas el principio del P/CP, afilar la sierra significa que si nos dedicamos solamente a\
        aserrar, sin mantener la sierra, sin afilarla, seguramente llegará el momento en que ya no\
        podamos aserrar más.\
        Desarrollar estos hábitos requiere de inversión, de tiempo y de ganas, lo más posible es que\
        nos enfrentemos a nosotros mismos, pero comenzando por el principio, siendo proactivos,\
        habremos dado un primer gran paso para alcanzar la efectividad.'
      }
    ]
  }
  habit0 = () => {
    this.setState({
      imagel: './',
      default: 0
    })
  }
  habit1 = () => {
    this.setState({
      default: 1
    })
  }; habit2 = () => {
    this.setState({
      default: 2
    })
  }; habit3 = () => {
    this.setState({
      default: 3
    })
  }; habit4 = () => {
    this.setState({
      default: 4
    })
  }; habit5 = () => {
    this.setState({
      default: 5
    })
  }; habit6 = () => {
    this.setState({
      default: 6
    })
  }; habit7 = () => {
    this.setState({
      default: 7
    })
  }
  prevhabit = () => {
    if (this.state.default <= 0) {
      console.log("There's no previous page!")
    }
    else {
      this.setState({
        default: this.state.default - 1
      })
    }
  }
  nexthabit = () => {
    if (this.state.default >= 7) {
      console.log("There's no last page!")
    }
    else {
      this.setState({
        default: this.state.default + 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar
          habit0={this.habit0}
          habit1={this.habit1}
          habit2={this.habit2}
          habit3={this.habit3}
          habit4={this.habit4}
          habit5={this.habit5}
          habit6={this.habit6}
          habit7={this.habit7}
        />
        <div className="content">
          <button className="btn float-left" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.prevhabit}>Anterior</button>
          <button className="btn float-right" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.nexthabit}>Siguiente</button>
          <Habit
            title={this.state.content[(this.state.default)].name}
            content={this.state.content[(this.state.default)].description}
          />
        </div>
      </div>
    )
  }
}

export default App;
