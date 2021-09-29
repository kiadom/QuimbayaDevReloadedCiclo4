import FooterFull from "../components/FooterFull"
import HeaderFull from "../components/HeaderFull"

export const MainLayout = ({children}) => {
    return (
        <div>
            <HeaderFull/>
            <main>{children}</main>
        </div>
    )
};

export default MainLayout