var  endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro:"Centro",
    cidade:"Sao Paulo",
    uf: "SP"


};
//rockset001
console.log("o usuario mora em "+ endereco.cidade + "/" + endereco.uf + ", no bairro" + endereco.bairro + ", na rua"+ `"${endereco.rua}"` + " com n"+ endereco.numero);