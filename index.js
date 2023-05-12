
const { exec } = require('child_process')
let glob = undefined

async function main(){
    image_search({ query: "48 ore movie poster", moderate: false ,iterations :1})
      .then( results => {
                let result= results[0];
                
                let item = {};
                item.image = result.image;
                item.size= result.size;

                console.log(item)
                result= results[1];
                
                glob = result
                console.log(JSON.stringify(results))
                for ( let p in glob) {
                  // console.log(p)
                }   
      })
  
    }
    
async function main2(){
  const cmd = "dir "
  exec( cmd,  (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    } 
    
    console.log(`stdout:\n${stdout}`);
    let s = "\n \n 393 \n ";
    console.log(s)
    let out = parseInt(s.trim())
    console.log(out)
  });
}


  
main2().catch(console.log);

