const API = "https://localhost:3000/creategame";
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('userName').value;
  const data = await getData(id);
  showData(data);
})

    const getData = async (id) => {
        const apiURl = id ? `${API}${id}` : API;
        console.log(apiURl);
        console.log(id);
        try {
          const response = await fetch(apiURl);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log('Fetch Error', error);
        };
      };


// async signUp() {
//     const apiUrl = `${API}`;
//     const options = {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "same-origin",
//       body: JSON.stringify({
//         name: this.Name,
//         email: this.email,
//         password: this.password,
//       })
//     };

//     try {
//       const response = await fetch(apiUrl, options);
//       this.data = await response.json();