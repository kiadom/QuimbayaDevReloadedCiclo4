package com.formulario.vista;

//import com.formulario.controlador.UserDAO;
import com.formulario.modelo.Conexion;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Formulario {
    private JFrame ventana;
    private JLabel usuario, contraseña;
    private JTextField texto1;
    private JPasswordField texto2;
    private JButton boton1;
    int contador = 0;

    public Formulario(){
        ventana = new JFrame("Formulario de ingreso");
        ventana.setLayout(new GridLayout(3,2));
        ventana.setSize(350,120);

        usuario = new JLabel("Usuario");
        contraseña = new JLabel("Contraseña");

        texto1 = new JTextField(20);
        texto2 = new JPasswordField(20);

        boton1 = new JButton("Ingresar");

        boton1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Conexion conexion = new Conexion();

                    try {
                        String u = texto1.getText();
                        String p = String.valueOf(texto2.getPassword());
                        Statement statement = conexion.getConnection().createStatement();
                        String consulta = "SELECT * FROM user WHERE username='" + u + "' AND password='" + p + "'";
                        ResultSet resultado = statement.executeQuery(consulta);

                        if (resultado.next()) {
                            JOptionPane.showMessageDialog(null, "Bienvenido");
                        } else{
                            JOptionPane.showMessageDialog(null, "Usuario o contraseña inválidos");
                            contador += 1;
                            if (contador == 3){
                                JOptionPane.showMessageDialog(null, "A superado los intentos");
                                System.exit(0);
                            }
                        }

                    } catch (SQLException h) {
                        System.out.println("Ocurrió un herror al consultar " + h.getMessage());
                        JOptionPane.showMessageDialog(null, "Error al consultar", "Error", JOptionPane.ERROR_MESSAGE);
                    }
            }
        });
        ventana.getContentPane().add(usuario);
        ventana.getContentPane().add(texto1);
        ventana.getContentPane().add(contraseña);
        ventana.getContentPane().add(texto2);
        ventana.getContentPane().add(boton1);

        ventana.setVisible(true);
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    }
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Formulario();
            }
        });
    }
}
