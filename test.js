global.log       = require ('ololog')
const { assert } = require ('chai')
const { split, contains, join, reverse, substring, replace} = require ('./functions')

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

    it.only ('replace strings', () => {

        assert.deepEqual (replace ('fooOMGbarOMGbaz', 'OMG', 'GMO'), 'fooGMObarGMObaz')

    })

})


