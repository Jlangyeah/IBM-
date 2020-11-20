const http = require("http")
http.createServer((req, res) => {
    let data = {
        total: 12,
        "rows": [{
            "id": "1",
            "name": "小明",
            "price": "1$"
        }, {
            "id": "1",
            "name": "wang小明",
            "price": "2$"
        }, {
            "id": "1",
            "name": "li小明",
            "price": "5$"
        }, {
            "id": "1",
            "name": "小明1",
            "price": "1$"
        }, {
            "id": "1",
            "name": "小明3",
            "price": "1$"
        }]
    };
    res.writeHeader(200, {
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(data));
}).listen("8084");
console.log("server is running at http://127.0.0.1:8084")