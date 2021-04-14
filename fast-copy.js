const fsPromises = require('fs/promises')

if (process.argv.length !== 4) {
    console.log('Veullez ne mettre que "Le fichier à copié" et "la destination où il sera copié"\n')
    console.log('Example: node cp.js leFichieràcopier.js ../onLeColleIci.js ')
    process.exit(1)
  }

const fastCopy = async() => {
    try{
// check if the path to copy exist
if (!fsPromises.exists(process.argv[2])) {
    console.log(`Désoler ${process.argv[2]} n\'existe pas`)
    process.exit(1)
  }
  
  //check if the value is a file or a directory 
  const stats =  await fsPromises.stat(process.argv[2])
  if (!stats.isFile()) {
    console.log(`${process.argv[2]} n\'est pas un fichier`)
    process.exit(1)
     
  }
  await fsPromises.copy(process.argv[2],destinationName)
} catch(e){
    console.error(e.message)
}
}
fastCopy()
