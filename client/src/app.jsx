import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { name: null, styles: [] },
      items: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        this.setState({
          currentItem: items.data[0],
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
    const { styles } = currentItem;

    return (
      <div>
        <MainCarousel name={name} styles={styles} />
      </div>
    );
  }
}

export default App;
