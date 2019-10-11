import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

class ProductRow extends React.Component {
  render() {
    const idea = this.props.idea;
    return (
      <tr>
        <td><a href="http://www.ni.com">{idea.IdeaName}</a></td>
        <td>{idea.Description}</td>
        <td>{idea.Proposer}</td>
        <td>{idea.Department}</td>
        <td>{idea.Status}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];

    this.props.ideas.forEach((idea) => {
      if (
          (idea.IdeaName.indexOf(filterText) === -1) &&
          (idea.Description.indexOf(filterText) === -1) &&
          (idea.Proposer.indexOf(filterText) === -1) &&
          (idea.Department.indexOf(filterText) === -1) &&
          (idea.Status.indexOf(filterText) === -1)
         ){
        return;
      }
      rows.push(
        <ProductRow
          idea={idea}
          key={idea.IdeaName}
        />
      );
    });

    return (
      <Table hover size="sm" bordered striped >
        <thead>
          <tr>
            <th>Idea Name</th>
            <th>Brief Description</th>
            <th>Proposer</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      ideas: []
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount() {
    console.log('== componentDidMount ==');
	
     axios.get('http://localhost:4000/ideas')
      .then(res => {
        console.log(res.data);
        
        var ideasData = [];
        for (var i=0; i<res.data.length; ++i) {
          console.log(res.data[i]);
          ideasData.push(
            {
              "IdeaName": res.data[i].ideaName, 
              "Description": res.data[i].description, 
              "Proposer": res.data[i].proposer, 
              "Department": res.data[i].department, 
              "Status": res.data[i].status
            });
        }

        this.setState({
          ideas: ideasData.reverse()
        });
      })
      .catch(function (error){
        console.log(error);
      })
  }
  
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          ideas={this.state.ideas}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
