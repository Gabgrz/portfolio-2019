/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boletodecines;

import javax.swing.JOptionPane;


/**
 *
 * @author Karen
 */
public class transaccion {
    
    int sala1fila;
    int sala1columna;
    String sala1pelicula = "";
    int sala2fila;
    int sala2columna;
    String sala2pelicula ="";
    int sala1capacidad = sala1fila*sala1columna;
    int sala2capacidad = sala2fila*sala2columna;
    
        public void setSala1fila(int sala1fila){
        this.sala1fila = sala1fila;
    }
    public void setSala1columna(int sala1columna){
        this.sala1columna = sala1columna;
    }
    public void setSala2fila(int sala2fila){
        this.sala2fila = sala2fila;
    }
    public void setSala2columna (int sala2columna){
        this.sala2columna = sala2columna;
    }
    public int getSala1fila(){
        return sala1fila;
    }
    public int getSala1columna(){
        return sala1columna;
    }
    public int getSala2fila(){
        return sala2fila;
    }
    public int getSala2columna(){
        return sala2columna;
    }
    
    public void capturarDatosdeAdministrador() {
        setSala1fila(Integer.parseInt(Administrador.sala1fila.getText()));
        setSala1columna(Integer.parseInt(Administrador.sala1columna.getText()));
        sala1pelicula = Administrador.sala1pelicula.getText();
        setSala2fila(Integer.parseInt(Administrador.sala2fila.getText()));
        setSala2columna(Integer.parseInt(Administrador.sala2columna.getText()));
        sala2pelicula = Administrador.sala2pelicula.getText();
    }
        
    public void imprimirDatosdeAdministrador() {
        int sala1capacidad = getSala1fila()*getSala1columna();
        int sala2capacidad = getSala2fila()*getSala2columna();
        JOptionPane.showMessageDialog(null, "Se ha creado las salas exitosamente. "
                + " La primera sala tiene " + sala1capacidad + " asientos. "
                + " La pelicula de la primera sala es " + sala1pelicula
                + " La segunda sala tiene " + sala2capacidad + " asientos. "
                + " La segunda sala tiene " + sala2pelicula, "Message", JOptionPane.PLAIN_MESSAGE);
    }
        
         String x = "";
         int tickets = 0;
         
    public void capturarDatosdeBoletos() {
        x = Usuario.pelicula.getText();
        if (x.equals(sala1pelicula)) {
            tickets = Integer.parseInt(Usuario.boletos.getText());
            for (int tickets = 0; tickets <= sala1capacidad; tickets++) {
        }} else {
            tickets = Integer.parseInt(Usuario.boletos.getText());
            for (int tickets = 0; tickets <= sala2capacidad; tickets++) {
             }
        }
    }
        
        public void imprimirDatosdeUsuario(){
        JOptionPane.showMessageDialog(null,"Has comprado los tickets exitosamente. " 
                + " La pelicula que elegistes es " + x
                + " La cantidad de tickets que comprastes son: " + tickets
                + " Los asientos que elegistes son " , "Message", JOptionPane.PLAIN_MESSAGE);
    }
}

