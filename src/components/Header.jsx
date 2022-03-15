import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  // text paramatresi gönderilmez ise default param.
  text: 'Feedback UI',
};

Header.propTypes = { 
    text: PropTypes.string, 
} // text parametresi string olacak dedik.

export default Header;
