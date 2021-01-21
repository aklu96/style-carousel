import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { start: 0, name: null, styles: [] },
      focus: [],
      items: [],
    };
    this.changeFocus = this.changeFocus.bind(this);
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
          items: items.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeFocus() {
    const { currentItem } = this.state;
    const { items } = this.state;
    let { start, name, styles } = currentItem;
    start += 1;
    const max = styles.length - 1;
    this.setState({
      currentItem: {
        start,
        name,
        styles,
      },
      focus: [
        styles[start % max],
        styles[(start + 1) % max],
        styles[(start + 2) % max],
      ],
      items,
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
