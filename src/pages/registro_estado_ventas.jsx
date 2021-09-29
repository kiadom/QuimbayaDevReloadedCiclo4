import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const RegistroEstadoVentasPage = () => {
    return (
        <div>
            <div classNameName="wrapper">
                <Sidebar icono = {faThermometerThreeQuarters} titulo = 'MAESTRO DE ESTADOS DE VENTAS'/>

            </div>
        </div>
    );
};

export default RegistroEstadoVentasPage;