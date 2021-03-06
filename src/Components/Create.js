import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, age,email } = this.state;
     console.log(name+age+email);
     
    axios.post('http://localhost:8080/contacts', { name, age, email })
      .then((result) => {
          if(result.status===200)
          {
              alert('contact saved');
          }
      //  this.props.history.push("/")
      });
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD CONTACT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">age:</label>
                <input type="number" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="Age" />
              </div>
          
              <div class="form-group">
                <label for="publisher">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="button-narrow">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;