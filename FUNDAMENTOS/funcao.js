function imprimirSoma(a,b)
{

    console.log(a + b);
}

imprimirSoma(3,3)


function soma(a,b=0)
{
    return a+b
}

console.log("A soma é "+soma(2,3))