<?php

$sql=\xeki\module_manager::import_module("xeki_db_sql");

$title = "Funeraria Capillas de la fe";
$description = "Funeraria Capillas de la fe, somos un grupo de personas que saben lo difícil que es la partida de un ser querido.";
//$keyworkds= "funeraria,coorserpark,capillas de la fe, capillas la fe, obituarios, sedes";
\xeki\html_manager::set_seo($title,$description,false);



$query = "SELECT * FROM slider order by order_list asc";
$slider = $sql->query($query);
// for ($i = 0; $i < count($slider); ++$i) $slider[$i]['image'] = ag_prImage($slider[$i]['image'], '1920xauto');

$query = "SELECT * FROM slider_mobile order by order_list asc";
$slider_mobile = $sql->query($query);
// for ($i = 0; $i < count($slider_mobile); ++$i) $slider_mobile[$i]['image'] = ag_prImage($slider_mobile[$i]['image'], '360xauto',true);


$query = "SELECT * FROM slider_presidencial order by order_list asc";
$slider_pr = $sql->query($query);
//for ($i = 0; $i < count($slider); ++$i) $slider[$i]['image'] = ag_prImage($slider[$i]['image'], '1920xauto');
for ($i = 0; $i < count($slider_pr); $i++) {
    $query = "SELECT * FROM slider_presidencial_items_list where slider_presidencial_Ref=".$slider_pr[$i]['id']." order by order_list asc";
    $items = $sql->query($query);
    $slider_pr[$i]['items']=$items;
}

$query = "select * from productos where slug = 'bosque-cenizario'";
$bosque = $sql->query($query);
$bosque = $bosque[0];

// d($slider_pr);
$items_to_print=array();
$items_to_print['slider_main']=$slider;
$items_to_print['slider_presidencial']=$slider_pr;
$items_to_print['slider_mobile']=$slider_mobile;
$items_to_print['bosque']=$bosque;

//d($items_to_print);
\xeki\html_manager::render('index.html',$items_to_print);
