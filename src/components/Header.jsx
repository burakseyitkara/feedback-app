import PropTypes from "prop-types";

function Header({ text,bgColor,textColor }) {

    const headerStyle = {   
        backgroundColor: bgColor,
        color: textColor,
    }



  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',// text paramatresi gönderilmez ise default param.
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = { 
    text: PropTypes.string, // text parametresi string olacak dedik.
    bgColor: PropTypes.string, // text parametresi string olacak dedik.
    textColor: PropTypes.string, // text parametresi string olacak dedik.
    
} 

export default Header;
