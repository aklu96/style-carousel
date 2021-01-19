import axios from 'axios';
import React from 'react';
import MainCarousel from './mainCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: { name: null, styles: [] },
      items: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/items')
      .then((items) => {
        this.setState({
          current: items.data[0],
          items: items.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <MainCarousel name={this.state.current.name} styles={this.state.current.styles} />
      </div>
    );
  }
}

export default App;
