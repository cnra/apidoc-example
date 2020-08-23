define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\user\\.c\\1\\apidoc_example\\doc\\main.js",
    "groupTitle": "C:\\Users\\user\\.c\\1\\apidoc_example\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Kullanici bilgilerini getirir",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>getirilecek kullanici id si.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Kullanici adi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Kullanici soyadi.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "User"
  }
] });
