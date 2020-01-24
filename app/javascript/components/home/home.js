// jumbotron
// TOC
//    list of item (courses)
//       Thumbnail
//    Active Item
//       Expanded vid

import React, { Component } from 'react';

import Jumbotron from './jumbotron';
import Table from './toc/table';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      course_modules: [
        { id:1, title:'1 .Setup', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false },
        { id:2, title:'2. Tooling', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false },
        { id:3, title:'3. Something else', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false },
        { id:4, title:'4. Deploy', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', active:false }
      ]
    }
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table course_modules={this.state.course_modules} />
      </div>
    );
  }
}

export default Home;
