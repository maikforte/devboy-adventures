var exports = module.exports = {};
var aws = require('aws-sdk');
aws.config.loadFromPath("./config/aws.config.json");
var s3 = new aws.S3({apiVersion: "2006-03-01"});

exports.getBuckets = function() {
    s3.listBuckets(function(err, data) {
       if (err) {
          console.log("Error", err);
       } else {
          console.log("Bucket List", data.Buckets);
       }
    });
};