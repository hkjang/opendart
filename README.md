# opendart API for javascript

**Javascript** opendart API package, Support **Node.js**

## Installation

```bash
npm install --save opendart
```

## Getting Started

### with Node.js

```javascript
const opendart = require('opendart')

```

## Authentication

```
accessToken
```

## opendart API

* accessToken: opendart API key

### opendart.admin.command(url: string, auth: object = {}, params: object = {})

execute opendart command 

```javascript
var url = 'http://localhost:9736/jsonCommand/command.json';
var auth = {
    username : USERNAME,
    password : PASSWORD
}
var params = {
    "opendartadmin": {
        "command": "server-info",
        "options":[
            "-server server1",
            "-state"
        ],
        "argument": null
    }
};

opendart.admin.command(url, auth, params);
```

## Details 
- https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001
- https://documenter.getpostman.com/view/12899159/TVKJxEeP

## License

[MIT](https://github.com/hkjang/opendart/blob/master/LICENSE)

Copyright 2018-2020. [hkjang](https://github.com/hkjang). All rights reserved.
