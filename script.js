var contador=0;
function abrirMenu(){
    if(contador==0){
        var menu=document.getElementById("hambuguesa").style.display="block";
        contador++
    }else{
        var menu=document.getElementById("hambuguesa").style.display="none";
        contador--;
    }
    
}

window.addEventListener("scroll",function(){
    progreso();
  
})

//Esto es para animar las barras de carga de herramientas cuando la pagina haga scroll, porque no se 
//usar Librerias todavia xd
function progreso(){
    var num= document.body.scrollTop;
    var bar= document.getElementById("bar");
    var bar1= document.getElementById("bar1");
    var bar2= document.getElementById("bar2");
    var bar3= document.getElementById("bar3");
    var bar4= document.getElementById("bar4");
    console.log(num);

    if(num>350 && num<2400 || num==1688){ //(num==800 || num==1688)
        bar.classList.add("uno")
        bar1.classList.add("cinco") //Si...tendria que haber cambiado el orden... pero que flojera
        bar2.classList.add("dos")
        bar3.classList.add("tres")
        bar4.classList.add("cuatro")
    }else{
        bar.classList.remove("uno")
        bar1.classList.remove("cinco")
        bar2.classList.remove("dos")
        bar3.classList.remove("tres")
        bar4.classList.remove("cuatro")
    }
}

