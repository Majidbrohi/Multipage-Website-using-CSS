import { url } from "inspector";

type DataItem = {
    names: string;
    img:any;
    detail: string;
  };
  
  // Create an array of objects that follow the 'DataItem' type
  let data: DataItem[] = [
    {
      names: "Adnan Khan",
      img: url(),  // Calling url() function to get the image URL
      detail: "Detail about Adnan Khan"
    },
    {
      names: "Ali Ahmed",
      img: url(),  // Replace with a different URL if needed
      detail: "Detail about Ali Ahmed"
    },
    {
      names: "Sara Malik",
      img: url(),  // Replace with a different URL if needed
      detail: "Detail about Sara Malik"
    }
  ];
  