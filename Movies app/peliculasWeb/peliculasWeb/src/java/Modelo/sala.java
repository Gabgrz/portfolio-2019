/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author juana
 */
public class sala {
    String pelicula;
    int precio;
    int filas;
    int Columnas;
    String pelicula2;
    int precio2;
    int filas2;
    int Columnas2;
public sala() {
        this.pelicula="";
        this.precio=0;
        this.filas=0;
        this.Columnas=0;
        this.pelicula2="";
        this.precio2=0;
        this.filas2=0;
        this.Columnas2=0;
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    public String getPelicula2() {
        return pelicula2;
    }

    public void setPelicula2(String pelicula2) {
        this.pelicula2 = pelicula2;
    }

    public int getPrecio2() {
        return precio2;
    }

    public void setPrecio2(int precio2) {
        this.precio2 = precio2;
    }

    public int getFilas2() {
        return filas2;
    }

    public void setFilas2(int filas2) {
        this.filas2 = filas2;
    }

    public int getColumnas2() {
        return Columnas2;
    }

    public void setColumnas2(int Columnas2) {
        this.Columnas2 = Columnas2;
    }
    

    public String getPelicula() {
        return pelicula;
    }

    public void setPelicula(String pelicula) {
        this.pelicula = pelicula;
    }

   

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getFilas() {
        return filas;
    }

    public void setFilas(Integer filas) {
        this.filas = filas;
    }

    public Integer getColumnas() {
        return Columnas;
    }

    public void setColumnas(Integer Columnas) {
        this.Columnas = Columnas;
    }
   
    
    
    
}
