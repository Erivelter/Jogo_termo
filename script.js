

let ListaDePalavras=["mundo","vento","visao"];
        
        const n =Math.floor(Math.random()*ListaDePalavras.length)
        palavra_sorteada = ListaDePalavras[n];

        console.log(palavra_sorteada)

       
        const btn_enviar=document.getElementById("btn_enviar")
        btn_enviar.addEventListener("click",vereficador_palavras);
        
        
        function vereficador_palavras(){
            let texto = document.getElementById("box").value;
            if (texto === palavra_sorteada){
                
                for (let i = 0; i < palavra_fracionada.length; i++){
                    document.getElementById(i).innerHTML = palavra_fracionada[i]
                }
            }else{
                const palavra_fracionada = texto.split('')
                for (let i = 0; i < palavra_fracionada.length; i++){
                    if (palavra_fracionada[i] in (palavra_sorteada)){
                        document.getElementById(i).innerHTML = palavra_fracionada[i]
                    }
                }
            }
        }