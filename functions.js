/*

        assert.equal (contains ('foo+bar', '+'), true)
        assert.equal (contains ('foo+bar', '?'), false)

        assert.equal (contains ('мамамылараму', 'мыла'), true)
*/

function contains (str, s) {

    for (let i = 0; i < str.length; i++) {

        for (var j = 0; j < s.length; j++) {

            if (str[i + j] !== s[j]) break 
        }

        if (j === s.length) return true
    }
    return false
}


//   split ('foo+bar+baz', '+')  ['foo', 'bar', 'baz']

function split (str, separator) {

    let words = [] 
    
    let word = '' 
        
    for (let i = 0; i < str.length; i++) {      
                    
        for (var j = 0; j < separator.length; j++){
            
            if (str[i + j] !== separator[j]) break                                 
        } 

        if (j === separator.length){
            i +=  separator.length
            
            words.push (word)
            word = ''
        }

        word += str[i]
    }
    
    words.push (word)
    word = ''

    log.magenta (words)

    return words                            
}

//  assert.deepEqual (join (['foo', 'bar', 'baz'], '+'), 'foo+bar+baz')

function join (strings, separator) {
    
    let result = ''

    for (let i = 0; i < strings.length; i++) {
 
        result += ((i === 0) ? '' : separator) + strings[i]
    }

    log.yellow (result)
    return result   
}

// assert.deepEqual (reverse ('god'), 'dog')

function reverse (string) {

    let result = ''

    for (let i = string.length - 1; i >= 0; i--){

        result += string[i]

    }
    
    log.magenta (result)
    return result
}


// assert.deepEqual (substring ('почему всё так плохо', 7, 3), 'всё')

function substring (string, offset, size) {

    let result = ''

    for (let i = Math.max(offset,0); i < Math.min(offset + size, string.length); i++){

        result += string[i]
    }
   
    log.magenta (result)
    return result
}


// если переиспользовать вышеуказанные функции, то следует использовать сначала split, затем join

// assert.deepEqual (replace ('fooOMGbarOMGbaz', 'OMG', 'GMO'), 'fooGMObarGMObaz')

function replace (string, word, substitution ) {

    let result = ''

    for (let i = 0; i < 0; i++){
        
    }

}

/*

        assert.deepEqual (
            filter (['abc', 'foo', 'qux', 'foo', 'baz'], (x) => x !== 'foo'),
            ['abc', 'qux', 'baz'])

        assert.deepEqual (
            filter (['abc', 'foo', 'qux', 'foo', 'baz'], (x, i) => (i % 2) === 0),
            ['abc', 'qux', 'baz'])
 */

function filter (arr, f) {
    
    let newArr = []


    for (let i = 0; i < arr.length; i++) {

        if (f(arr[i],i) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


const sort = ([first, ...rest]) => (first === undefined)
                                        ? []
                                        : [...sort(rest.filter (x => x < first)),
                                           first,
                                           ...sort(rest.filter (x => x >= first))]

//     rest.filter (x => x < first) //=== [] ? [] : sort(rest.filter (x => x <= first))
//     return
//     rest.filter (x => x > first) //===  ? [] : sort(rest.filter (x => x <= first))

//     return [...a, first, ...b]
//     //слияние массивов concat?
// }

module.exports = { split, contains, join, reverse, substring, replace, filter, sort }


