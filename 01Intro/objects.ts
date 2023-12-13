let User={name:"nandeesh",age:21}


function createUser({name:string,isPaid:boolean}){
}

// createUser({name:'bbb',isPaid:false,email:'nananadd'})  we cant add email because in object literal it is not defined  
// we can define it in an optional way

let Uuser={name:'bbb',isPaid:false,email:'nananadd'}
createUser(Uuser)



function createCourse():{name:string,price:number}{
    return {name:"aaa",price:12}
}




//type aliases

type User1 ={
    name:string;
    phoneno:number;
    present:boolean
}

function createUser1 (user:User1):User1{
    return{name:"b",phoneno:1,present:true}
}

createUser1({name:"a",phoneno:0,present:true})