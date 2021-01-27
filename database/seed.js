/* eslint-disable no-unused-vars */
const faker = require('faker');
const Model = require('./items');

const seedDatabase = () => {
  const domain = 'http://d1f5qc7bkni254.cloudfront.net/';
  const imageNums = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
  const data = (new Array(100).fill(null).map(() => {
    let name = faker.lorem.word();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const styles = new Array(6).fill(null).map((val, i) => {
      let styleName = faker.lorem.word();
      styleName = styleName.charAt(0).toUpperCase() + styleName.slice(1);
      const color = faker.lorem.word();
      const price = faker.commerce.price();
      const abbreviation = faker.lorem.word();
      const styleNo = faker.random.number();
      const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
      const url = domain + imageNums[i];
      return {
        styleName,
        color,
        price,
        abbreviation,
        sizes,
        styleNo,
        url,
      };
    });
    const product = new Model.Items({ name, styles });
    product.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('product saved');
      }
    });
  }));
};

seedDatabase();
