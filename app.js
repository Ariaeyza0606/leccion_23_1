window.addEventListener("load", function(){
    var calcular = document.getElementById("calcular");
    calcular.addEventListener("click",function(){
        var nombre = (document.getElementById("nombre").value);
        var edad = (document.getElementById("edad").value);
        var sexo = (document.getElementById("sexo").value);
        var resultado = document.getElementById("resultado");
        var persona1 = new personaPresentacion(nombre, edad,sexo);
        resultado.innerHTML = persona1.presentacion();
    });
    function personaPresentacion(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.mayorDeEdad = (this.edad >= 18);
        this.presentacion = function(){
            return "Hola, mi nombre es " + (this.nombre) + ", tengo " + (this.edad) + " soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad.";
        }
    }
});