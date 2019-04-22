/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package salasdecine;


import java.util.Scanner;

/**
 *
 * @author gab12
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    
            
        static int myMethod(int a, int b){
        
            return a+b;
        
        }
    
    public static void main(String[] args) {
        // TODO code application logic here
        
        
        int result = myMethod(1,2);
        System.out.println("Result is "+result);
        
        int choicePeli;
        int choiceRows;
        int choiceCols;
        String choiceNombrePeli;
        Scanner input;
        int countAsiento = 0;
        String choiceTicket;
        int numTickets;
        Transaccion miTransaccion;
        int resp = 1;
        

       
        
        
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
        
        Sala primerSala = new Sala(choiceRows, choiceCols, choiceNombrePeli);
        
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
        
        primerSala.visualizarSala(primerSala.crearAsientos());
        
        System.out.println("");
        System.out.println("SEGUNDA SALA");
        System.out.println("Nombre de la película: " + segundaSala.getNombre());
        System.out.println("Cantidad de asientos: " + segundaSala.getTotalAsientos());
        System.out.println("Visualización de asientos:");

        segundaSala.visualizarSala(segundaSala.crearAsientos());
        
        Asientos[] Asientos1 = primerSala.crearAsientos();
        Asientos[] Asientos2 = segundaSala.crearAsientos();
        
        while (resp == 1){
        
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
                System.out.println("SALA "+choicePeli);
                
                primerSala.visualizarSala(Asientos1);
                miTransaccion = new Transaccion();
                miTransaccion.compraTicket(primerSala, Asientos1);
                primerSala.visualizarSala(Asientos1);

                break;
                
            case 2:
                System.out.println("");
                System.out.println("SALA " + choicePeli);
                
                segundaSala.visualizarSala(Asientos2);
                miTransaccion = new Transaccion();
                miTransaccion.compraTicket(segundaSala, Asientos2);
                segundaSala.visualizarSala(Asientos2);
                break;
        }
        
            System.out.println("¿Quieres realizar otra compra?");
            System.out.println("1. Sí");
            System.out.println("2. No");
            input2 = new Scanner (System.in);
            resp = input2.nextInt();
        }
        System.out.println("");
        System.out.println("GRACIAS POR VISITARNOS");
    }
}