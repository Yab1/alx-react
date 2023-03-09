import { getFullYear, getFooterCopy } from './utils.js';

const Footer = () => {
  return (
    <>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
      ;
    </>
  );
};

export default Footer;
