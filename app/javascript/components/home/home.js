// jumbotron
// TOC
//    list of item (courses)
//       Thumbnail
//    Active Item
//       Expanded vid

import React, { Component } from 'react';
import axios from 'axios';

import Jumbotron from './jumbotron';
import Table from './toc/table';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      course_modules: [
        { id:1, title:'1. Setup', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false },
        { id:2, title:'2. Tooling', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:true },
        { id:3, title:'3. Something else', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false },
        { id:4, title:'4. Deploy', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false }
      ]
    }
  }

  componentDidMount = () => {
    axios.get('/episodes.json')
    .then((data) => {
      let result = [];
        data.data.data.map((data) => {
          result.push({id: data.id, title: data.title, desc: data.desc, active: false})
          this.setState({ course_modules: result})
       })
    })
    .catch((data) => {

    });
  }
  handleVideoChange = (item, event) => {
    event.preventDefault();
    let course_modules = [...this.state.course_modules];
    // set active status to false for all course_modules
    course_modules.map((course) => {
      course.active = false;
    });

    // toggle selected item's status
    item.active =!item.active;

    // update array copy
    course_modules[item.id - 1];

    this.setState({ course_modules });

  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table handleVideoChange={this.handleVideoChange} course_modules={this.state.course_modules} />
      </div>
    );
  }
}

export default Home;
