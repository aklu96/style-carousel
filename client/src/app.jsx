import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        id: null, name: null, styles: [],
      },
      items: [],
      index: 0,
      numOfItems: 0,
      addToLeft: 0,
    };
    this.navRight = this.navRight.bind(this);
    this.navLeft = this.navLeft.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        const currentItem = items.data[0];
        const numOfItems = currentItem.styles.length - 1;
        console.log(numOfItems);
        this.setState({
          currentItem,
          items: items.data,
          index: 0,
          numOfItems,
          addToLeft: numOfItems,
          direction: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  navRight() {
    let { currentItem, index, direction } = this.state;
    let { styles } = currentItem;
    styles.push(styles[index % styles.length]);
    index += 1;
    direction = 'right';
    this.setState({
      index,
      currentItem,
      direction,
    });
  }

  navLeft() {
    let {
      currentItem, index, addToLeft, numOfItems, direction,
    } = this.state;
    let { styles } = currentItem;
    // styles.unshift(styles[(index + addToLeft - 1)] % styles.length);
    // addToLeft -= 1;
    // direction = 'left';
    // if (addToLeft < 0) {
    //   addToLeft = numOfItems;
    // }
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
    const { currentItem, index, direction } = this.state;
    const { name, styles } = currentItem;
    return (
      <div>
        <MainCarousel name={name} styles={styles} index={index} navRight={this.navRight} navLeft={this.navLeft} direction={direction} />
      </div>
    );
  }
}

export default App;
