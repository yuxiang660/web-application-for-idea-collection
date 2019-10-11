import React, { Component } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';
import { Spinner } from 'reactstrap';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeProposer = this.onChangeProposer.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      name: '',
      description: '',
      proposer: '',
      department: ''
    };
  }
  
  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  onChangeProposer(e) {
    this.setState({ proposer: e.target.value });
  }
  onChangeDepartment(e) {
    this.setState({ department: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    const userObject = {
      ideaName: this.state.name,
      description: this.state.description,
      proposer: this.state.proposer,
      department: this.state.department,
      status: 'new'
    };
    
    axios.post('http://localhost:4000/ideas/create', userObject).
      then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
    
    this.setState(
      { 
        name: '', 
        description: '',
        proposer: '',
        department: ''
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <Badge color="success">Idea Name</Badge >
              <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
          </div>
          <div className="form-group">
            <Badge color="success">Description</Badge>
              <input type="text" value={this.state.description} onChange={this.onChangeDescription} className="form-control" />
          </div>
          <div className="form-group">
            <Badge color="success">Proposer</Badge>
              <input type="text" value={this.state.proposer} onChange={this.onChangeProposer} className="form-control" />
          </div>
          <div className="form-group">
            <Badge color="success">Department</Badge>
              <input type="text" value={this.state.department} onChange={this.onChangeDepartment} className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Create idea" className="btn btn-success btn-block" />
          </div>
          <Spinner type="grow" color="success" />
        </form>
      </div>
    )
  }
};
