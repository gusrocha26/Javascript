var usuarios = [
{
    nome:"Diego",
    habilidade:["Javascript", "ReactJS", "Redux"]
},
{
    nome:"Gabriel",
    habilidade: [ "VueJS", "Ruby on Raills", "Elixir"]
}

];

for(let names of usuarios){
  console.log("O " + names.nome + " Possui as habilidades: " + names.habilidade.join(' , ') );



}