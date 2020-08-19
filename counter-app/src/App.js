import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter"; 
import Profile from "./Profile";
/*
const employeeDirectory =
[
    {
      name: "bob",
      position:"SE",
      id: "1"
    },
    {
      name: "tom",
      position:"cto",
      id: "2"
    },
    {
      name: "pam",
      position:"asdf",
      id: "3"
    }
]; 
*/


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state={
      employees: employeeDirectory,
      employeeOfTheMonth: "1"
    };
  }

setEmployeeOfTheMonth = employeeId => {
  this.setState({
    employeeOfTheMonth: employeeId
  });
}

  render(){
  return (
    <div className="App" >
      <h1>asdfApp.jsasdf</h1>
      <Counter />
      {this.state.employees.map(employee => {
          return (
            <div style={{backgrounColor:employee.id === this.state.employeeOfTheMonth ? 
            "yellow":"white" }}>
              <Profile 
              key={employee.id} 
              id={employee.id}
              name={employee.name} 
              position={employee.position}/>
            </div>
          );
        })
      }
    </div>
  );
  }
}

export default App;
