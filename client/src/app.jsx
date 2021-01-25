import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';
import MiniPreview from './miniPreview';

const AWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  justify-content: space-between;
  background-color: #F6F6F6;
`;
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
      selected: {
        name: null,
      },
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
        const first = itemCopy.splice(0, 1);
        itemCopy.push(first[0]);
        const selected = itemCopy[0];
        this.setState({
          currentItem,
          itemCopy,
          selected,
          items: items.data,
          index: 0,
          numOfItems,
          direction: null,
        });
        console.log(selected);
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
      selected: styles[(index + 1) % (styles.length)],
    });
  }

  navLeft() {
    let {
      currentItem, index, direction, selected,
    } = this.state;
    let { styles } = currentItem;
    if (styles.length > 6) {
      styles.pop(styles[index % styles.length]);
    }
    if (index !== 0) {
      index -= 1;
    }
    selected = styles[(index + 1) % (styles.length)];
    this.setState({
      currentItem,
      index,
      direction,
      selected,
    });
  }

  navRightMini() {

  }

  render() {
    const { currentItem, index, itemCopy, direction, selected } = this.state;
    const { name, styles } = currentItem;
    return (
      <AWrap>
        <MainCarousel name={name} styles={styles} selected={selected} index={index} navRight={this.navRight} navLeft={this.navLeft} direction={direction} />
        <MiniPreview itemCopy={itemCopy} selected={selected} />
      </AWrap>
    );
  }
}

export default App;
