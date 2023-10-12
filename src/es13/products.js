import fetch from "node-fetch";

const response = await fetch ("https://api.escuelajs.co/api/v1/categories"); 
const products = await response.json();

export { products };