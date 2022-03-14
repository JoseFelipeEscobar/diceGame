const API = "http://localhost:3000/game";
const APIBet="http://localhost:3000/startGame";
const form = document.getElementsByTagName('form')[0];
const betform = document.getElementsByTagName('form1')[0];

//nombre de los apostadores
form.addEventListener('submit', async function(event){
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const player3 = document.getElementById('player3').value;
    const data = await getData(player1,player2,player3);
})

//formulario de las apuestas
betform.addEventListener('submit',async function(event){
    event.preventDefault();
    const bet1 = document.getElementById('player1').value;
    const bet2 = document.getElementById('player2').value;
    const bet3 = document.getElementById('player3').value;
    const data = await getBet(bet1,bet2,bet3);
})

/**funcion para guardar los nombres de los jugadores en la base de datos
 * y traer un json de respuesta
 * 
 * @params player1
 * @params player2
 * @params player3
*/
const postData = async (player1,player2,player3)=>{
    const apiURl = `${API}`
    // console.log(apiURl);
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({
            gamers:[player1,player2,player3]
        })
    }
    try {
        const response = await fetch(apiURl,options);
        const data = await response.json();
        
        return data;
    }catch(error){
        console.log('Fetch Error', error);
    };
};

/**funcion para ingresar los datos de las apuesta de cada jugador 
 * y traer un json de respuesta 
 * 
 * @params bet1
 * @params bet2
 * @params bet3
*/

const postBet = async (bet1,bet2,bet3)=>{
    const apiURl = `${APIBet}` //llama a la ruta de api de start game
    // console.log(apiURl);
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({
            betGamers:[bet1,bet2,bet3]
        })
    }
    try {
        const response = await fetch(apiURl,options);
        const data = await response.json();
        
        return data;
    }catch(error){
        console.log('Fetch Error', error);
    };
};



// const gamestatus=async()=>{
//     try{
//         const respuesta =await fetch('http://localhost:3000/game');

//         console.log(respuesta);
//         const datos= await() respuesta.

//     }catch{
//         console.log(err);
//     }
// }
// gamestatus();

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); 
// Daniel Granados18:55
// npm install uuid
// Daniel Granados19:06
// router.get('/', (req, res, next) => {
//   try {
//     res.status(200).render('createGame', {});
//   } catch (error) {
//     next(error);
//   }
// });

//    <button
//                 type="submit"
//                 class="primary-button"
//                 onsubmit="getData(userName.value)"
//               >
//                 
{/*

 Search
Falto agregar en el pug
y agregarle al form, la clase form
Daniel Granados19:39
https://copilot.github.com/
Daniel Granados20:14
https://pugjs.org/language/attributes.html
Daniel Granados20:30
//- index.pug
doctype html
html
  head
    style
      include style.css
  body
    h1 My Site
    p Welcome to my super lame site.
    script
      include script.js
Daniel Granados20:33
 script(src='/javascripts/jquery.js') */}