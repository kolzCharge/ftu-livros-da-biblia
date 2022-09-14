var livros=[ "GÊNESIS","ÊXODO","LEVÍTICO","NÚMEROS","DEUTERONÔMIO", "JOSUÉ", "JUÍZES", "RUTE","I SAMUEL", "II SAMUEL",
 "I REIS", "II REIS", "I CRÔNICAS", "II CRÔNICAS", "ESDRAS", "NEEMIAS", "ESTER", "JÓ", "SALMOS", "PROVÉRBIOS", "ECLESIASTES", "CÂNTICO DOS CÂNTICOS",
  "ISAÍAS", "JEREMIAS", "LAMENTAÇÕES", "EZEQUIEL", "DANIEL", "OSÉIAS", "JOEL", "AMÓS", "OBADIAS", "JONAS", " MIQUÉIAS",
   "NAUM", "HABACUQUE", "SOFONIAS", "AGEU", "ZACARIAS", "MALAQUIAS", " MATEUS", "MARCOS", "LUCAS", "JOÃO", " ATOS", "ROMANOS", "I CORINTIOS",
    "II CORINTIOS", "GÁLATAS", "EFÉSIOS", "FILIPENSES", "COLOSSENSES", " I TESSALONICENSES", " II TESSALONICENSES", "I TIMÓTEO", "II TIMÓTEO",
     "TITO", "FILEMOM", "HEBREUS", "TIAGO", "I PEDRO", "II PEDRO", "I JOÃO", "II JOÃO", "III JOÃO", " JUDAS", "APOCALIPSE"]

    
    
   

function sortear1() {
    var quallivro= parseInt(Math.random() *66)
   var ide = document.getElementById("teste")
   ide.innerHTML= livros[quallivro]
   console.log(quallivro)
   intervalo= setInterval(contando,1000)
}
 

   
    var interval
var sec=0
var min=0
var botao=0




 
 
function pausar(){
  clearInterval(intervalo)   

  }
 
   
    
function parar(){
   clearInterval(intervalo)
 
   sec=0
 min=0
document.getElementById('contagem').innerHTML= "00:00"
 }
function doisDigitos(digito){
  if(digito <10){
    return "0"+digito
  }
  else{
    return digito
  }
}

function contando(){
  sec++
  if(sec==60){
    min++
    sec=0
  }
  document.getElementById('contagem').innerHTML=doisDigitos(min)+':'+doisDigitos(sec)
  
}

