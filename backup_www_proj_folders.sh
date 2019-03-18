

function bk_cordova_proj1(){
    mkdir -p projetos_www/cordova_proj1
    cp -r ./projetos/cordova_proj1 ./projetos_www/cordova_proj1/www
    cp ./projetos/cordova_proj1/config.xml ./projetos_www/cordova_proj1/
    cp ./projetos/cordova_proj1/package.json ./projetos_www/cordova_proj1/
}

function bk_cordova_proj2_camera(){
    mkdir -p projetos_www/cordova_proj2_camera
    cp -r ./projetos/cordova_proj2_camera/www ./projetos_www/cordova_proj2_camera
    cp ./projetos/cordova_proj2_camera/config.xml ./projetos_www/cordova_proj2_camera/
    cp ./projetos/cordova_proj2_camera/package.json ./projetos_www/cordova_proj2_camera/

}

function bk_cordova_proj3_geo(){
    mkdir -p projetos_www/cordova_proj3_geo
    cp -r ./projetos/cordova_proj3_geo/www ./projetos_www/cordova_proj3_geo
    cp ./projetos/cordova_proj3_geo/config.xml ./projetos_www/cordova_proj3_geo/
    cp ./projetos/cordova_proj3_geo/package.json ./projetos_www/cordova_proj3_geo/

}

function bk_cordova_proj4_contatos(){
    mkdir -p projetos_www/cordova_proj4_contatos
    cp -r ./projetos/cordova_proj4_contatos/www ./projetos_www/cordova_proj4_contatos
    cp ./projetos/cordova_proj4_contatos/config.xml ./projetos_www/cordova_proj4_contatos/
    cp ./projetos/cordova_proj4_contatos/package.json ./projetos_www/cordova_proj4_contatos/

}

function bk_jquerymob_menu(){
    mkdir -p projetos_www/jquerymob_menu
    cp -r ./projetos/jquerymob_menu/www ./projetos_www/jquerymob_menu
    cp ./projetos/jquerymob_menu/config.xml ./projetos_www/jquerymob_menu
    cp ./projetos/jquerymob_menu/package.json ./projetos_www/jquerymob_menu
}


function bk_www_proj_folders(){
    bk_cordova_proj1
    bk_cordova_proj2_camera
    bk_cordova_proj3_geo
    bk_cordova_proj4_contatos
    bk_jquerymob_menu
}

bk_www_proj_folders
