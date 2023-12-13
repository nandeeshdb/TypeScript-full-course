let Score:number | string  = 33
Score="nandeesh"


type User3={
    name:string
    id:number
}

type Admin={
    username:string
    id:number
}

const createUser5 : User3 | Admin ={name:"",id:1}


// in functions
function getDbId(id:number | string) {
    if(typeof id==="string"){
        id.toUpperCase
    }
    if(typeof id==="number"){
        id +2
    }
}

//in arrays
const myarray1:number[] = []
myarray1.push(1)

const myarray2:string[] =[]
myarray2.push('aaaaa')

const myarray3:(number | string)[] = []
myarray3.push(1)
myarray3.push("bbbb")

