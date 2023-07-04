import './Footer.css'

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p style={textStyle}>This is the footer.</p>
        </footer>
    );
};

const footerStyle = {
    background: '#000000',
    padding: '20px',
    textAlign: 'center',
};

const textStyle = {
    color: '#333333',
};

export default Footer;
