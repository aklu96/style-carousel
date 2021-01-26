import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';
import MiniPreview from './miniPreview';

const AWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0;
  padding: 0;
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
      numOfItems: 0,
      size: null,
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
        const currentItemCopy = currentItem.styles.slice(0);
        const selected = currentItemCopy[1];
        this.setState({
          currentItem,
          currentItemCopy,
          selected,
          items: items.data,
          index: 1,
          numOfItems,
          clicked: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  navRight() {
    let {
      currentItem, index, clicked,
    } = this.state;
    clicked = false;
    const { styles } = currentItem;
    const currentIndex = this.findSelectedIndex();
    if (currentIndex > 3) {
      currentItem.styles = currentItem.styles.concat(styles);
    }
    index += 1;
    this.setState({
      index,
      currentItem,
      selected: styles[(index) % (styles.length)],
      clicked,
    });
  }

  navLeft() {
    let {
      currentItem, index, selected, clicked,
    } = this.state;
    const { styles } = currentItem;
    clicked = false;
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
      selected,
      clicked,
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
    let { index, selected, clicked } = this.state;
    const { numOfItems, currentItem, currentItemCopy } = this.state;
    const { styles } = currentItem;
    clicked = false;
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
    this.setState({
      index, currentItem, selected, clicked,
    });
  }

  toggleClicked() {
    this.setState({ clicked: true });
  }

  chooseSize(i) {
    this.setState({ size: i });
  }

  render() {
    const {
      currentItem, index, selected, clicked, size, currentItemCopy,
    } = this.state;
    const { name, styles } = currentItem;
    return (
      <AWrap>
        <MainCarousel
          name={name}
          styles={styles}
          selected={selected}
          index={index}
          navRight={this.navRight}
          navLeft={this.navLeft}
        />
        <MiniPreview
          currentItemCopy={currentItemCopy}
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
