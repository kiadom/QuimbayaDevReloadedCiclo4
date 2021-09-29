import FooterFull from "../components/FooterFull"
import HeaderFull from "../components/HeaderFull"

export const MainLayout = ({children}) => {
    return (
        <div className = 'mainContainer'>
            <HeaderFull/>
            <main>{children}</main>
            <FooterFull/>
        </div>
    )
};

export default MainLayout