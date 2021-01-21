import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { name: null, styles: [] },
      focus: [],
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
          focus: [
            currentItem.styles[currentItem.styles.length - 1],
            currentItem.styles[0],
            currentItem.styles[1],
          ],
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

    return (
      <div>
        <MainCarousel name={name} focus={focus} />
      </div>
    );
  }
}

export default App;
