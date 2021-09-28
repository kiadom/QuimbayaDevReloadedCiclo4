import logoheader from '../images/logoheader.png';

const Header = () => {
    return(
        <header>
            <div className="topNavBar">
                <div className="hamburger">
                    <a href="#"><i className="fas fa-bars"></i></a>
                </div>
                        
                <div className="iconCompany">
                    <img src= {logoheader} alt="logo header" height="50px"/>
                </div>
            </div>
        </header>
    )
};

export default Header;