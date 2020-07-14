import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/contact'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  onChange = (e) => {
    const state = this.state.contact
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, age,email } = this.state.contact;

    axios.put('/http://localhost:8080/contacts'+this.props.match.params.id, { name,age,email })
      .then((result) => {
        console.log('updated');
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Contact
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.contact.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Contact List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.contact.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Age:</label>
                <input type="text" class="form-control" name="age" value={this.state.contact.age} onChange={this.onChange} placeholder="Address" />
              </div>
          
              <div class="form-group">
                <label for="description">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.contact.email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;