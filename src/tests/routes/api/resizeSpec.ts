import axios from 'axios';

describe('Test resize endpoint responses', () => {
  it('fetch the url with valid filename', () => {
    axios
      .get(
        'http://localhost:3000/api/resize?filename=fjord.jpg&width=200&height=200'
      )
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });

  it('should show error message when enter not existant filename', () => {
    axios
      .get(
        'http://localhost:3000/api/resize?filename=ford.jpg&width=200&height=200'
      )
      .then((res) => {
        expect(res.data).toEqual('There was an Error: Input file is missing');
      });
  });
});
