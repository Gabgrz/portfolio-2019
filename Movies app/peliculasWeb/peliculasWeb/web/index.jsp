<%-- 
    Document   : index
    Created on : Dec 3, 2017, 6:12:10 PM
    Author     : juana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
 
  <title>Peliculas Admin</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/estilos.css">
   <script src="css/modernizr-2.8.3-respond-1.4.2.min.js"></script>
  <script src="bootstrap/bootstrap-theme.css"></script>
 <link href="https://fonts.googleapis.com/css?family=Catamaran|Indie+Flower" rel="stylesheet">

 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <style>
 
  </style>
</head>
<body>
<!--
    you can substitue the span of reauth email for a input with the email and
    include the remember me checkbox
    -->
    <div class="container">
        <div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
           
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"> Administrador</p>
            <hr>
            <ul class="nav nav-tabs">
                 <li class="active"><a href="#sala1" data-toggle="tab">sala1</a></li>
                 <li><a href="#sala2" data-toggle="tab">sala2</a></li>
            </ul>
            <div class="tab-content ">
                <div class="tab-pane active" id="sala1">
                    <form class="form-signin" action="controlador" method="POST">
                     
                     <label id="LabelF" >Pelicula:</label> <br>
                     <input type="text" id="pelicula" name="pelicula"class="form-control center-block cent-text"c placeholder="Pelicula" required autofocus>
                     <label id="LabelF">Precio de Boleto:</label> </br>
                        <input type="number" min="0" id="PrecioBoleto" name="PrecioBoleto" class="form-control center-block  cent-text" placeholder="precio" required>
                     <label id="LabelF">Tamaño de sala:</label> <br>
                     <input type="number" min="0"id="largo" name="largo" class="form-control center-block  cent-text" placeholder="Largo" required>
                     <input type="number" min="0" id="ancho"  name="ancho"class="form-control center-block  cent-text" placeholder="Ancho" required>
                       
                
                
                     </br>
               
                
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">submit</button>
                 </div> 
                <!--
        
                 <div class="tab-pane active" id="sala2">
                 
                     
                     <label id="LabelF" >Pelicula:</label> </br>
                     <input type="text" id="pelicula2"  name="pelicula2"class="form-control center-block cent-text"c placeholder="Pelicula2" required autofocus>
                      <label id="LabelF">Precio de Boleto:</label> </br>
                        <input type="number" min="0" id="PrecioBoleto2"name="PrecioBoleto2" class="form-control center-block  cent-text" placeholder="precio" required>
                     <label id="LabelF">Tamaño de sala:</label> </br>
                        <input type="number" min="0" id="largo2" name="largo2" class="form-control center-block  cent-text" placeholder="Largo" required>
                     <input  type="number" min="0" id="ancho2" name="ancho2" class="form-control center-block  cent-text" placeholder="Ancho" required>
                   
                
                
                     </br>
               
                
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">submit</button>-->
                  </form><!-- /form -->
                </div>
            </div>
        </div><!-- /card-container -->
    </div><!-- /container -->
   
</body>
</html>