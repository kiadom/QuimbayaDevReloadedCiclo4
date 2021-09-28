import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const AdminVendedoresPage = () => {
    return (
        <div>
            Esta es la pagina de administracion de vendedores
        </div>
    )
};

export default AdminVendedoresPage;