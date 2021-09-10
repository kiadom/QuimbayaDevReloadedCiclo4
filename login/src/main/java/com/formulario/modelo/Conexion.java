package com.formulario.modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    static String bd = "concesionario";
    static String login = "root";
    static String password = "CarlosMy1";
    static String url = "jdbc:mysql://localhost:3306/formulario?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";

    Connection conexion = null;

    public Conexion(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url,login,password);
            if (conexion!=null){
                System.out.println("La conexión de la BD "+bd+" fue satisfactoria");
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Se presento problemas al cargar el Driver");
        } catch (SQLException e) {
            System.out.println("Se presento un problema al acceder a la BD: "+ e.getMessage());
        }
    }
    public Connection getConnection(){
        return conexion;
    }
    public void desconectar(){
        try {
            conexion.close();
        } catch (SQLException e) {
            System.out.println("Ocurrió un error cerrando la conexión");;
        }
        conexion = null;
    }
}
