import React from 'react'
import {Form} from './components/form.component'
import {List} from './components/list.component'
import {Resultat} from './components/resultat.component'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      destination: {
        name: '',
        km: 0
      },
      tab: []
    }
  }

  componentDidMount() {
    const state = localStorage.getItem('destination')
    if (state) {
      this.setState({tab: JSON.parse(state)})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      destination: { ...prevState.destination, [name]: value }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      tab: [...prevState.tab, prevState.destination],
      destination: { name: '', km: 0 }
    }))
  }

  componentDidUpdate() {
    localStorage.setItem('destination', JSON.stringify(this.state.tab));  
  }

  render() {
    return (
      <div className='App'>
        <h1>Trajet Van</h1>
        
        <Form handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} destination = {this.state.destination} />
        <List props = {this.state.tab} />
        <Resultat props = {this.state.tab} />
        
      </div>
    )
  }
}

export default App;