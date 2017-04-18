const Tk = require('./lib/Tokenizer')

new Tk({ decodeEntities: true }, {

    onattribdata(text) {
        console.log('onattribdata', JSON.stringify(text))
    },

    onattribend(text) {
        console.log('onattribend', JSON.stringify(text))
    },

    onattribname(text) {
        console.log('onattribname', JSON.stringify(text))
    },

    oncdata(text) {
        console.log('oncdata', JSON.stringify(text))
    },

    onclosetag(text) {
        console.log('onclosetag', JSON.stringify(text))
    },

    oncomment(text) {
        console.log('oncomment', JSON.stringify(text))
    },

    ondeclaration(text) {
        console.log('ondeclaration', JSON.stringify(text))
    },

    ondirective(text) {
        console.log('ondirective', JSON.stringify(text))
    },

    onattribdirective(text) {
        console.log('onattribdirective', JSON.stringify(text))
    },

    onend(text) {
        console.log('onend', JSON.stringify(text))
    },

    onerror(text) {
        console.log('onerror', JSON.stringify(text))
    },

    onopentagend(text) {
        console.log('onopentagend', JSON.stringify(text))
    },

    onopentagname(text) {
        console.log('onopentagname', JSON.stringify(text))
    },

    onprocessinginstruction(text) {
        console.log('onprocessinginstruction', JSON.stringify(text))
    },

    onselfclosingtag(text) {
        console.log('onselfclosingtag', JSON.stringify(text))
    },

    ontext(text) {
        console.log('ontext', JSON.stringify(text))
    },

}).end(`
    <div>
        {{each 123}}
            ajsidofjaos
            <div {{asdf ajfioasjoife}} asdf="jaiosjfdosd" {{/asdf}}>
                {{#c}}
            </div>
        {{/each}}
    </div>
`)
