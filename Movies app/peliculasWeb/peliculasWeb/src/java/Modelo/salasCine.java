/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author gab12
 */
public class salasCine {

    /**
     * @param args the command line arguments
     */
    
    
    
    public static void main(String[] args) {
        // TODO code application logic here
        
            
        int choicePeli;
        int choiceRows;
        int choiceCols;
        String choiceNombrePeli;
        Scanner input;
        int countAsiento = 0;
        String choiceTicket;
        
        System.out.println("BIENVENIDO ADMINISTRADOR");
        System.out.println("");
        System.out.println("Crea tu primera sala de cine");
        System.out.println("");
        System.out.print("Ingresa la cantidad de filas: ");
        input = new Scanner (System.in);
        choiceRows = input.nextInt();
        System.out.print("Ingresa la cantidad de columnas: ");
        input = new Scanner (System.in);
        choiceCols = input.nextInt();
        System.out.print("Ingresa el nombre de la película que se reproduce en esta sala: ");
        input = new Scanner (System.in);
        choiceNombrePeli = input.nextLine();
        
        Sala1 primerSala = new Sala1(choiceRows, choiceCols, choiceNombrePeli);
        
        System.out.println("");
        System.out.println("Crea tu segunda sala de cine");
        System.out.println("");
        System.out.print("Ingresa la cantidad de filas: ");
        input = new Scanner(System.in);
        choiceRows = input.nextInt();
        System.out.print("Ingresa la cantidad de columnas: ");
        input = new Scanner(System.in);
        choiceCols = input.nextInt();
        System.out.print("Ingresa el nombre de la película que se reproduce en esta sala: ");
        input = new Scanner(System.in);
        choiceNombrePeli = input.nextLine();

        Sala segundaSala = new Sala(choiceRows, choiceCols, choiceNombrePeli);

        System.out.println("");
        System.out.println("FELICIDADES, HAS CREADO TUS SALAS DE CINE EXITOSAMENTE");
        System.out.println("");
        System.out.println("DATOS");
        System.out.println("");
        System.out.println("PRIMERA SALA");
        System.out.println("Nombre de la película: "+primerSala.getNombre());
        System.out.println("Cantidad de asientos: "+primerSala.getTotalAsientos());
        System.out.println("Visualización de asientos:");
        System.out.println("");
        
        primerSala.visualizarSala();
        
        System.out.println("");
        System.out.println("SEGUNDA SALA");
        System.out.println("Nombre de la película: " + segundaSala.getNombre());
        System.out.println("Cantidad de asientos: " + segundaSala.getTotalAsientos());
        System.out.println("Visualización de asientos:");
        System.out.println("");

        // Aquí va Código para visualizar asientos
        
        segundaSala.visualizarSala();
        
        // Aqui termina
        
        System.out.println("");
        System.out.println("BIENVENIDO USUARIO");
        System.out.println("");
        System.out.println("¿Qué película quieres ver?");
        System.out.println("1. "+primerSala.getNombre());
        System.out.println("2. "+segundaSala.getNombre());
        Scanner input2 = new Scanner (System.in);
        choicePeli = input2.nextInt();
        
        switch(choicePeli){
            case 1: 
                System.out.println("");
                primerSala.visualizarSala();
                System.out.println("¿Cuántos tickets deseas comprar?");
                System.out.print("Elige el ticket que quieres comprar: ");
                input = new Scanner(System.in);
                choiceTicket = input.nextLine();
                Asientos[] Asientos1 = primerSala.crearAsientos();
                for (int i = 0; i < primerSala.getTotalAsientos(); i++){
                    if (choiceTicket.equals(Asientos1[i].getId())){
                        Asientos1[i].setOcupado(true);
                    }
                }
                for (int i = 0; i < primerSala.getTotalAsientos(); i++){
                System.out.println(Asientos1[i].getOcupado());
                }
                break;
            case 2:
                System.out.println("");
                segundaSala.visualizarSala();
                System.out.println("¿Cuántos tickets deseas comprar?");
                break;
        }
    }
}