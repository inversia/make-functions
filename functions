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
