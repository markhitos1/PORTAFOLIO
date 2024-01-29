
const card = document.querySelector('.card');
const button = document.querySelector('.btn-color');
const padreButton = document.querySelector('.card-body');
const infoTabla = document.querySelector('.info-table');
const btn_Lenguaje = document.querySelector('.idioma');
const text_profecion = document.getElementById('title-text');
const text_Personal = document.querySelector('.card-text')
const text_juego = document.getElementById('text-juego');
const text_project = document.querySelector('.text-proyectos');
const text_exp = document.querySelector('.exp')




//text_profecion.parentNode.removeChild(text_profecion);

var contador=1;
btn_Lenguaje.addEventListener('click',function(){
  contador++
 const changeLenguage = async () =>{
    const requestJson = await fetch('./json/en.json')
    const texts = await requestJson.json()
    const txt = texts.profile;
    const rol = txt.rol;
    const description = txt.description;
    const project = txt.titleProject;
    const txtExp = txt.titleExp;
    const textGamer = txt.descriptionGamer
    text_Personal.innerHTML = description
    text_profecion.innerHTML = rol ;
    text_project.innerHTML = project;
    text_juego.innerHTML = textGamer;
    text_exp.innerHTML = txtExp;
    button.textContent = 'Download cv';
   } 


  if( contador == 2 ){
    changeLenguage() 
    }
  if(contador == 3){
    location.reload()
  }
 
 console.log(contador)
 
})




	