import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';
import MiniPreview from './miniPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        id: null, name: null, styles: [{url: ''}],
      },
      items: [],
      index: 0,
      numOfItems: 0,
      addToLeft: 0,
      itemCopy: [],
    };
    this.navRight = this.navRight.bind(this);
    this.navLeft = this.navLeft.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        const currentItem = items.data[0];
        const numOfItems = currentItem.styles.length - 1;
        const itemCopy = currentItem.styles.slice(0);
        this.setState({
          currentItem,
          itemCopy,
          items: items.data,
          index: 0,
          numOfItems,
          direction: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  navRight() {
    let { currentItem, index, direction, itemCopy } = this.state;
    let { styles } = currentItem;
    styles.push(styles[index % styles.length]);
    index += 1;
    direction = 'right';
    this.setState({
      index,
      currentItem,
      direction,
      itemCopy,
    });
  }

  navLeft() {
    let {
      currentItem, index, numOfItems, direction,
    } = this.state;
    if (index !== 0) {
      index -= 1;
    }
    this.setState({
      currentItem,
      index,
      direction,
    });
  }

  render() {
    const { currentItem, index, direction, itemCopy } = this.state;
    const { name, styles } = currentItem;
    return (
      <div>
        <MainCarousel name={name} styles={styles} index={index} navRight={this.navRight} navLeft={this.navLeft} direction={direction} />
        <MiniPreview itemCopy={itemCopy} />
      </div>
    );
  }
}

export default App;
