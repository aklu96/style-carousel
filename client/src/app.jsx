import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { name: null, styles: [] },
      focus: { prev: {}, current: {}, next: {} },
      items: [],
    };
    // this.nextItem = this.nextItem.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        const currentItem = items.data[0];
        this.setState({
          currentItem,
          focus: { prev: currentItem.styles[currentItem.length], current: currentItem.styles[1], next: currentItem[2], }
          items: items.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { currentItem } = this.state;
    const { name } = currentItem;
    const { focus } = currentItem;

    return (
      <div>
        <MainCarousel name={name} focus={focus} />
      </div>
    );
  }
}

export default App;
