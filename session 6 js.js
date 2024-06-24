let father = document.getElementById('parent')
let proplems = document.getElementById('fixProplems')
// the inputs and button
let UserName= document.getElementById('username')
let Password = document.getElementById('password')
var confirmpassword = document.getElementById('confirmpassword')
let ButtonRegister  =  document.getElementById('buttonREGISTER')
console.log(confirmpassword);
var count = 0

ButtonRegister.onclick = function(Event){
    
    if (UserName.value == "")
        {
            let prag = document.createElement('p')
            prag.innerHTML='❶ USERNAME : this cannot be empty'
            prag.style='color:red;'
            proplems.appendChild(prag)
            
        }
        
        if (Password.value.length < 8)
            {
                let prag = document.createElement('p')
                prag.innerHTML='❷ password should be at least 8 characters long '
                prag.style='color:red;'
                proplems.appendChild(prag)
                
            }
            
            
        if (confirmpassword.value == Password.value)
        {
            let prag = document.createElement('p')
            prag.innerHTML=''
            proplems.appendChild(prag)
        }
        else
        {
            let prag = document.createElement('p')
            prag.innerHTML='❸ Password do not match'
            prag.style="color:red;"
            proplems.appendChild(prag)
            console.log(prag);
        }        
                        
                    
}