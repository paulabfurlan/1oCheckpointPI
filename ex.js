// Valores padrão
const pipocaPadrao = 10;
const macarraoPadrao = 8;
const carnePadrao = 15;
const feijaoPadrao = 12;
const brigadeiroPadrao = 8;

function microondas(comida, tempo)
{
    let tempoPadrao;
    switch(comida)
    {
        case "pipoca":
            tempoPadrao = pipocaPadrao;
            break;
        case "macarrao":
            tempoPadrao = macarraoPadrao;
            break;
        case "carne":
            tempoPadrao = carnePadrao;
            break;
        case "feijao":
            tempoPadrao = feijaoPadrao;
            break;
        case "brigadeiro":
            tempoPadrao = brigadeiroPadrao;
            break;
        default:
            console.log("Prato inexistente");
            return false;
    }

    if((tempo >= (2 * tempoPadrao)) && (tempo <= (3 * tempoPadrao)))
    {
        console.log("Sua comida queimou");
        return false;
    }
    else if(tempo < tempoPadrao)
    {
        console.log("Tempo insuficiente");
        return false;
    }
    else if(tempo > (3 * tempoPadrao))
    {
        console.log("Kabumm!!!");
        return false;
    }
    else
    {
        console.log("Prato pronto, bom apetite!!!");
        return true;
    }
}

// Valores escritos pelo usuário
let comida = "carne";
let tempo = 46;
microondas(comida,tempo);