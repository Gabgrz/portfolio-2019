/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package salasdecine;
/**
 *
 * @author gab12
 */
public class Asientos {
 
    private Boolean ocupado = false;
    private String id;
    
    public Asientos(){}
    
    public void setId(String id){
        this.id = id;
    }
    
    public String getId(){
        return this.id;
    }
    
    public void setOcupado(boolean ocupado){
    this.ocupado = ocupado;
    }
        
    public Boolean getOcupado(){
        return ocupado;
    }
}