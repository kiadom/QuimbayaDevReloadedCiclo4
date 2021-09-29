import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const AdminVendedoresPage = () => {
    return (
        <div>
            <div classNameName="wrapper">
                <Sidebar icono = {faIdCard} titulo = 'GESTION DE INFORMACION DE VENDEDORES'/>

            </div>
        </div>
    );
};

export default AdminVendedoresPage;