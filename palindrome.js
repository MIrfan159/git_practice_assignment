
let str="madam";

let revStr="";

for(let j=str.length-1; j>=0; j--)
    {
  
        revStr+=str[j];

    }
(str==revStr)?console.log("Palindrome"):console.log("Not a Palindrome")