<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->options('/{routes:.+}', function ($request, $response, $args){
    return $response;
});

// $app->get('/[{name}]', function (Request $request, Response $response, array $args) {
//     // Sample log message
//     $this->logger->info("Slim-Skeleton '/' route");

//     // Render index view
//     return $this->renderer->render($response, 'index.phtml', $args);
// });

$app->get('/categorias', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM categoria");
   $sth->execute();
   $categoria = $sth->fetchAll();
   return $this->response->withJson($categoria);
});