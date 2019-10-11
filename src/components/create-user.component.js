import React, { Component } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';
import { Button } from 'reactstrap';
import { FormGroup, Input} from 'reactstrap';

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
    
    if(userObject.ideaName && userObject.description && userObject.proposer && userObject.department)
    {
      axios.post('http://localhost:4000/ideas/create', userObject).
      then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
    }
    else
    {
      alert("Empty input! Please fill all the fields.");
    }

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
              <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" placeholder="Give your idea a catching name"/>
          </div>
          <FormGroup>
            <Badge color="success">Description</Badge>
              <Input type="textarea" alue={this.state.description} onChange={this.onChangeDescription} placeholder="Summarize your idea in one sentence, followed up with detailed explanation, including purpose, plan, cost, value." />
          </FormGroup>
          <div className="form-group">
            <Badge color="success">Proposer</Badge>
              <input type="text" value={this.state.proposer} onChange={this.onChangeProposer} className="form-control" placeholder="E.g. San Zhang, Si Li"/>
          </div>
          <div className="form-group">
            <Badge color="success">Department</Badge>
              <input type="text" value={this.state.department} onChange={this.onChangeDepartment} className="form-control" placeholder="E.g. MI Core Driver"/>
          </div>
          <br>
          </br>
          <Button color="success" input type="submit">
              Submit
          </Button>
        </form>
      </div>
    )
  }
};
