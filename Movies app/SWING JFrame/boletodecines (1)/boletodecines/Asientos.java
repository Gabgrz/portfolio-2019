/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package boletodecines;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

/**
 *
 * @author Karen
 */
public class Asientos {
    

    Icon res = (UIManager.getIcon("OptionPane.errorIcon"));

    public Asientos() {
        Administrador a = new Administrador();
        transaccion t = new transaccion();
        int rows = t.getSala1fila();
        int columns = t.getSala1columna();
        JPanel panel = new JPanel(new GridLayout(t.getSala2columna(),t.getSala1fila()));
        for (int i = 1; i <= t.getSala1fila(); i++) {
            for (int x = 1; x <= t.getSala1columna(); x++) {
                final JToggleButton button = new JToggleButton("Row " + i + " seat " + x);
                button.addActionListener(new ActionListener() {

                    @Override
        public void actionPerformed(ActionEvent actionEvent) {
                        AbstractButton abstractButton = (AbstractButton) actionEvent.getSource();
                        boolean selected = abstractButton.getModel().isSelected();
                        if (selected) {
                            button.setIcon(res);
                        } else {
                            button.setIcon(null);
                        }
                    }
                });
                panel.add(button);
            }
        }
        final JFrame frame = new JFrame("JToggleButton Test");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(panel);
        frame.pack();
        frame.setLocation(150, 150);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {

            @Override
        public void run() {
                Asientos asientos = new Asientos();
            }
        });
    }
}

