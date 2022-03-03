new Vue({
    el: "#app",
    data: {
        // demonstration of attribute binding
        llamaWiki: "https://en.wikipedia.org/wiki/Llama",
        llamaWikiTitle: "Llamas on Wikipedia",
        alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",
        alpacaWikiTitle: "Alpacas on Wikipedia",
        // demonstration of class binding (see css)
        globalStyle: "apply",
       // demonstration of style binding 
        headingStyle: {
            background: "#013220",
            color: "white",
            padding: "20px",
            fontFamily: "Courier",
            fontWeight: "100",
            fontSize: "48px",
            textAlign: "center"
        }
    }
})