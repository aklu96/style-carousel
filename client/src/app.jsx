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
        id: null, name: null, styles: [{ url: '' }],
      },
      items: [],
      index: 1,
      styleAdjust: 0,
      numOfItems: 0,
      size: null,
      itemCopy: [],

      currentItemCopy: [],
      clicked: false,
      selected: {
        name: null,
      },
    };
    this.navRight = this.navRight.bind(this);
    this.navLeft = this.navLeft.bind(this);
    this.miniNav = this.miniNav.bind(this);
    this.chooseSize = this.chooseSize.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        let currentItem = items.data[0];
        const numOfItems = currentItem.styles.length;
        const itemCopy = currentItem.styles.slice(0);
        const currentItemCopy = currentItem.styles.slice(0);
        const first = itemCopy.splice(0, 1);
        itemCopy.push(first[0]);
        const selected = itemCopy[0];
        this.setState({
          currentItem,
          currentItemCopy,
          itemCopy,
          selected,
          items: items.data,
          index: 1,
          styleAdjust: 0,
          numOfItems,
          direction: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  navRight() {
    let {
      currentItem, index, direction, itemCopy,
    } = this.state;
    const { styles } = currentItem;
    // styles.push(styles[index % styles.length]);
    let currentIndex = this.findSelectedIndex();
    if (currentIndex === 2) {
      currentItem.styles = currentItem.styles.concat(styles);
    }
    index += 1;
    direction = 'right';
    this.setState({
      index,
      currentItem,
      direction,
      itemCopy,
      selected: styles[(index) % (styles.length)],
    });
  }

  navLeft() {
    let {
      currentItem, index, direction, selected,
    } = this.state;
    const { styles } = currentItem;
    if (styles.length > 6) {
      styles.pop(styles[index % styles.length]);
    }
    if (index !== 0) {
      index -= 1;
    }
    selected = styles[(index) % (styles.length)];
    this.setState({
      currentItem,
      index,
      direction,
      selected,
    });
  }

  findSelectedIndex() {
    const { currentItemCopy, selected } = this.state;
    for (let i = 0; i < currentItemCopy.length; i += 1) {
      if (currentItemCopy[i].styleName === selected.styleName) {
        return i;
      }
    }
    return 0;
  }

  miniNav(i) {
    let { index, numOfItems, currentItem, styleAdjust, currentItemCopy, selected } = this.state;
    let { styles } = currentItem;
    if (i > (index % numOfItems)) {
      index += (i - (index % numOfItems));
      selected = styles[(index)];
    } else {
      index -= ((index % numOfItems) - i);
      selected = styles[(index)];
    }
    if (i === 5) {
      currentItem.styles = currentItem.styles.concat(currentItemCopy);
    }
    this.setState({ index, currentItem, styleAdjust, selected });
  }

  toggleClicked() {
    this.setState({ clicked: true });
  }

  chooseSize(i) {
    this.setState({ size: i });
  }

  render() {
    const {
      currentItem, index, itemCopy, direction, selected, styleAdjust, clicked, size,
      currentItemCopy,
    } = this.state;
    const { name, styles } = currentItem;
    return (
      <AWrap>
        <MainCarousel
          name={name}
          styles={styles}
          selected={selected}
          index={index}
          styleAdjust={styleAdjust}
          navRight={this.navRight}
          navLeft={this.navLeft}
          direction={direction}
        />
        <MiniPreview
          currentItemCopy={currentItemCopy}
          itemCopy={itemCopy}
          selected={selected}
          clicked={clicked}
          size={size}
          chooseSize={this.chooseSize}
          miniNav={this.miniNav}
          toggleClicked={this.toggleClicked}
        />
      </AWrap>
    );
  }
}

export default App;
