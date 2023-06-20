// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

let findMatching = (array,string) => {
   let newArray = array.filter((item)=>{
    return item.toUpperCase() === string.toUpperCase()
   })
   return newArray;
}



let fuzzyMatch = (array,string)=> {
    let newValue = array.filter(item=>{
       return  item.startsWith(string)
    })
    return newValue;
}




let matchName = (array,string)=>{
    let newValue = array.filter(item =>{
        if(item.name === string){
            return item;
        }
    })
    return newValue;
}

