import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({ monsters: res }))
  }

  render() {

   const onChange = (e) =>{
      this.setState({searchInput:e.target.value});
    }
    
    console.log(this.state.searchInput)
  
    return (
      <div className="App">
        <h1 className='app-header'> Monsterdex</h1>
        <SearchBox onChange={onChange}/>
        <CardList monsters={this.state.monsters} searchInput={this.state.searchInput}/>
        C:\Users\alexa\Documents\monsterdex
      </div>
    );

  }
}

export default App;
