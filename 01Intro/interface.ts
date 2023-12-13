
interface user6 {
    readonly id : number
    name:string
    email:string
    googleId?:string

    startTrail:()=>boolean  // it is method  with return type boolean

}

const CreateUser6 : user6 = {id:1,name:"",email:"",
startTrail:()=>{
    return false
}
}