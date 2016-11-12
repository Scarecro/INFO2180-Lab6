<?php

  // accept a term (keyword)
  // respond with a value

  if(isset($_GET['q']))
    $query = $_GET['q'];

  $definition = [
      "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
      "bar" => "A place that sells alcholic beverages",
      "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
      "html" => "The standard markup language for creating web pages and web applications.",
      "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
      "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
      "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
  ];
  if(isset($_GET['all']) && $_GET['all']==true){
    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<entries>';

    foreach($definition as $key => $val){
      $xml .='<definition name="'.$key.'" author="author">';
      $xml .= $val;
      $xml .= '</definition>';
    }

    $xml .= '</entries>';
    print $xml;
  }
  else{
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
  }


?>