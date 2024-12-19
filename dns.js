const dns = require('node:dns')

const searchedUrl = 'Google.com'

// dns.resolve4(searchedUrl, (err, addresses) =>{
//   if (err) {
//     console.log('url não encontrado')
//     return
//   }
//   console.log(addresses)
// })


async function bootstrap(){

  const addresses = await dns.promises.resolve4(searchedUrl)
  console.log(addresses)

  const nameServer = await dns.promises.resolveNs
}

bootstrap()


