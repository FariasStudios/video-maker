const readline = require('readline-sync')
function  start() {
    const content = {}
        content.searchTerm = askAndReturnSearchTerm()
        content. prefix = askAndReturnPrefix()

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