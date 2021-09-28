import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const RegistroEstadoVentasPage = () => {
    return (
        <div>
            Esta es la pagina de registro de estado de ventas
        </div>
    )
};

export default RegistroEstadoVentasPage;