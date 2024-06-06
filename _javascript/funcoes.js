function mudaFoto(foto) /* método mudaFoto, function(função), do JavaScritp, chamada "mudaFoto", essa function(função) vai receber uma parâmetro que é (foto), nessa function(função) */
{
    document.getElementById("icone").src = foto; /* document.getElementById, serve para retornar um elemento do DOM que é identificado por um ID específico, retorna a referência do elemento através do seu ID(icone id img) colocar o id do icone, no exemplo o id é icone, modificar o icone, utilizando o parâmetro .src(origem) = foto, ou seja, muda pra foto */
}