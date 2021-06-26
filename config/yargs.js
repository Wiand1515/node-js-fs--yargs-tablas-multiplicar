const argv = require('yargs')
            .option('n', {
                alias: 'number',
                type: 'number',
                demandOption: true,
                describe: 'Numero base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'list',
                type: 'boolean',
                default: false,    
                describe: 'muestra la tabla en consola'    
            })
            .option('t', {
                alias: 'times',
                type: 'number',
                demandOption: true,
                describe: 'Hasta donde queremos que llegue la tabla de multiplicar'

            })
            .check( (argv, options) => {
                console.log('yargs',argv)
                if( isNaN( argv.n )) {
                    throw 'El argumento debe ser un numero'
                }
                return true
            } )
            .argv;

module.exports = argv;