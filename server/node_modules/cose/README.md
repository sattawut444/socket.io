cose
====

Multi-store Connect Session.

## Getting Started

### Installation

```
npm install cose --save
```

### Usage

#### For express 3.x
```
var express = require('express');
var cose = require('cose');
...
app(express.session({secret: 'some secret', store: cose.store({driver: 'redis', ...})}));
```

#### For express 4.x
```
var session = require('express-session');
var cose = require('cose');
...
app(session({secret: 'some secret', store: cose.store({driver: 'redis',...})}));
```