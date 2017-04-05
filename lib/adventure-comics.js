var exports = module.exports = {};
var s3 = require("./mf.lib.aws.s3.js");

exports.listComics = function (request, response) {
    s3.listObjects(response, "devboy-adventures", "adventures/");
};
