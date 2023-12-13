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


//ReadOnly , Optional, Union

type User2 ={
    readonly id:number
    name:string
    phonenumber:number
    creditcarddetails?:string // its optional '?'
}

function createUser2(user2:User2){}


createUser2({id:123,name:"aa",phonenumber:22})


//union '&'

type CardDeatils1 ={
    name:string
}

type CardDetails2={
    mobilenumber:number
}

type CardDetails3=CardDeatils1 & CardDetails2 & {
    cvv:number
}

function createUser3(user3:CardDetails3){
}

createUser3({name:"",mobilenumber:12,cvv:123})