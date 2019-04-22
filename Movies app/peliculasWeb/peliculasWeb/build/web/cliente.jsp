<%-- 
    Document   : cliente
    Created on : Dec 5, 2017, 5:50:26 PM
    Author     : juana
--%>

<%@page import="Modelo.sala"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>cliente 2</title>
        
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.css">
  
   <script src="css/modernizr-2.8.3-respond-1.4.2.min.js"></script>
  <script src="bootstrap/bootstrap-theme.css"></script>
 <link href="https://fonts.googleapis.com/css?family=Catamaran|Indie+Flower" rel="stylesheet">

 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    </head>
    <body>
         <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="jumbotron text-center">
				<h2>
					Cine Tec
				</h2>
				<p>
					La mejor opcion en cines
				</p>
				
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="container text-center">


    <div class="col-sm-3">
      
      <a href="#demo" data-toggle="collapse">
        <div class="thumbnail">
          <img src="paris.jpg" alt="Paris" width="400" height="300">
          <p><strong> <% sala obj= new sala();
        obj=(sala)request.getAttribute("ObjetoJava");
        if (obj!= null){
            out.println(obj.getPelicula());
            
             
        }
        %></strong></p>
          
        </div>
      </a>
      <div id="demo" class="collapse">
        <p> Sala 1 </p>
        <p>Precio por ticket es: <%out.println(obj.getPrecio());%></p>
        <p>Member since 1988</p>
      </div>
    </div>
    <div class="col-sm-3">
      
      <a href="#demo2" data-toggle="collapse">
       <div class="thumbnail">
          <img src="paris.jpg" alt="Paris" width="400" height="300">
          <p><strong>Paris</strong></p>
         
        </div>
      </a>
      <div id="demo2" class="collapse">
        <p>Sala 2</p>
        <p>Precio por ticket es: <%out.println(obj.getPrecio2());%></p>
        <p>Member since 1988</p>
      </div>
    </div>
 
	</div>
                </div>
		
		<div class="col-md-6">
			<h2>
				Heading
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a class="btn" href="#">View details »</a>
			</p>
		</div>
	</div>
</div>
        
    </body>
</html>
