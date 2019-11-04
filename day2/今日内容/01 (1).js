var queryString = require('querystring'),
    // obj = queryString.parse('name=abing&sex=male&id=1');
    // obj= queryString.stringify({ name: 'abing', sex: 'male', id: '1' });
    // obj=queryString.escape('name=阿炳');
    obj= queryString.unescape('name%3D%E9%98%BF%E7%82%B3');
console.log(obj);