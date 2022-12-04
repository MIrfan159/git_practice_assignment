let N=11;

Let count=0;

for(let i=0;i<=N; i++) {

    if(N%i==0){
      count++;
     }
  }

(count<=2)?console.log("Prime"):console.log("Not prime");