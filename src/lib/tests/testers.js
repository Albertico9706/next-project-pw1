export default async function testCreate(){
    const data=JSON.stringify(rest2)
    const response=await fetch("http://localhost:3001/restaurants/", 
            {
            method:"POST",
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:data
             });

           
            return response
}


/* const rest1={
  name: "The Golden Spoon",
  description:
    "A fine dining experience with a menu that changes daily based on the freshest ingredients available.",
  address: "123 Main St. Anytown USA",
  score: 4.5,
  ratings: 100,
  image: "https://source.unsplash.com/480x300/?restaurant&random=1"} */

  const rest2={
    name: "The Golden Knife",
    description:
      "A fine dining experience with a",
    address: " Anytown USA",
    score: 4.5,
    ratings: 100,
    image: "https://source.unsplash.com/480x300/?restaurant&random=1"}
        