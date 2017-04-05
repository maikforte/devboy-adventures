var exports = module.exports = {};
var aws = require('aws-sdk');
var s3ApiVersion = "2006-03-01";
aws.config.loadFromPath("./config/aws.config.json");
var s3 = new aws.S3({
    apiVersion: s3ApiVersion
});

exports.listBuckets = function () {
    s3.listBuckets(function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Bucket List", data.Buckets);
        }
    });
};

exports.listObjects = function (response, bucket, folder) {
    var params = {
        Bucket: bucket,
        StartAfter: folder
    };

    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            response.status(400);
        } else {
            response.json(data.Contents);
        }
    });
};

exports.getObject = function (bucket, folder, key) {
    var params = {
        Bucket: bucket,
        Key: folder + key
    };

    s3.getObject(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
        }
    });
};
