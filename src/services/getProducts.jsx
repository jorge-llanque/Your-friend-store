// RECUERDA ESTA REQUEST TIENE UN LÍMITE DE 500 POR MES

// import axios from "axios";

// const API_KEY = "21fa06f557msh8b2ba9e1b674bf2p1d5669jsn3cde9731833d";
// const API_HOST = 'asos2.p.rapidapi.com';
// const API_URL = 'https://asos2.p.rapidapi.com/products/v2/list';


// export default function getProducts() {

//   const options = {
//     method: 'GET',
//     url: API_URL,
//     params: {
//       store: 'US',
//       offset: '0',
//       categoryId: '4209',
//       limit: '48',
//       country: 'US',
//       sort: 'freshness',
//       currency: 'USD',
//       sizeSchema: 'US',
//       lang: 'en-US'
//     },
//     headers: {
//       'x-rapidapi-key': API_KEY,
//       'x-rapidapi-host': API_HOST
//     }
//   };
  
//   axios.request(options).then( response => {
//     console.log(response.data.products);
//   }).catch((error) => {
//     console.error(error);
//   });
// }

import data from "../response.json";

export default function getProducts() {
  console.log(data)
}