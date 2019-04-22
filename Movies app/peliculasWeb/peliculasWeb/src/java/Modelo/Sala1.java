/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author gab12
 */
public class Sala1 {
    
    int filas;
    int columnas;
    String nombre;
    Asientos[] misAsientos;
    String[] idLetras = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
    int countAsiento = 0;
           
    public Sala1 (int filas, int columnas, String nombre){
    
        this.filas = filas;
        this.columnas = columnas;
        this.nombre = nombre;
    }
    
    public Asientos[] crearAsientos()    {
    
        countAsiento = 0;
        int totalAsientos = filas*columnas;
        Asientos[] misAsientos = new Asientos[totalAsientos];
        
        for (int i = 0; i < filas; i++) {
            for (int x = 0; x < columnas; x++) {
                
                misAsientos[countAsiento] = new Asientos();
                misAsientos[countAsiento].setId(idLetras[i] + (x+1));
                misAsientos[countAsiento].setOcupado(false);
                countAsiento++;
            }
        }
        return misAsientos;
                     
    }
    
    public String getNombre(){
        return nombre;
    }
    
    public int getTotalAsientos(){
        return filas*columnas;
    }
    
    public void visualizarSala(){
         
        Asientos[] asientosView = this.crearAsientos();
        
        countAsiento = 0;
        
        for (int i = 0; i < filas; i++) {
            for (int x = 0; x < columnas; x++) {
                System.out.print(asientosView[countAsiento].getId() + " ");
                countAsiento++;
            }
            System.out.println("");
        }
    }
}