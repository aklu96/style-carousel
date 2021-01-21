import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { name: null, styles: [] },
      focus: { prev: {}, main: {}, next: {} },
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
          focus: {
            prev: currentItem.styles[currentItem.styles.length - 1],
            main: currentItem.styles[0],
            next: currentItem.styles[1],
          },
          items: items.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { currentItem, focus } = this.state;
    const { name } = currentItem;
    const { prev, main, next } = focus;
    console.log(prev);

    return (
      <div>
        <MainCarousel name={name} prev={prev} main={main} next={next} />
      </div>
    );
  }
}

export default App;
