import { shallow } from 'enzyme';
import App from './App';

describe(App, () => {
  it('should renders APP component without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('should verify that App renders a div with the class App-header', () => {
    const app = shallow(<App />);
    expect(app.find('.App-header')).toBeDefined();
  });

  it('should verify that App renders a div with the class App-body', () => {
    const app = shallow(<App />);
    expect(app.find('App-body')).toBeDefined();
  });

  it('should verify that App renders a div with the class App-footer', () => {
    const app = shallow(<App />);
    expect(app.find('App-footer')).toBeDefined();
  });
});
