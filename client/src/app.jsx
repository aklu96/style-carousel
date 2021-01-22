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
    };
    this.navRight = this.navRight.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        let currentItem = items.data[0];
        this.setState({
          currentItem,
          items: items.data,
          index: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  navRight() {
    let { currentItem, index } = this.state;
    let { styles } = currentItem;
    styles.push(styles[index % styles.length]);
    index += 1;
    this.setState({
      index,
      currentItem,
    });
  }

  render() {
    const { currentItem, index } = this.state;
    const { name, styles } = currentItem;
    return (
      <div>
        <MainCarousel name={name} styles={styles} index={index} navRight={this.navRight} />
      </div>
    );
  }
}

export default App;
