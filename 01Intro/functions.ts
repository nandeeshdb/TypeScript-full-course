function addTwo(num:number):number{
    return num+2
    // return "2"
    
}

function isSignin(signIn:boolean){
    return signIn
}

const Hero=(a:string):string=>{
    return `hero is ${a}`
}


function consoleError(errmssg:string):void{
    console.log(errmssg)
    //void fundtions doesnot return anything
}

//a never types observe a value which is never observed . In a return type this means
// that the function throws an exception or ternimates exceution of the program 
// never also appears when TypeScript determines there's nothing left in a union 
function handleError(errmssg:string):never{
    throw new Error(errmssg)
}


addTwo(4)
isSignin(false)
Hero("nandeesh")