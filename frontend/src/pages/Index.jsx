import logo from './media/logoLogin.png';


const Index = () => {
    return(
        <body className ="bodyIndex">
            <div className ="contenedor">
                <div className="contenedor-login">

                    <div className ="contenedor-logo">
                        <image className="logo" src={logo} alt="logo"></image>
                    </div>

                </div>

            </div>

        </body>
    )
};

export { Index };