let quebrada = false;
        function mudaLampada(tipo) {
            if(tipo == 1) {
                arquivo = "img/lampada-acesa.png";
            }
            if(tipo == 2) {
                arquivo = "img/lampada-apagada.png";
            }
            if(tipo == 3) {
                arquivo = "img/lampada-quebrada.png";
            }
            if (!quebrada){
                document.getElementById("luz").src= arquivo;
                if (tipo == 3){
                    quebrada = true;
                }
            }
        }