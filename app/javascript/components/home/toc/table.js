import React, { Component } from 'react';

import Item from './item';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.course_modules.map((item)=> {
      return <Item key={item.id} title={item.title} desc={item.desc} />
    });

    return (
      <div className="pt-5 pb-5">
         <div className="container">
           <div className="text-center">
             <h2 className="pt-4 pb-4">React for Rails - Videos</h2>
           </div>
           {items}
         </div>
      </div>
    );
  }
}

export default Table;
