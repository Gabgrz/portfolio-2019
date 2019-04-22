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
public class Transaccion {
    
   
            Scanner input;
            int numTickets;
            String choiceTicket;
            String[] ticketsComprados = new String[20];
            
    public Transaccion(){}    
        
    public void compraTicket(Sala miSala, Asientos[] Asientos1){
    
            System.out.println("");
            System.out.print("¿Cuántos tickets deseas comprar? ");
            System.out.println("");
            input = new Scanner(System.in);
            numTickets = input.nextInt();

            for (int i = 0; i < numTickets; i++){
                System.out.print("Elige el ticket que quieres comprar: ");
                input = new Scanner(System.in);
                choiceTicket = input.nextLine();
                ticketsComprados[i] = choiceTicket;
                for (int i2 = 0; i2 < miSala.getTotalAsientos(); i2++){
                    if (choiceTicket.equals(Asientos1[i2].getId())){
                        Asientos1[i2].setOcupado(true);
                    }
                }
            }
            System.out.println("");
            System.out.println("Se ha registrado tu compra exitosamente");
            if(numTickets > 1){
                System.out.println("Has reservado los siguientes asientos: ");
                for(int i = 0; i < ticketsComprados.length && ticketsComprados[i] != null; i++){
                    System.out.print(ticketsComprados[i]+" ");
                }
                
            }
        System.out.println("");
        System.out.println("");
    }
}