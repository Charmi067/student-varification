module.exports = {
    "version": 2,
    "name": "student-varification",
    "builds":[
        {"src":"app.js","use":"@vercel/node"}
    ],
    "routes":[
        {"src":"/(.*)","dest":"/app.js"}
    ]
};