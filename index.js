const readline = require('readline-sync')
const robots ={

  text:require('./robots/text')

}

async function  start() {
    const content = {}
        content.searchTerm = askAndReturnSearchTerm()
        content. prefix = askAndReturnPrefix()

       await robots.text(content)

        function askAndReturnSearchTerm(){
            return readline.question('type a wikipedia search term: ')
        }
        
        function askAndReturnPrefix(){
            const prefixes= ['who is','what i','the history of']
            const selectprefixIndex= readline.keyInSelect(prefixes,'choose one option: ')
            const selectdPrefixText = prefixes[selectprefixIndex]
            return selectdPrefixText
        }

   console.log(content)
}
start()