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