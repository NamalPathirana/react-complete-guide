import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons:[
      {id:'awadaw', name:'Alex',age:'29'},
      {id:'fqfq',name:'gaje',age:'24'},
      {id:'asfafw',name:'lebido',age:'46'}
    ],
    elementVisiblity:false,
  }

  switchNameHandler = (name) =>{
    this.setState(
      
      {persons:[
        {name:name ,age:'29'},
        {name:'gaje',age:'24'},
        {name:'lebido',age:'100'}
      ]
    }
    );  
  }

  nameChangeHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(
      person => {return person.id==id}
    );

    const person = {
      ...this.state.persons[personIndex]
    };
   
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {persons:persons}
    );  
  }

  togglePersonsHandler = () => {
  const currentVisibility = this.state.elementVisiblity;
  this.setState({elementVisiblity:!currentVisibility});

  }

  deletePersonsHandler = (index) => {

   // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});

  }


  render() {

  const style = {

     backgroundColor:'white',
     font:'inherit',
     border:'1px soild blue',
     padding:'8px',
     cursor:'pointer',

  }

  let personsDetails = null;

  if (this.state.elementVisiblity)
  {

    
    personsDetails = (
      this.state.persons.map((person,index) => {

        return <Person name={person.name} 
        age = {person.age}
        click={()=>this.deletePersonsHandler(index)}
        key={person.id}
        change = {(event)=>{this.nameChangeHandler(event,person.id)}}
        />

      })

    // <div>
    //     <Person click={this.switchNameHandler.bind(this,'trever berbick')} name={this.state.persons[0].name} 
    //     age={this.state.persons[0].age} ></Person>
    //     <Person name={this.state.persons[1].name}
    //     change = {this.nameChangeHandler} 
    //     age={this.state.persons[1].age}>My hobbe : Racing</Person>
    //     <Person  click={this.switchNameHandler.bind(this,'trever berbick')} name={this.state.persons[2].name} 
    //     age={this.state.persons[2].age}></Person>
    // </div>
    );

  }

    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>It seems to work.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show Detalis</button>
        {personsDetails}
     
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'orginal method'));


  }
}

export default App;


// const app = props => {
  
//   const [personsState,setPersonsState] = useState(  // could define inifinite occurences of this
//   {
//    persons:[
//        {name:'Alex',age:'29'},
//        {name:'gaje',age:'24'},
//        {name:'lebido',age:'46'}
//      ],
//   }
//   );

//   const [otherState,setOtherState] = useState({
//     something:'the thing ',
//   });

//   const switchNameHandler = () =>{
//    setPersonsState({
//      persons:[
//        {name:'james',age:'29'},
//        {name:'gaje',age:'24'},
//        {name:'lebido',age:'100'}
//      ]
//    });
//  }

//    return (
//      <div className="App">
//        <h1>Hi, im a react app</h1>
//        <p>It seems to work.</p>
//        <button onClick={switchNameHandler}>Click</button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} ></Person>
//        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbe : Racing</Person>
//        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
//      </div>
//    );

//    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'orginal method'));
// }