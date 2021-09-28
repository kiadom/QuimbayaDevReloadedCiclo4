import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const Principal = () => {
    return (
        <div>
            Esta es la pagina principal
        </div>
    )
};

export default Principal;