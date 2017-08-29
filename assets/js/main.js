"use strict";
let map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

let  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

let map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

let map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

let map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                  I  ",
    "         *                             *                       W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


let mapa=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

function obtenerMapa (index ){
    let mapas = [mapa, map1, map2, map3, map4, map5];
    let m = mapas [index];
    let ret = [];
    for (let i = 0; i < m.length; i++){
      ret[i]=[];
      for (let j = 0; j < m[0].length; j++) {
        ret[i][j] = m[i][j];
      }
    }
    return ret;
}

let indexMap = 0;
let mapaA = obtenerMapa(indexMap);

let x;
let y;

function genera(mapaA, imagen) {
    $("#tablero").html('');
    let tabla = "";
    tabla+="<table class='celda'>";
        for(let i = 0; i < mapaA.length; i++){
            tabla+="<tr>";
            for(let j = 0; j < mapaA[i].length; j++){
                if(mapaA[i][j]=='*'){
                    tabla+="<td class='pared'></td>"
                }else if(mapaA[i][j]=='o'){
                    tabla+="<td class="+imagen+"></td>"
                    x=i;
                    y=j
                }else if(mapaA[i][j]=='W'){
                    tabla+="<td class='final'></td>"
                }else{
                    tabla+="<td class='libre'></td>"
                }
            }
            tabla+="</tr>";
        }
    tabla+="</table>";
    
    $("#tablero").append(tabla);
}

$(document).ready(function(){
    $('#inicio').click(function(tabla){
        $('#global').hide();
        $('#tablero').show();
        genera(mapaA,'salida');
        $(document).on('keydown', function(e){
            e.preventDefault();
            if(e.keyCode==37){
            mover (0, -1, 'left');    
            }else if(e.keyCode == 40){
            mover (1, 0, 'down');  
            }else if(e.keyCode == 38){
            mover (-1, 0, 'up');  
            } else if(e.keyCode == 39){
            mover (0, 1, 'right');  
            }
        });
    });
});

let time;
function mover (a, b, className){
    if (x == 0 || y == 0 || x == mapaA.length - 1 || y == mapaA[0].length) {
        mapaA = obtenerMapa(indexMap); 
        genera(mapaA, className);
        clearTimeout(time);
    }
    else if (mapaA[x + a][y + b]=='W') {
        alert("Atrapalo ya!!!");
        indexMap++;
        mapaA = obtenerMapa(indexMap);
        genera(mapaA, 'salida');
        clearTimeout(time);
    }
    else if(mapaA[x+a][y+b]!='*'){
        mapaA[x][y]=' ';
        x+=a;
        y+=b;        
        mapaA[x][y]='o';
        genera(mapaA,className);
        clearTimeout(time);
    }
    time = setTimeout(function(){ mover(a, b, className) }, 100);
}

$(document).ready(function(){
    $('#instruccion').hide();
    $('#main').hide();
    $('#creditos').hide();
    
    $('#guia').on('click',function(){
        $('#boton').hide();
        $('#instruccion').show();
        $('#main').show();
    });
    
    $('#credito').on('click',function(){
        $('#boton').hide();
        $('#creditos').show();
        $('#main').show();
    });
     
});










