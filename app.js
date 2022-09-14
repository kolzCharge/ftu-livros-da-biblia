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
}
  
var simeao1=0
var juda1=0

   
    function juda() {
       juda1 += 10
        
    }
   
    function sim() {
        simeao1 += 10
     }
 
   function res1(){
  document.getElementById("resultadotribos").innerHTML= " simeão: "+ simeao1 + " juda: " + juda1}