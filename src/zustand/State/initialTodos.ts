
import create from 'zustand';
const useStore = create(set => (
 { 
  addData:()=>{

    console.log("---add---data")
  },
  update:()=>{


  },
  data:[
  {
    text: "Walk the dog",
    complete: true
  },
  {
    text: "Make app",
    complete: false
  }
]}))

