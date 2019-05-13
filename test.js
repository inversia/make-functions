'use strict'

const { dim, red, green, cyan, magenta, blue, yellow } = require ('ansicolor').nice

global.log       = require ('ololog').noLocate.noPretty
const { assert } = require ('chai')
const { split, contains, join, reverse, substring, replace, filter, sort } = require ('./functions')

describe ('babayka-lib', () => {

    it ('contains () works (positive)', () => {

        assert.equal (contains ('foo+bar', '+'), true)
    })

    it ('contains () works (negative)', () => {

        assert.equal (contains ('foo+bar', '?'), false)
    })

    it ('contains () works (positive, substring)', () => {

        assert.equal (contains ('мамамылараму', 'мыла'), true)
    })

    it ('contains () works (negative, substring)', () => {

        assert.equal (contains ('мамамылараму', 'пук'), false)
    })

    it ('joins strings with separator', () => {

        assert.deepEqual (join (['foo', 'bar', 'baz'], '+'), 'foo+bar+baz')
    })

    it ('splits strings with separator', () => {

        assert.deepEqual (split ('foo+bar+baz', '+'), ['foo', 'bar', 'baz'])

        assert.deepEqual (split ('2*3', '*'), ['2', '3'])
    })

    it ('splits strings with separator (multiple characters)', () => {

        assert.deepEqual (split ('2плюс3плюс4плюс5', 'плюс'), ['2', '3', '4', '5'])
    })

    it ('reverse strings', () => {

        assert.deepEqual (reverse ('god'), 'dog')

    })

    it ('extracts substring', () => {

                                    // string                 offset size
        assert.deepEqual (substring ('почему всё так плохо',  7,     3),       'всё')
        assert.deepEqual (substring ('почему всё так плохо',  0,     20),      'почему всё так плохо')
        assert.deepEqual (substring ('почему всё так плохо', -9999,  2323123), 'почему всё так плохо')
    })

    it ('replace strings', () => {

        assert.deepEqual (replace ('fooOMGbarOMGbaz', 'OMG', 'GMO'), 'fooGMObarGMObaz')

    })

    it ('filters arrays', () => {
        
        assert.deepEqual (
            filter (['abc', 'foo', 'qux', 'foo', 'baz'], function (x) { return x !== 'qux' }),
            ['abc', 'foo', 'foo', 'baz'])

        assert.deepEqual (
            filter (['abc', 'foo', 'qux', 'foo', 'baz'], function (x, i) { return (i % 2) !== 0 }),
            ['foo', 'foo'])
    })

    it ('sorts arrays', () => {

        assert.deepEqual (sort ([6,3,9,7,1,4,2,7,5,1,8,10]), [1,1,2,3,4,5,6,7,7,8,9,10])

    })


    // x = a || b || c               - либо а, либо б, либо ц
    // x = a && b && c     - 

    it ('debug', () => {      

        function areEqual (a, b, depth = 0) {

            log ('→ '.repeat (depth).dim, a, b)

            if (Array.isArray(a) && Array.isArray(b) && a && b){
            
                if (a.length !== b.length) return false
        
                for (let i = 0; i < a.length; i++){
                    if (!areEqual(a[i], b[i], depth + 1)) return false
                }  
        
            } else if (typeof a === 'object' && typeof b === 'object' && a && b){        
                const keysA = Object.keys(a)
                const keysB = Object.keys(b)

                if (keysA.length !== keysB.length) return false
                
                for(const k of keysA){
                    if (!areEqual(a[k], b[k], depth + 1)) return false
                }
                
            } else return a === b
            
            return true
        }

        //log.bright.magenta (areEqual({'2':[ { foo: 'bar' } ]},{'2':[ { bar: 'baz' } ]}))    // { '2': 'blue' } { '0': [ true ], '2': 'blue' }  
    })


    let rules = [['а', 'a'],['б','b'],['в','v'],['г','g'],['д','d'],['е','e'],['ё','e'],['ж','zh'],['з','z'],['и','i'],['й','y'],['к','k'],['л','l'],['м','m'],['н','n'],['о','o'],['п','p'],['р','r'],['с','s'],['т'],['щ', 'sch'], ['с', 's'], [' ', '_']]

    rules = [...rules, ...rules.map (([a, b]) => [a.toUpperCase (), b.toUpperCase ()])]

    const cyrToLat = rules.map (([a, b]) => [new RegExp (a, 'g'), b])
    const latToCyr = rules.map (([b, a]) => [new RegExp (a, 'g'), b])

    const transliterate = (str, rules) => rules.reduce ((str, [a, b]) => str.replace (a, b), str)

    const transliterateFromCyr = str => transliterate (str, cyrToLat)
        , transliterateToCyr   = str => transliterate (str, latToCyr)

    it.only ('debug', () => {

        assert.equal (transliterateFromCyr ('Съешь же ещё этих мягких французских булок да выпей чаю'),
                      'Sjesh_zhe_esche_etih_myagkih_frantsuzskih_bulok_da_vipey_chau')

        assert.equal (transliterateToCyr ('sjesh_zhe_esche_etih_myagkih_frantsuzskih_bulok_da_vipey_chau'),
                      'Съешь же ещё этих мягких французских булок да выпей чаю')
 
        //assert.equal (transliterateFromCyr ('Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства'),
                          
    })
})


