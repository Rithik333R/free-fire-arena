# PROJECT CODE SNAPSHOT

Generated: 06/03/2026 18:24:30


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\.gitignore
====================================================

node_modules
.env
dist
build


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\.vscode\settings.json
====================================================

{
    "postman.settings.dotenv-detection-notification-visibility": false
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\BACKEND_CODE_EXPORT.md
====================================================



# FILE: C:\Users\Lenovo\Desktop\ff\backend\.env

PORT=5000
MONGO_URI=mongodb+srv://root:root@cluster0.4mmzvkw.mongodb.net/authdb?retryWrites=true&w=majority
JWT_SECRET=b09fd966cb176dc30c67a3e4811c42e1482f80c2492035b58a204ab32b8ff8bd


# FILE: C:\Users\Lenovo\Desktop\ff\backend\package-lock.json

{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "dependencies": {
        "bcryptjs": "^3.0.3",
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "mongoose": "^9.0.2",
        "node-cron": "^4.2.1"
      },
      "devDependencies": {
        "nodemon": "^3.1.11"
      }
    },
    "node_modules/@mongodb-js/saslprep": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.4.4.tgz",
      "integrity": "sha512-p7X/ytJDIdwUfFL/CLOhKgdfJe1Fa8uw9seJYvdOmnP9JBWGWHW69HkOixXS6Wy9yvGf1MbhcS6lVmrhy4jm2g==",
      "license": "MIT",
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "node_modules/@types/webidl-conversions": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==",
      "license": "MIT"
    },
    "node_modules/@types/whatwg-url": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-13.0.0.tgz",
      "integrity": "sha512-N8WXpbE6Wgri7KUSvrmQcqrMllKZ9uxkYWMt+mCSGwNc0Hsw9VQTW7ApqI4XNrx6/SaM2QQJCzMPDEXE058s+Q==",
      "license": "MIT",
      "dependencies": {
        "@types/webidl-conversions": "*"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz",
      "integrity": "sha512-nfDwkulwiZYQIGwxdy0RUmowMhKcFVcYXUU7m4QlKYim1rUtg83xm2yjZ40QjDuc291AJjjeSc9b++AWHSgSHw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.0",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bson": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/bson/-/bson-7.0.0.tgz",
      "integrity": "sha512-Kwc6Wh4lQ5OmkqqKhYGKIuELXl+EPYSCObVE6bWsp1T/cGkOCBN0I8wF/T44BiuhHyNi1mmKVPXk60d41xZ7kw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/content-disposition": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.1.tgz",
      "integrity": "sha512-oIXISMynqSqm241k6kcQ5UwttDILMK4BiurCfGEREw6+X9jkkpEe5T9FZaApyLGGOnFuyMWZpdolTXMtvEJ08Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dotenv": {
      "version": "17.2.3",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.2.3.tgz",
      "integrity": "sha512-JVUnt+DUIzu87TABbhPmNfVdBDt18BLOWjMUFJMSi/Qqg7NTYtabbvSNJGOJ7afbRuv9D/lngizHtP7QyLQ+9w==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.1.tgz",
      "integrity": "sha512-2Tth85cXwGFHfvRgZWszZSvdo+0Xsqmw8k8ZwxScfcBneNUraK+dxRxRm24nszx80Y0TVio8kKLt5sLE7ZCLlw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/kareem": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-3.0.0.tgz",
      "integrity": "sha512-RKhaOBSPN8L7y4yAgNhDT2602G5FD6QbOIISbjN9D6mjHPeqeg7K+EB5IGSU5o81/X2Gzm3ICnAvQW3x3OP8HA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "license": "MIT"
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mongodb": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-7.0.0.tgz",
      "integrity": "sha512-vG/A5cQrvGGvZm2mTnCSz1LUcbOPl83hfB6bxULKQ8oFZauyox/2xbZOoGNl+64m8VBrETkdGCDBdOsCr3F3jg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@mongodb-js/saslprep": "^1.3.0",
        "bson": "^7.0.0",
        "mongodb-connection-string-url": "^7.0.0"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@aws-sdk/credential-providers": "^3.806.0",
        "@mongodb-js/zstd": "^7.0.0",
        "gcp-metadata": "^7.0.1",
        "kerberos": "^7.0.0",
        "mongodb-client-encryption": ">=7.0.0 <7.1.0",
        "snappy": "^7.3.2",
        "socks": "^2.8.6"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-providers": {
          "optional": true
        },
        "@mongodb-js/zstd": {
          "optional": true
        },
        "gcp-metadata": {
          "optional": true
        },
        "kerberos": {
          "optional": true
        },
        "mongodb-client-encryption": {
          "optional": true
        },
        "snappy": {
          "optional": true
        },
        "socks": {
          "optional": true
        }
      }
    },
    "node_modules/mongodb-connection-string-url": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-7.0.0.tgz",
      "integrity": "sha512-irhhjRVLE20hbkRl4zpAYLnDMM+zIZnp0IDB9akAFFUZp/3XdOfwwddc7y6cNvF2WCEtfTYRwYbIfYa2kVY0og==",
      "license": "Apache-2.0",
      "dependencies": {
        "@types/whatwg-url": "^13.0.0",
        "whatwg-url": "^14.1.0"
      },
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/mongoose": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-9.0.2.tgz",
      "integrity": "sha512-+GCaqwE+X//yN9eo2M2L/n+mVti9J6vH5iQKbhD+2AArZd5iaZqK/DkmkE4S6/iYYMyVQPTXsRk7jyVOYEtJzA==",
      "license": "MIT",
      "dependencies": {
        "kareem": "3.0.0",
        "mongodb": "~7.0",
        "mpath": "0.9.0",
        "mquery": "6.0.0",
        "ms": "2.1.3",
        "sift": "17.1.3"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mongoose"
      }
    },
    "node_modules/mpath": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
      "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mquery": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-6.0.0.tgz",
      "integrity": "sha512-b2KQNsmgtkscfeDgkYMcWGn9vZI9YoXh802VDEwE6qc50zxBFQ0Oo8ROkawbPAsXCY1/Z1yp0MagqsZStPWJjw==",
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-cron": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/node-cron/-/node-cron-4.2.1.tgz",
      "integrity": "sha512-lgimEHPE/QDgFlywTd8yTR61ptugX3Qer29efeyWw2rv259HtGBNn1vZVmp8lB9uo9wC0t/AT4iGqXxia+CJFg==",
      "license": "ISC",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.11",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.11.tgz",
      "integrity": "sha512-is96t8F/1//UHAjNPHpbsNY46ELPpftGUoSVNXwUfMk/qdjSylYrWSu1XavVTBOn526kFiOR733ATgNBCQyH0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^3.1.2",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sift": {
      "version": "17.1.3",
      "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
      "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==",
      "license": "MIT"
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
      "license": "MIT",
      "dependencies": {
        "memory-pager": "^1.0.2"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/tr46": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
      "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-url": {
      "version": "14.2.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.1.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    }
  }
}


# FILE: C:\Users\Lenovo\Desktop\ff\backend\package.json

{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.0.2",
    "node-cron": "^4.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Your custom routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import tournamentRoutes from "./routes/tournament.routes.js"; 
import adminRoutes from "./routes/admin.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

// â±ï¸ NEW: Import the Cron Job Scheduler
import startCronJobs from "./cron/statusUpdater.js";

dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tournaments", tournamentRoutes); 
app.use("/api/admin", adminRoutes); 
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ðŸš€ Server running on port ${PORT}`);
  
  // ðŸš€ NEW: Start the Match Automation Engine
  startCronJobs();
});


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\config\db.js

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\controllers\auth.controller.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: "USER" // Default role
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // CRITICAL: Include the role in the token payload
    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role // Send to frontend for Sidebar logic
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\cron\statusUpdater.js

import cron from "node-cron";
import Tournament from "../models/Tournament.js";

const startCronJobs = () => {
  // The string '* * * * *' means "Run this every 1 minute"
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();

      // 1. UPCOMING âž¡ï¸ LIVE
      // Find matches where status is UPCOMING but the start time has passed
      const liveResult = await Tournament.updateMany(
        { 
          status: "UPCOMING", 
          startTime: { $lte: now } 
        },
        { 
          $set: { status: "LIVE" } 
        }
      );

      if (liveResult.modifiedCount > 0) {
        console.log(`âš”ï¸ [CRON] Status Update: ${liveResult.modifiedCount} matches just went LIVE.`);
      }

      // 2. LIVE âž¡ï¸ COMPLETED
      // Find matches where status is LIVE but the end time has passed
      const completedResult = await Tournament.updateMany(
        { 
          status: "LIVE", 
          endTime: { $lte: now } 
        },
        { 
          $set: { status: "COMPLETED" } 
        }
      );

      if (completedResult.modifiedCount > 0) {
        console.log(`ðŸ [CRON] Status Update: ${completedResult.modifiedCount} matches just COMPLETED.`);
      }

    } catch (error) {
      console.error("âŒ [CRON Error] Failed to update match statuses:", error);
    }
  });

  console.log("â±ï¸  Match Scheduler Engine Started. Monitoring times...");
};

export default startCronJobs;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\middleware\admin.middleware.js

const adminMiddleware = (req, res, next) => {
  // Check if req.user (set by authMiddleware) exists and has the ADMIN role
  if (req.user && req.user.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied: Admin privileges required." });
  }
};

export default adminMiddleware;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\middleware\auth.middleware.js

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // This decoded object MUST have { id, role }
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\models\Tournament.js

import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, default: "Free Fire" },
  matchCategory: { 
    type: String, 
    enum: ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"], 
    required: true,
    default: "CLASH_SQUAD" 
  },
  matchType: { type: String, enum: ["1v1", "2v2", "3v3", "4v4"], default: "4v4" },
  map: { type: String, default: "Bermuda" },
  description: { type: String, default: "Standard Clash Squad Tournament" },
  rules: { 
    type: [String], 
    default: ["No Hacks", "No Grenades", "Join 15 mins before"] 
  },
  banner: { type: String, default: "https://wallpaperaccess.com/full/2155823.jpg" },

  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  entryFee: { type: Number, default: 0 },
  prizePool: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },

  status: {
    type: String,
    enum: ["UPCOMING", "LIVE", "COMPLETED"],
    default: "UPCOMING",
  },

  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      ign: { type: String, required: true },
      uid: { type: String, required: true },
      kills: { type: Number, default: 0 },
      rank: { type: Number, default: 0 },
      joinedAt: { type: Date, default: Date.now }
    }
  ],

  results: [
    {
      rank: String,
      ign: String,
      kills: Number,
      prize: Number
    }
  ],
  
  // âœ… These are now properly inside the object!
  roomId: { type: String, select: false }, 
  roomPassword: { type: String, select: false }

}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\models\User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["USER", "ADMIN"], 
    default: "USER" 
  },
}, { timestamps: true });

// Check if the model exists before creating it (prevents errors in some environments)
const User = mongoose.models.User || mongoose.model("User", userSchema);

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default User;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\admin.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

// @route   GET /api/admin/tournaments
// @desc    Get all tournaments for admin management
router.get("/tournaments", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: -1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments" });
  }
});

// @route   PATCH /api/admin/tournaments/:id/room
// @desc    Update Room Credentials, Status, and Participant Results
router.patch("/tournaments/:id/room", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { roomId, roomPassword, status, participants } = req.body;
    
    // Using .select("+roomId +roomPassword") to allow modification of hidden fields
    const tournament = await Tournament.findById(req.params.id).select("+roomId +roomPassword");
    if (!tournament) return res.status(404).json({ message: "Match not found" });

    if (roomId !== undefined) tournament.roomId = roomId;
    if (roomPassword !== undefined) tournament.roomPassword = roomPassword;
    if (status !== undefined) tournament.status = status;

    // âœ… FIX: Saving participant results (kills/ranks)
    if (Array.isArray(participants)) {
      tournament.participants = participants.map(p => ({
        ...p,
        kills: Number(p.kills) || 0,
        rank: Number(p.rank) || 0
      }));
    }

    await tournament.save();
    
    // Security: Do not return the tournament object with secrets
    res.json({ success: true, message: "Tournament updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\auth.routes.js

import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\leaderboard.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import User from "../models/User.js";

const router = express.Router();

// @route   GET /api/leaderboard
// @desc    Get top players based on total points (Mode-Specific Logic)
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Tournament.aggregate([
      { $match: { status: "COMPLETED" } },
      { $unwind: "$participants" },
      {
        $group: {
          _id: "$participants.user",
          // âœ… MODE-SPECIFIC SCORING LOGIC
          totalPoints: {
            $sum: {
              $cond: [
                { $eq: ["$matchCategory", "BATTLE_ROYALE"] },
                // BR Logic: (Rank 1 ? 20pts : 0pts) + Kills
                { 
                  $add: [
                    { $cond: [{ $eq: ["$participants.rank", 1] }, 20, 0] },
                    "$participants.kills"
                  ] 
                },
                // CS / Lone Wolf Logic: Just Kills (Placement points disabled)
                "$participants.kills"
              ]
            }
          },
          totalKills: { $sum: "$participants.kills" },
          totalMatches: { $sum: 1 },
          ign: { $last: "$participants.ign" }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          _id: 1,
          ign: 1,
          username: "$userDetails.username",
          totalPoints: 1,
          totalKills: 1,
          totalMatches: 1,
          avatar: "$userDetails.avatar"
        }
      },
      // Sort by Points now instead of just Kills
      { $sort: { totalPoints: -1 } },
      { $limit: 50 }
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard Error:", err);
    res.status(500).json({ message: "Failed to generate leaderboard" });
  }
});

export default router;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\tournament.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 1. PUBLIC: Get all tournaments for the Lobby
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch lobby." });
  }
});

// ðŸš€ 2. ADMIN: DEPLOY NEW MATCH
router.post("/", async (req, res) => {
  try {
    const newTournament = new Tournament(req.body);
    const savedTournament = await newTournament.save();
    res.status(201).json(savedTournament);
  } catch (err) {
    console.error("âŒ Error deploying match:", err);
    res.status(500).json({ error: "Failed to deploy tournament to database" });
  }
});

// ðŸš€ 3. ADMIN: INJECT ROOM CREDENTIALS
router.put("/:id/credentials", async (req, res) => {
  try {
    const { roomId, roomPassword } = req.body;
    
    // Find the match and update only the credentials
    const updatedMatch = await Tournament.findByIdAndUpdate(
      req.params.id,
      { roomId, roomPassword },
      { new: true } // Returns the updated document
    );

    if (!updatedMatch) {
      return res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json(updatedMatch);
  } catch (err) {
    console.error("âŒ Error injecting credentials:", err);
    res.status(500).json({ error: "Failed to update match credentials." });
  }
});

    // ðŸš€ 4. ADMIN: PUBLISH FINAL RESULTS
router.put("/:id/results", authMiddleware, async (req, res) => {
  try {
    const { results } = req.body;
    
    // Update the match to COMPLETED and inject the results array
    const updatedMatch = await Tournament.findByIdAndUpdate(
      req.params.id,
      { 
        status: "COMPLETED", 
        results: results 
      },
      { new: true }
    );

    if (!updatedMatch) return res.status(404).json({ message: "Match not found." });
    res.status(200).json(updatedMatch);
  } catch (err) {
    console.error("âŒ Error publishing results:", err);
    res.status(500).json({ error: "Failed to publish match results." });
  }
});

// 5. SECURE: Get only tournaments the logged-in user joined
router.get("/registered", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const matches = await Tournament.find({ 
      "participants.user": userId 
    }).sort({ startTime: 1 });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching your matches." });
  }
});

// 6. SECURE REVEAL: Get specific tournament details
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    // Fetch base data first
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found." });

    const userId = req.user.id;
    const now = new Date();
    const startTime = new Date(tournament.startTime);
    const fifteenMinsBefore = new Date(startTime.getTime() - 15 * 60000);

    // CRITICAL SECURITY CHECK
    const isRegistered = tournament.participants.some(
      (p) => p.user.toString() === userId.toString()
    );

    let revealedData = tournament.toObject();

    // Only fetch secrets if: 1. Time is right AND 2. User is registered
    if (now >= fifteenMinsBefore && isRegistered) {
      // âœ… Explicitly pull hidden fields only when authorized
      const secureMatch = await Tournament.findById(req.params.id).select("+roomId +roomPassword");
      revealedData.roomId = secureMatch.roomId;
      revealedData.roomPassword = secureMatch.roomPassword;
    } else {
      // Masking the data for unauthorized/early requests
      revealedData.roomId = "REVEALING 15M BEFORE START";
      revealedData.roomPassword = "REVEALING 15M BEFORE START";
    }

    res.json(revealedData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// 7. JOIN ARENA
router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const { ign, uid } = req.body;
    const tournament = await Tournament.findById(req.params.id);
    
    if (!tournament || tournament.status !== "UPCOMING") {
      return res.status(400).json({ message: "Registration is not open." });
    }

    const alreadyJoined = tournament.participants.some(p => p.user.toString() === req.user.id);
    if (alreadyJoined) return res.status(400).json({ message: "Already in this tournament." });

    tournament.participants.push({ user: req.user.id, ign, uid });
    await tournament.save();
    res.status(200).json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Join failed." });
  }
});

export default router;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\user.routes.js

import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

export default router;


# FILE: C:\Users\Lenovo\Desktop\ff\backend\src\scripts\seedTournaments.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Tournament from "../models/Tournament.js"; 
import User from "../models/User.js"; 

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("ðŸ“¡ Connected to MongoDB for seeding...");

async function seed() {
  try {
    // 1. Clear existing data
    await Tournament.deleteMany();
    await User.deleteMany();
    console.log("ðŸ—‘ï¸ Old tournaments and users cleared.");

    // 2. Create Hashed Passwords
    const adminPassword = await bcrypt.hash("admin123", 10);
    const playerPassword = await bcrypt.hash("player123", 10);

    // 3. Create Admin User
    const adminUser = new User({
      username: "Rithik_Admin",
      email: "admin@test.com",
      password: adminPassword,
      role: "ADMIN"
    });
    await adminUser.save();
    console.log("ðŸ‘‘ Admin account created: admin@test.com / admin123");

    // 4. Create Regular Player
    const regularUser = new User({
      username: "testplayer",
      email: "test@gmail.com",
      password: playerPassword,
      role: "USER",
      fairPlayScore: 100
    });
    await regularUser.save();

    // 5. Insert Tournaments
    await Tournament.insertMany([
      {
        title: "Reveal Test Match",
        game: "Free Fire",
        matchType: "4v4",
        map: "Kalahari",
        description: "TEST MATCH: Starts in 10 minutes. ID should appear for participants!",
        rules: ["Logic Test", "Verify Room ID appearance"],
        startTime: new Date(Date.now() + 10 * 60 * 1000), 
        endTime: new Date(Date.now() + 60 * 60 * 1000),
        prizePool: 500,
        maxPlayers: 8,
        status: "UPCOMING",
        roomId: "AX-7788990", 
        roomPassword: "JOIN_QUICK_123",
        participants: [{ user: adminUser._id, ign: "ADMIN_PRO", uid: "123456789" }]
      },
      {
        title: "CS 4v4 Sunday Cup",
        game: "Free Fire",
        matchType: "4v4",
        map: "Bermuda (Remastered)",
        description: "Weekly Clash Squad tournament.",
        startTime: new Date(Date.now() + 1440 * 60 * 1000), 
        endTime: new Date(Date.now() + 1500 * 60 * 1000),
        prizePool: 1000,
        maxPlayers: 8,
        status: "UPCOMING",
      },
      {
        title: "1v1 King of Hill",
        game: "Free Fire",
        matchType: "1v1",
        map: "Factory",
        description: "Classic Factory roof challenge.",
        startTime: new Date(Date.now() - 30 * 60 * 1000), 
        endTime: new Date(Date.now() + 30 * 60 * 1000),
        prizePool: 200,
        maxPlayers: 2,
        status: "LIVE",
      },
      {
        title: "BR Solo Warmup",
        game: "Free Fire",
        matchType: "1v1",
        map: "Purgatory",
        description: "Casual warmup match.",
        startTime: new Date(Date.now() - 300 * 60 * 1000), 
        endTime: new Date(Date.now() - 240 * 60 * 1000),
        prizePool: 0,
        maxPlayers: 48,
        status: "COMPLETED",
      }
    ]);

    console.log("âœ… Database successfully seeded with Admin and Test Cases!");
  } catch (error) {
    console.error("âŒ Seeding failed:", error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
}

seed();


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\package.json
====================================================

{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.0.2",
    "node-cron": "^4.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\server.js
====================================================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Your custom routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import tournamentRoutes from "./routes/tournament.routes.js"; 
import adminRoutes from "./routes/admin.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

// â±ï¸ NEW: Import the Cron Job Scheduler
import startCronJobs from "./cron/statusUpdater.js";

dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tournaments", tournamentRoutes); 
app.use("/api/admin", adminRoutes); 
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ðŸš€ Server running on port ${PORT}`);
  
  // ðŸš€ NEW: Start the Match Automation Engine
  startCronJobs();
});


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\config\db.js
====================================================

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\controllers\auth.controller.js
====================================================

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: "USER" // Default role
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // CRITICAL: Include the role in the token payload
    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role // Send to frontend for Sidebar logic
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\cron\statusUpdater.js
====================================================

import cron from "node-cron";
import Tournament from "../models/Tournament.js";

const startCronJobs = () => {
  // The string '* * * * *' means "Run this every 1 minute"
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();

      // 1. UPCOMING âž¡ï¸ LIVE
      // Find matches where status is UPCOMING but the start time has passed
      const liveResult = await Tournament.updateMany(
        { 
          status: "UPCOMING", 
          startTime: { $lte: now } 
        },
        { 
          $set: { status: "LIVE" } 
        }
      );

      if (liveResult.modifiedCount > 0) {
        console.log(`âš”ï¸ [CRON] Status Update: ${liveResult.modifiedCount} matches just went LIVE.`);
      }

      // 2. LIVE âž¡ï¸ COMPLETED
      // Find matches where status is LIVE but the end time has passed
      const completedResult = await Tournament.updateMany(
        { 
          status: "LIVE", 
          endTime: { $lte: now } 
        },
        { 
          $set: { status: "COMPLETED" } 
        }
      );

      if (completedResult.modifiedCount > 0) {
        console.log(`ðŸ [CRON] Status Update: ${completedResult.modifiedCount} matches just COMPLETED.`);
      }

    } catch (error) {
      console.error("âŒ [CRON Error] Failed to update match statuses:", error);
    }
  });

  console.log("â±ï¸  Match Scheduler Engine Started. Monitoring times...");
};

export default startCronJobs;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\middleware\admin.middleware.js
====================================================

const adminMiddleware = (req, res, next) => {
  // Check if req.user (set by authMiddleware) exists and has the ADMIN role
  if (req.user && req.user.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied: Admin privileges required." });
  }
};

export default adminMiddleware;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\middleware\auth.middleware.js
====================================================

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // This decoded object MUST have { id, role }
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\models\Tournament.js
====================================================

import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, default: "Free Fire" },
  matchCategory: { 
    type: String, 
    enum: ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"], 
    required: true,
    default: "CLASH_SQUAD" 
  },
  matchType: { type: String, enum: ["1v1", "2v2", "3v3", "4v4"], default: "4v4" },
  map: { type: String, default: "Bermuda" },
  description: { type: String, default: "Standard Clash Squad Tournament" },
  rules: { 
    type: [String], 
    default: ["No Hacks", "No Grenades", "Join 15 mins before"] 
  },
  banner: { type: String, default: "https://wallpaperaccess.com/full/2155823.jpg" },

  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  entryFee: { type: Number, default: 0 },
  prizePool: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },

  status: {
    type: String,
    enum: ["UPCOMING", "LIVE", "COMPLETED"],
    default: "UPCOMING",
  },

  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      ign: { type: String, required: true },
      uid: { type: String, required: true },
      kills: { type: Number, default: 0 },
      rank: { type: Number, default: 0 },
      joinedAt: { type: Date, default: Date.now }
    }
  ],

results: [
  {
    rank: String,
    ign: String,
    uid: String,
    kills: Number,
    prize: Number
  }
],
  
  // âœ… These are now properly inside the object!
  roomId: { type: String, select: false }, 
  roomPassword: { type: String, select: false }

}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\models\User.js
====================================================

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["USER", "ADMIN"], 
    default: "USER" 
  },
}, { timestamps: true });

// Check if the model exists before creating it (prevents errors in some environments)
const User = mongoose.models.User || mongoose.model("User", userSchema);

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default User;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\admin.routes.js
====================================================

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

// @route   GET /api/admin/tournaments
// @desc    Get all tournaments for admin management
router.get("/tournaments", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: -1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments" });
  }
});

// @route   PATCH /api/admin/tournaments/:id/room
// @desc    Update Room Credentials, Status, and Participant Results
router.patch("/tournaments/:id/room", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { roomId, roomPassword, status, participants } = req.body;
    
    // Using .select("+roomId +roomPassword") to allow modification of hidden fields
    const tournament = await Tournament.findById(req.params.id).select("+roomId +roomPassword");
    if (!tournament) return res.status(404).json({ message: "Match not found" });

    if (roomId !== undefined) tournament.roomId = roomId;
    if (roomPassword !== undefined) tournament.roomPassword = roomPassword;
    if (status !== undefined) tournament.status = status;

    // âœ… FIX: Saving participant results (kills/ranks)
    if (Array.isArray(participants)) {
      tournament.participants = participants.map(p => ({
        ...p,
        kills: Number(p.kills) || 0,
        rank: Number(p.rank) || 0
      }));
    }

    await tournament.save();
    
    // Security: Do not return the tournament object with secrets
    res.json({ success: true, message: "Tournament updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\auth.routes.js
====================================================

import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\leaderboard.routes.js
====================================================

import express from "express";
import Tournament from "../models/Tournament.js";
import User from "../models/User.js";

const router = express.Router();

// @route   GET /api/leaderboard
// @desc    Get top players based on total points (Mode-Specific Logic)
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Tournament.aggregate([
      { $match: { status: "COMPLETED" } },
      { $unwind: "$participants" },
      {
        $group: {
          _id: "$participants.user",
          // âœ… MODE-SPECIFIC SCORING LOGIC
          totalPoints: {
            $sum: {
              $cond: [
                { $eq: ["$matchCategory", "BATTLE_ROYALE"] },
                // BR Logic: (Rank 1 ? 20pts : 0pts) + Kills
                { 
                  $add: [
                    { $cond: [{ $eq: ["$participants.rank", 1] }, 20, 0] },
                    "$participants.kills"
                  ] 
                },
                // CS / Lone Wolf Logic: Just Kills (Placement points disabled)
                "$participants.kills"
              ]
            }
          },
          totalKills: { $sum: "$participants.kills" },
          totalMatches: { $sum: 1 },
          ign: { $last: "$participants.ign" }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          _id: 1,
          ign: 1,
          username: "$userDetails.username",
          totalPoints: 1,
          totalKills: 1,
          totalMatches: 1,
          avatar: "$userDetails.avatar"
        }
      },
      // Sort by Points now instead of just Kills
      { $sort: { totalPoints: -1 } },
      { $limit: 50 }
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard Error:", err);
    res.status(500).json({ message: "Failed to generate leaderboard" });
  }
});

export default router;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\tournament.routes.js
====================================================

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 1. PUBLIC: Get all tournaments for the Lobby
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch lobby." });
  }
});

// ðŸš€ 2. ADMIN: DEPLOY NEW MATCH
router.post("/", async (req, res) => {
  try {
    const newTournament = new Tournament(req.body);
    const savedTournament = await newTournament.save();
    res.status(201).json(savedTournament);
  } catch (err) {
    console.error("âŒ Error deploying match:", err);
    res.status(500).json({ error: "Failed to deploy tournament to database" });
  }
});

// ðŸš€ 3. ADMIN: INJECT ROOM CREDENTIALS
router.put("/:id/credentials", async (req, res) => {
  try {
    const { roomId, roomPassword } = req.body;
    
    // Find the match and update only the credentials
    const updatedMatch = await Tournament.findByIdAndUpdate(
      req.params.id,
      { roomId, roomPassword },
      { new: true } // Returns the updated document
    );

    if (!updatedMatch) {
      return res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json(updatedMatch);
  } catch (err) {
    console.error("âŒ Error injecting credentials:", err);
    res.status(500).json({ error: "Failed to update match credentials." });
  }
});

    // ðŸš€ 4. ADMIN: PUBLISH FINAL RESULTS
router.put("/:id/results", authMiddleware, async (req, res) => {
  try {
    const { results } = req.body;
    
    // Update the match to COMPLETED and inject the results array
    const updatedMatch = await Tournament.findByIdAndUpdate(
      req.params.id,
      { 
        status: "COMPLETED", 
        results: results 
      },
      { new: true }
    );

    if (!updatedMatch) return res.status(404).json({ message: "Match not found." });
    res.status(200).json(updatedMatch);
  } catch (err) {
    console.error("âŒ Error publishing results:", err);
    res.status(500).json({ error: "Failed to publish match results." });
  }
});

// 5. SECURE: Get only tournaments the logged-in user joined
router.get("/registered", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const matches = await Tournament.find({ 
      "participants.user": userId 
    }).sort({ startTime: 1 });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching your matches." });
  }
});

// 6. SECURE REVEAL: Get specific tournament details
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    // Fetch base data first
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found." });

    const userId = req.user.id;
    const now = new Date();
    const startTime = new Date(tournament.startTime);
    const fifteenMinsBefore = new Date(startTime.getTime() - 15 * 60000);

    // CRITICAL SECURITY CHECK
    const isRegistered = tournament.participants.some(
      (p) => p.user.toString() === userId.toString()
    );

    let revealedData = tournament.toObject();

    // Only fetch secrets if: 1. Time is right AND 2. User is registered
    if (now >= fifteenMinsBefore && isRegistered) {
      // âœ… Explicitly pull hidden fields only when authorized
      const secureMatch = await Tournament.findById(req.params.id).select("+roomId +roomPassword");
      revealedData.roomId = secureMatch.roomId;
      revealedData.roomPassword = secureMatch.roomPassword;
    } else {
      // Masking the data for unauthorized/early requests
      revealedData.roomId = "REVEALING 15M BEFORE START";
      revealedData.roomPassword = "REVEALING 15M BEFORE START";
    }

    res.json(revealedData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// 7. JOIN ARENA
router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const { ign, uid } = req.body;
    const tournament = await Tournament.findById(req.params.id);
    
    if (!tournament || tournament.status !== "UPCOMING") {
      return res.status(400).json({ message: "Registration is not open." });
    }

    const alreadyJoined = tournament.participants.some(p => p.user.toString() === req.user.id);
    if (alreadyJoined) return res.status(400).json({ message: "Already in this tournament." });

    tournament.participants.push({ user: req.user.id, ign, uid });
    await tournament.save();
    res.status(200).json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Join failed." });
  }
});

export default router;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\routes\user.routes.js
====================================================

import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

export default router;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\backend\src\scripts\seedTournaments.js
====================================================

import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Tournament from "../models/Tournament.js"; 
import User from "../models/User.js"; 

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("ðŸ“¡ Connected to MongoDB for seeding...");

async function seed() {
  try {
    // 1. Clear existing data
    await Tournament.deleteMany();
    await User.deleteMany();
    console.log("ðŸ—‘ï¸ Old tournaments and users cleared.");

    // 2. Create Hashed Passwords
    const adminPassword = await bcrypt.hash("admin123", 10);
    const playerPassword = await bcrypt.hash("player123", 10);

    // 3. Create Admin User
    const adminUser = new User({
      username: "Rithik_Admin",
      email: "admin@test.com",
      password: adminPassword,
      role: "ADMIN"
    });
    await adminUser.save();
    console.log("ðŸ‘‘ Admin account created: admin@test.com / admin123");

    // 4. Create Regular Player
    const regularUser = new User({
      username: "testplayer",
      email: "test@gmail.com",
      password: playerPassword,
      role: "USER",
      fairPlayScore: 100
    });
    await regularUser.save();

    // 5. Insert Tournaments
    await Tournament.insertMany([
      {
        title: "Reveal Test Match",
        game: "Free Fire",
        matchType: "4v4",
        map: "Kalahari",
        description: "TEST MATCH: Starts in 10 minutes. ID should appear for participants!",
        rules: ["Logic Test", "Verify Room ID appearance"],
        startTime: new Date(Date.now() + 10 * 60 * 1000), 
        endTime: new Date(Date.now() + 60 * 60 * 1000),
        prizePool: 500,
        maxPlayers: 8,
        status: "UPCOMING",
        roomId: "AX-7788990", 
        roomPassword: "JOIN_QUICK_123",
        participants: [{ user: adminUser._id, ign: "ADMIN_PRO", uid: "123456789" }]
      },
      {
        title: "CS 4v4 Sunday Cup",
        game: "Free Fire",
        matchType: "4v4",
        map: "Bermuda (Remastered)",
        description: "Weekly Clash Squad tournament.",
        startTime: new Date(Date.now() + 1440 * 60 * 1000), 
        endTime: new Date(Date.now() + 1500 * 60 * 1000),
        prizePool: 1000,
        maxPlayers: 8,
        status: "UPCOMING",
      },
      {
        title: "1v1 King of Hill",
        game: "Free Fire",
        matchType: "1v1",
        map: "Factory",
        description: "Classic Factory roof challenge.",
        startTime: new Date(Date.now() - 30 * 60 * 1000), 
        endTime: new Date(Date.now() + 30 * 60 * 1000),
        prizePool: 200,
        maxPlayers: 2,
        status: "LIVE",
      },
      {
        title: "BR Solo Warmup",
        game: "Free Fire",
        matchType: "1v1",
        map: "Purgatory",
        description: "Casual warmup match.",
        startTime: new Date(Date.now() - 300 * 60 * 1000), 
        endTime: new Date(Date.now() - 240 * 60 * 1000),
        prizePool: 0,
        maxPlayers: 48,
        status: "COMPLETED",
      }
    ]);

    console.log("âœ… Database successfully seeded with Admin and Test Cases!");
  } catch (error) {
    console.error("âŒ Seeding failed:", error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
}

seed();


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\.gitignore
====================================================

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\eslint.config.js
====================================================

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\FRONTEND_CODE_EXPORT.md
====================================================



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\FRONTEND_CODE_EXPORT.md


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])




# FILE: C:\Users\Lenovo\Desktop\ff\frontend\index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\package-lock.json
{
  "name": "frontend",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "frontend",
      "version": "0.0.0",
      "dependencies": {
        "axios": "^1.13.2",
        "framer-motion": "^12.23.26",
        "lucide-react": "^0.562.0",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-router-dom": "^7.11.0"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@tailwindcss/postcss": "^4.1.18",
        "@tailwindcss/postcss7-compat": "^2.2.17",
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "autoprefixer": "^10.4.23",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "postcss": "^8.5.6",
        "tailwindcss": "^4.1.18",
        "vite": "^7.2.4"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
      "integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
      "integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
      "integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
      "integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
      "integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
      "integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
      "integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
      "integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
      "integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
      "integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
      "integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
      "integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
      "integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
      "integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
      "integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
      "integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
      "integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
      "integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
      "integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
      "integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
      "integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
      "integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
      "integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
      "integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.54.0.tgz",
      "integrity": "sha512-OywsdRHrFvCdvsewAInDKCNyR3laPA2mc9bRYJ6LBp5IyvF3fvXbbNR0bSzHlZVFtn6E0xw2oZlyjg4rKCVcng==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.54.0.tgz",
      "integrity": "sha512-Skx39Uv+u7H224Af+bDgNinitlmHyQX1K/atIA32JP3JQw6hVODX5tkbi2zof/E69M1qH2UoN3Xdxgs90mmNYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.54.0.tgz",
      "integrity": "sha512-k43D4qta/+6Fq+nCDhhv9yP2HdeKeP56QrUUTW7E6PhZP1US6NDqpJj4MY0jBHlJivVJD5P8NxrjuobZBJTCRw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.54.0.tgz",
      "integrity": "sha512-cOo7biqwkpawslEfox5Vs8/qj83M/aZCSSNIWpVzfU2CYHa2G3P1UN5WF01RdTHSgCkri7XOlTdtk17BezlV3A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.54.0.tgz",
      "integrity": "sha512-miSvuFkmvFbgJ1BevMa4CPCFt5MPGw094knM64W9I0giUIMMmRYcGW/JWZDriaw/k1kOBtsWh1z6nIFV1vPNtA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.54.0.tgz",
      "integrity": "sha512-KGXIs55+b/ZfZsq9aR026tmr/+7tq6VG6MsnrvF4H8VhwflTIuYh+LFUlIsRdQSgrgmtM3fVATzEAj4hBQlaqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.54.0.tgz",
      "integrity": "sha512-EHMUcDwhtdRGlXZsGSIuXSYwD5kOT9NVnx9sqzYiwAc91wfYOE1g1djOEDseZJKKqtHAHGwnGPQu3kytmfaXLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.54.0.tgz",
      "integrity": "sha512-+pBrqEjaakN2ySv5RVrj/qLytYhPKEUwk+e3SFU5jTLHIcAtqh2rLrd/OkbNuHJpsBgxsD8ccJt5ga/SeG0JmA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.54.0.tgz",
      "integrity": "sha512-NSqc7rE9wuUaRBsBp5ckQ5CVz5aIRKCwsoa6WMF7G01sX3/qHUw/z4pv+D+ahL1EIKy6Enpcnz1RY8pf7bjwng==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.54.0.tgz",
      "integrity": "sha512-gr5vDbg3Bakga5kbdpqx81m2n9IX8M6gIMlQQIXiLTNeQW6CucvuInJ91EuCJ/JYvc+rcLLsDFcfAD1K7fMofg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.54.0.tgz",
      "integrity": "sha512-gsrtB1NA3ZYj2vq0Rzkylo9ylCtW/PhpLEivlgWe0bpgtX5+9j9EZa0wtZiCjgu6zmSeZWyI/e2YRX1URozpIw==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.54.0.tgz",
      "integrity": "sha512-y3qNOfTBStmFNq+t4s7Tmc9hW2ENtPg8FeUD/VShI7rKxNW7O4fFeaYbMsd3tpFlIg1Q8IapFgy7Q9i2BqeBvA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.54.0.tgz",
      "integrity": "sha512-89sepv7h2lIVPsFma8iwmccN7Yjjtgz0Rj/Ou6fEqg3HDhpCa+Et+YSufy27i6b0Wav69Qv4WBNl3Rs6pwhebQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.54.0.tgz",
      "integrity": "sha512-ZcU77ieh0M2Q8Ur7D5X7KvK+UxbXeDHwiOt/CPSBTI1fBmeDMivW0dPkdqkT4rOgDjrDDBUed9x4EgraIKoR2A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.54.0.tgz",
      "integrity": "sha512-2AdWy5RdDF5+4YfG/YesGDDtbyJlC9LHmL6rZw6FurBJ5n4vFGupsOBGfwMRjBYH7qRQowT8D/U4LoSvVwOhSQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-WGt5J8Ij/rvyqpFexxk3ffKqqbLf9AqrTBbWDk7ApGUzaIs6V+s2s84kAxklFwmMF/vBNGrVdYgbblCOFFezMQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.54.0.tgz",
      "integrity": "sha512-JzQmb38ATzHjxlPHuTH6tE7ojnMKM2kYNzt44LO/jJi8BpceEC8QuXYA908n8r3CNuG/B3BV8VR3Hi1rYtmPiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.54.0.tgz",
      "integrity": "sha512-huT3fd0iC7jigGh7n3q/+lfPcXxBi+om/Rs3yiFxjvSxbSB6aohDFXbWvlspaqjeOh+hx7DDHS+5Es5qRkWkZg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.54.0.tgz",
      "integrity": "sha512-c2V0W1bsKIKfbLMBu/WGBz6Yci8nJ/ZJdheE0EwB73N3MvHYKiKGs3mVilX4Gs70eGeDaMqEob25Tw2Gb9Nqyw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.54.0.tgz",
      "integrity": "sha512-woEHgqQqDCkAzrDhvDipnSirm5vxUXtSKDYTVpZG3nUdW/VVB5VdCYA2iReSj/u3yCZzXID4kuKG7OynPnB3WQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-dzAc53LOuFvHwbCEOS0rPbXp6SIhAf2txMP5p6mGyOXXw5mWY8NGGbPMPrs4P1WItkfApDathBj/NzMLUZ9rtQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.54.0.tgz",
      "integrity": "sha512-hYT5d3YNdSh3mbCU1gwQyPgQd3T2ne0A3KG8KSBdav5TiBg6eInVmV+TeR5uHufiIgSFg0XsOWGW5/RhNcSvPg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.18.tgz",
      "integrity": "sha512-Ce0GFnzAOuPyfV5SxjXGn0CubwGcuDB0zcdaPuCSzAa/2vII24JTkH+I6jcbXLb1ctjZMZZI6OjDaLPJQL1S0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/postcss7-compat": {
      "version": "2.2.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss7-compat/-/postcss7-compat-2.2.17.tgz",
      "integrity": "sha512-3h2svqQAqYHxRZ1KjsJjZOVTQ04m29LjfrLjXyZZEJuvUuJN+BCIF9GI8vhE1s0plS0mogd6E6YLg6mu4Wv/Vw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "arg": "^5.0.1",
        "autoprefixer": "^9",
        "bytes": "^3.0.0",
        "chalk": "^4.1.2",
        "chokidar": "^3.5.2",
        "color": "^4.0.1",
        "cosmiconfig": "^7.0.1",
        "detective": "^5.2.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.2.7",
        "fs-extra": "^10.0.0",
        "glob-parent": "^6.0.1",
        "html-tags": "^3.1.0",
        "is-color-stop": "^1.1.0",
        "is-glob": "^4.0.1",
        "lodash": "^4.17.21",
        "lodash.topath": "^4.5.2",
        "modern-normalize": "^1.1.0",
        "node-emoji": "^1.11.0",
        "normalize-path": "^3.0.0",
        "object-hash": "^2.2.0",
        "postcss": "^7",
        "postcss-functions": "^3",
        "postcss-js": "^2",
        "postcss-load-config": "^3.1.0",
        "postcss-nested": "^4",
        "postcss-selector-parser": "^6.0.6",
        "postcss-value-parser": "^4.1.0",
        "pretty-hrtime": "^1.0.3",
        "purgecss": "^4.0.3",
        "quick-lru": "^5.1.1",
        "reduce-css-calc": "^2.1.8",
        "resolve": "^1.20.0",
        "tmp": "^0.2.1"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=12.13.0"
      }
    },
    "node_modules/@tailwindcss/postcss7-compat/node_modules/autoprefixer": {
      "version": "9.8.8",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.8.8.tgz",
      "integrity": "sha512-eM9d/swFopRt5gdJ7jrpCwgvEMIayITpojhkkSMRsFHYuH5bkSQ4p/9qTEHtmNudUZh22Tehu7I6CxAW0IXTKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.12.0",
        "caniuse-lite": "^1.0.30001109",
        "normalize-range": "^0.1.2",
        "num2fraction": "^1.2.2",
        "picocolors": "^0.2.1",
        "postcss": "^7.0.32",
        "postcss-value-parser": "^4.1.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "funding": {
        "type": "tidelift",
        "url": "https://tidelift.com/funding/github/npm/autoprefixer"
      }
    },
    "node_modules/@tailwindcss/postcss7-compat/node_modules/picocolors": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@tailwindcss/postcss7-compat/node_modules/postcss": {
      "version": "7.0.39",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",
      "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picocolors": "^0.2.1",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/parse-json": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.2.tgz",
      "integrity": "sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-node": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/acorn-node/-/acorn-node-1.8.2.tgz",
      "integrity": "sha512-8mt+fslDufLYntIoPAaIMUe/lrbrehIiwmR3t2k9LljIzoigEPF27eLk2hy8zSGzmR/ogr7zbRKINMo1u0yh5A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "acorn": "^7.0.0",
        "acorn-walk": "^7.0.0",
        "xtend": "^4.0.2"
      }
    },
    "node_modules/acorn-node/node_modules/acorn": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
      "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
      "integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.23",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.23.tgz",
      "integrity": "sha512-YYTXSFulfwytnjAPlw8QHncHJmlvFKtczb8InXaAx9Q0LbfDnfEYDE55omerIJKihhmU61Ft+cAOSzQVaBUmeA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.1",
        "caniuse-lite": "^1.0.30001760",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.2.tgz",
      "integrity": "sha512-VPk9ebNqPcy5lRGuSlKx752IlDatOjT9paPlm8A7yOuW2Fbvp4X3JznJtT4f0GzGLLiWE9W8onz51SqLYwzGaA==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.11",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.11.tgz",
      "integrity": "sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001761",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001761.tgz",
      "integrity": "sha512-JF9ptu1vP2coz98+5051jZ4PwQgd2ni8A+gYSN7EA7dPKIMf0pDlSUxhdmVOaV3/fYK5uWBkgSXJaRLr4+3A6g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-8.3.0.tgz",
      "integrity": "sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.1.0.tgz",
      "integrity": "sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cosmiconfig/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-color-names": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
      "integrity": "sha512-zj5D7X1U2h2zsXOAM8EyUREBnnts6H+Jm+d1M2DbiQQcUtnqgQsMrdo8JW9R80YFUmIdBZeMu5wvYM7hcgWP/Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/css-unit-converter": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/css-unit-converter/-/css-unit-converter-1.1.2.tgz",
      "integrity": "sha512-IiJwMC8rdZE0+xiEZHeru6YoONC4rfPMqGm2W85jMIbkFvv5nFTwJVFHam2eFrN6txmoUYFAFXiv8ICVeTO0MA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/defined": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/defined/-/defined-1.0.1.tgz",
      "integrity": "sha512-hsBd2qSVCRE+5PmNdHt1uzyrFu5d3RwmFDKzyNZMFq/EwDNJF7Ee5+D5oEKF0hU6LhtoUF1macFvOe4AskQC1Q==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detective": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/detective/-/detective-5.2.1.tgz",
      "integrity": "sha512-v9XE1zRnz1wRtgurGu0Bs8uHKFSTdteYZNbIPFVhUZ39L/S79ppMpdmVOZAnoz1jfEFodc48n6MX483Xo3t1yw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn-node": "^1.8.2",
        "defined": "^1.0.0",
        "minimist": "^1.2.6"
      },
      "bin": {
        "detective": "bin/detective.js"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.4.tgz",
      "integrity": "sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
      "integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.2",
        "@esbuild/android-arm": "0.27.2",
        "@esbuild/android-arm64": "0.27.2",
        "@esbuild/android-x64": "0.27.2",
        "@esbuild/darwin-arm64": "0.27.2",
        "@esbuild/darwin-x64": "0.27.2",
        "@esbuild/freebsd-arm64": "0.27.2",
        "@esbuild/freebsd-x64": "0.27.2",
        "@esbuild/linux-arm": "0.27.2",
        "@esbuild/linux-arm64": "0.27.2",
        "@esbuild/linux-ia32": "0.27.2",
        "@esbuild/linux-loong64": "0.27.2",
        "@esbuild/linux-mips64el": "0.27.2",
        "@esbuild/linux-ppc64": "0.27.2",
        "@esbuild/linux-riscv64": "0.27.2",
        "@esbuild/linux-s390x": "0.27.2",
        "@esbuild/linux-x64": "0.27.2",
        "@esbuild/netbsd-arm64": "0.27.2",
        "@esbuild/netbsd-x64": "0.27.2",
        "@esbuild/openbsd-arm64": "0.27.2",
        "@esbuild/openbsd-x64": "0.27.2",
        "@esbuild/openharmony-arm64": "0.27.2",
        "@esbuild/sunos-x64": "0.27.2",
        "@esbuild/win32-arm64": "0.27.2",
        "@esbuild/win32-ia32": "0.27.2",
        "@esbuild/win32-x64": "0.27.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.26",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.26.tgz",
      "integrity": "sha512-1RETEylht2O6FM/MvgnyvT+8K21wLqDNg4qD51Zj3guhjt433XbnnkVttHMyaVyAFD03QSV4LPS5iE3VQmO7XQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.23.26",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.23.26.tgz",
      "integrity": "sha512-cPcIhgR42xBn1Uj+PzOyheMtZ73H927+uWPDVhUMqxy8UHt6Okavb6xIz9J/phFUHUj0OncR6UvMfJTXoc/LKA==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.23.23",
        "motion-utils": "^12.23.6",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/hex-color-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
      "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hsl-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
      "integrity": "sha512-M5ezZw4LzXbBKMruP+BNANf0k+19hDQMgpzBIYnya//Al+fjNct9Wf3b1WedLqdEs2hKBvxq/jh+DsHJLj0F9A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hsla-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
      "integrity": "sha512-7Wn5GMLuHBjZCb2bTmnDOycho0p/7UVaAeqXZGbHrBCl6Yd/xDhQJAXe6Ga9AXJH2I5zY1dEdYw2u1UptnSBJA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/html-tags": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/html-tags/-/html-tags-3.3.1.tgz",
      "integrity": "sha512-ztqyC3kLto0e9WbNp0aeP+M3kTt+nbaIveGmUxAtZa+8iFgKLUOD4YKM5j+f3QD89bra7UeumolZHKuOXnTmeQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-color-stop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
      "integrity": "sha512-H1U8Vz0cfXNujrJzEcvvwMDW9Ra+biSYA3ThdQvAnMLJkEHQXn6bWzLkxHtVYJ+Sdbx0b6finn3jZiaVe7MAHA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "css-color-names": "^0.0.4",
        "hex-color-regex": "^1.1.0",
        "hsl-regex": "^1.0.0",
        "hsla-regex": "^1.0.0",
        "rgb-regex": "^1.0.1",
        "rgba-regex": "^1.0.0"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz",
      "integrity": "sha512-FGuPw30AdOIUTRMC2OMRtQV+jkVj2cfPqSeWXv1NEAJ1qZ5zb1X6z1mFhbfOB/iy3ssJCD+3KuZ8r8C3uVFlAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lilconfig": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
      "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.topath": {
      "version": "4.5.2",
      "resolved": "https://registry.npmjs.org/lodash.topath/-/lodash.topath-4.5.2.tgz",
      "integrity": "sha512-1/W4dM+35DwvE/iEd1M9ekewOSTlpFekhw9mhAtrwjVqUr83/ilQiyAvmg4tVX7Unkcfl1KC+i9WdaT4B6aQcg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.562.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.562.0.tgz",
      "integrity": "sha512-82hOAu7y0dbVuFfmO4bYF1XEwYk/mEbM5E+b1jgci/udUBEE/R7LF5Ip0CCEmXe8AybRM8L+04eP+LGZeDvkiw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/modern-normalize": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/modern-normalize/-/modern-normalize-1.1.0.tgz",
      "integrity": "sha512-2lMlY1Yc1+CUy0gw4H95uNN7vjbpoED7NNRSBHE25nWfLBdmMzFCsPshlzbxHz+gYMcBEUN8V4pU16prcdPSgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.23.23",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.23.23.tgz",
      "integrity": "sha512-n5yolOs0TQQBRUFImrRfs/+6X4p3Q4n1dUEqt/H58Vx7OW6RF+foWEgmTVDhIWJIMXOuNNL0apKH2S16en9eiA==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.23.6"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.23.6",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.23.6.tgz",
      "integrity": "sha512-eAWoPgr4eFEOFfg2WjIsMoqJTW6Z8MTUCgn/GZ3VRpClWBdnbjryiA3ZSNLyxCTmCQx4RmYX6jX1iWHbenUPNQ==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-emoji": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/node-emoji/-/node-emoji-1.11.0.tgz",
      "integrity": "sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/num2fraction": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",
      "integrity": "sha512-Y1wZESM7VUThYY+4W+X4ySH2maqcA+p7UR+w8VWNWVAd6lwuXXWz/w/Cz43J/dI2I+PS6wD5N+bJUF+gjWvIqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.2.0.tgz",
      "integrity": "sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-functions": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/postcss-functions/-/postcss-functions-3.0.0.tgz",
      "integrity": "sha512-N5yWXWKA+uhpLQ9ZhBRl2bIAdM6oVJYpDojuI1nF2SzXBimJcdjFwiAouBVbO5VuOF3qA6BSFWFc3wXbbj72XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "^7.1.2",
        "object-assign": "^4.1.1",
        "postcss": "^6.0.9",
        "postcss-value-parser": "^3.3.0"
      }
    },
    "node_modules/postcss-functions/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-functions/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-functions/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/postcss-functions/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/postcss-functions/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/postcss-functions/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-functions/node_modules/postcss": {
      "version": "6.0.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
      "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^2.4.1",
        "source-map": "^0.6.1",
        "supports-color": "^5.4.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/postcss-functions/node_modules/postcss-value-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
      "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/postcss-functions/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-js": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-2.0.3.tgz",
      "integrity": "sha512-zS59pAk3deu6dVHyrGqmC3oDXBdNdajk4k1RyxeVXCrcEDBUBHoIhE4QTsmhxgzXxsaqFDAkUZfmMa5f/N/79w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1",
        "postcss": "^7.0.18"
      }
    },
    "node_modules/postcss-js/node_modules/picocolors": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/postcss-js/node_modules/postcss": {
      "version": "7.0.39",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",
      "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picocolors": "^0.2.1",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-3.1.4.tgz",
      "integrity": "sha512-6DiM4E7v4coTE4uzA8U//WhtPwyhiim3eyjEMFCnUpzbrkK9wJHgKDT2mR+HbtSrd/NubVaYTOpSpjUl8NQeRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^2.0.5",
        "yaml": "^1.10.2"
      },
      "engines": {
        "node": ">= 10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-load-config/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/postcss-nested": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-4.2.3.tgz",
      "integrity": "sha512-rOv0W1HquRCamWy2kFl3QazJMMe1ku6rCFoAAH+9AcxdbpDeBr6k968MLWuLjvjMcGEip01ak09hKOEgpK9hvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss": "^7.0.32",
        "postcss-selector-parser": "^6.0.2"
      }
    },
    "node_modules/postcss-nested/node_modules/picocolors": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/postcss-nested/node_modules/postcss": {
      "version": "7.0.39",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",
      "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picocolors": "^0.2.1",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/pretty-hrtime": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/pretty-hrtime/-/pretty-hrtime-1.0.3.tgz",
      "integrity": "sha512-66hKPCr+72mlfiSjlEB1+45IjXSqvVAIy6mocupoww4tBFE9R9IhwwUGoI4G++Tc9Aq+2rxOt0RFU6gPcrte0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/purgecss": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/purgecss/-/purgecss-4.1.3.tgz",
      "integrity": "sha512-99cKy4s+VZoXnPxaoM23e5ABcP851nC2y2GROkkjS8eJaJtlciGavd7iYAw2V84WeBqggZ12l8ef44G99HmTaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "commander": "^8.0.0",
        "glob": "^7.1.7",
        "postcss": "^8.3.5",
        "postcss-selector-parser": "^6.0.6"
      },
      "bin": {
        "purgecss": "bin/purgecss.js"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/react": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
      "integrity": "sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.3"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.11.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.11.0.tgz",
      "integrity": "sha512-uI4JkMmjbWCZc01WVP2cH7ZfSzH91JAZUDd7/nIprDgWxBV1TkkmLToFh7EbMTcMak8URFRa2YoBL/W8GWnCTQ==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.11.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.11.0.tgz",
      "integrity": "sha512-e49Ir/kMGRzFOOrYQBdoitq3ULigw4lKbAyKusnvtDu2t4dBX4AGYPrzNvorXmVuOyeakai6FUPW5MmibvVG8g==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.11.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/readdirp/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/reduce-css-calc": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/reduce-css-calc/-/reduce-css-calc-2.1.8.tgz",
      "integrity": "sha512-8liAVezDmUcH+tdzoEGrhfbGcP7nOV4NkGE3a74+qqvE7nt9i4sKLGBuZNOnpI4WiGksiNPklZxva80061QiPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "css-unit-converter": "^1.1.1",
        "postcss-value-parser": "^3.3.0"
      }
    },
    "node_modules/reduce-css-calc/node_modules/postcss-value-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
      "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rgb-regex": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
      "integrity": "sha512-gDK5mkALDFER2YLqH6imYvK6g02gpNGM4ILDZ472EwWfXZnC2ZEpoB2ECXTyOVUKuk/bPJZMzwQPBYICzP+D3w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/rgba-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
      "integrity": "sha512-zgn5OjNQXLUTdq8m17KdaicF6w89TZs8ZU8y0AYENIU6wG8GG6LLm0yLSiPY8DmaYmHdgRW8rnApjoT0fQRfMg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/rollup": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.54.0.tgz",
      "integrity": "sha512-3nk8Y3a9Ea8szgKhinMlGMhGMw89mqule3KWczxhIzqudyHdCIOHw8WJlj/r329fACjKLEh13ZSk7oE22kyeIw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.54.0",
        "@rollup/rollup-android-arm64": "4.54.0",
        "@rollup/rollup-darwin-arm64": "4.54.0",
        "@rollup/rollup-darwin-x64": "4.54.0",
        "@rollup/rollup-freebsd-arm64": "4.54.0",
        "@rollup/rollup-freebsd-x64": "4.54.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.54.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.54.0",
        "@rollup/rollup-linux-arm64-gnu": "4.54.0",
        "@rollup/rollup-linux-arm64-musl": "4.54.0",
        "@rollup/rollup-linux-loong64-gnu": "4.54.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-musl": "4.54.0",
        "@rollup/rollup-linux-s390x-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-musl": "4.54.0",
        "@rollup/rollup-openharmony-arm64": "4.54.0",
        "@rollup/rollup-win32-arm64-msvc": "4.54.0",
        "@rollup/rollup-win32-ia32-msvc": "4.54.0",
        "@rollup/rollup-win32-x64-gnu": "4.54.0",
        "@rollup/rollup-win32-x64-msvc": "4.54.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.4.tgz",
      "integrity": "sha512-nAu1WFPQSMNr2Zn9PGSZK9AGn4t/y97lEm+MXTtUDwfP0ksAIX4nO+6ruD9Jwut4C49SB1Ws+fbXsm/yScWOHw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/simple-swizzle/node_modules/is-arrayish": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.4.tgz",
      "integrity": "sha512-m6UrgzFVUYawGBh1dUsWR5M2Clqic9RVXC/9f8ceNlv2IcO9j9J/z8UoCLPqtsPBFNzEpfR3xftohbfqDx8EQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tmp": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.2.5.tgz",
      "integrity": "sha512-voyz6MApa1rQGUxT3E+BK7/ROe8itEx7vD8/HEvt4xwXucvQ5G5oeEiHkmHZJuBO21RpOf+YYm9MOivj709jow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yaml": {
      "version": "2.8.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.8.2.tgz",
      "integrity": "sha512-mplynKqc1C2hTVYxd0PU2xQAc22TI1vShAYGksCCfxbn/dFwnHTNi1bvYsBTkhdUNtGIf5xNOg938rrSSYvS9A==",
      "dev": true,
      "license": "ISC",
      "optional": true,
      "peer": true,
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/eemeli"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.2.1.tgz",
      "integrity": "sha512-0wZ1IRqGGhMP76gLqz8EyfBXKk0J2qo2+H3fi4mcUP/KtTocoX08nmIAHl1Z2kJIZbZee8KOpBCSNPRgauucjw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\package.json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.11.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.18",
    "@tailwindcss/postcss7-compat": "^2.2.17",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Change this line
    autoprefixer: {},
  },
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\README.md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spotify: "#1DB954",
        surface: "#121212",
        card: "#181818",
        border: "#282828",
        muted: "#b3b3b3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\public\vite.svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\App.css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\App.jsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";

// PUBLIC / PLAYER PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import MyMatches from "./pages/MyMatches";
import Leaderboard from './pages/Leaderboard';
import Profile from "./pages/Profile";
import MatchResults from "./pages/MatchResults";

// ðŸ›¡ï¸ ADMIN PAGES
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateTournament from "./pages/admin/CreateTournament";
import SetRoomCredentials from "./pages/admin/SetRoomCredentials";
import PublishResults from "./pages/admin/PublishResults"; // <-- This was missing!

export default function App() {
  const [open, setOpen] = useState(false);
  const { token, user, loading } = useAuth(); 

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#1DB954] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Helper logic to secure admin routes
  const isAdmin = token && user?.role?.toUpperCase() === "ADMIN";
  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      <main className="flex-1"> 
        <Routes>
          {/* PUBLIC & PLAYER ROUTES */}
          <Route path="/" element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} />
          <Route path="/tournaments" element={<Tournaments setOpen={setOpen} />} />
          <Route path="/tournaments/view/:id" element={<TournamentDetail setOpen={setOpen} />} />
          <Route path="/tournaments/:id/results" element={<MatchResults />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/my-matches" element={token ? <MyMatches setOpen={setOpen} /> : <Navigate to="/login" />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />

          {/* ðŸ›¡ï¸ ADMIN SECURE ROUTES */}
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
          <Route path="/admin/tournaments/new" element={isAdmin ? <CreateTournament /> : <Navigate to="/" />} />
          <Route path="/admin/tournaments/:id/room" element={isAdmin ? <SetRoomCredentials /> : <Navigate to="/" />} />
          
          {/* âœ… THE MISSING ROUTE IS NOW HERE */}
          <Route path="/admin/tournaments/:id/results" element={isAdmin ? <PublishResults /> : <Navigate to="/" />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />

          {/* FALLBACK ROUTE */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\index.css
@import "tailwindcss";

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #000000;
  color: white;
  font-family: Inter, system-ui, sans-serif;
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\api\axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\api\tournaments.js
import axios from "./axios";

export const getTournaments = () =>
  axios.get("/tournaments");



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\assets\react.svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Layout.jsx
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-900 text-white">
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full bg-black transition-all duration-300 ease-in-out
        ${open ? "w-56" : "w-16"} flex flex-col`}
      >
        {/* Logo / Menu */}
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-white transition"
          >
            <Menu size={22} />
          </button>

          {open && (
            <span className="text-green-500 font-bold text-lg transition-opacity">
              FF Arena
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          {["Home", "Tournaments", "Profile"].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 px-4 py-3 cursor-pointer
              hover:bg-neutral-800 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
              {open && (
                <span className="text-gray-300 group-hover:text-white">
                  {item}
                </span>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300
        ${open ? "ml-56" : "ml-16"}`}
      >
        {/* Top Bar */}
        <header className="h-14 bg-neutral-800 flex items-center justify-between px-6">
          <span className="text-sm text-gray-400">
            Welcome to Free Fire Arena
          </span>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <section className="flex-1 p-8 overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Navbar.jsx
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "ARENA LOBBY", path: "/lobby" },
    { name: "MY HUB", path: "/my-matches" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100] px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/lobby" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1DB954] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(29,185,84,0.4)]">
            <span className="text-black font-black text-xl italic">A</span>
          </div>
          <span className="font-black italic tracking-tighter text-2xl uppercase">Arena</span>
        </NavLink>

        {/* NAV LINKS */}
        <div className="flex gap-8 md:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? "text-[#1DB954]" : "text-white/40 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DB954] shadow-[0_0_10px_#1DB954]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* PROFILE/LOGOUT placeholder */}
        <button className="hidden md:block text-[9px] font-black border border-white/10 px-5 py-2 rounded-full hover:bg-white/5 transition-all text-white/60">
          PROFILE
        </button>
      </div>
    </nav>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Sidebar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

  // Base navigation for everyone
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Leaderboard", path: "/leaderboard", icon: "ðŸ†" }, // âœ… Added Leaderboard
    { name: "My Hub", path: "/my-matches" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        className="fixed top-0 left-0 z-50 h-full w-72 bg-[#121212] border-r border-[#282828] p-6 flex flex-col"
      >
        <h1 className="text-xl font-black text-[#1DB954] mb-10 uppercase italic tracking-tighter">
          ðŸ”¥ FF Arena
        </h1>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setOpen(false)} 
              className="block"
            >
              <div className="px-4 py-3 text-[#b3b3b3] font-bold text-sm hover:text-white rounded-lg hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-3">
                {item.icon && <span>{item.icon}</span>}
                {item.name}
              </div>
            </Link>
          ))}

          {/* ADMIN ONLY SECTION */}
          {user?.role === "ADMIN" && (
            <div className="pt-4 mt-4 border-t border-white/5">
              <p className="px-4 mb-2 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Management</p>
              <Link 
                to="/admin"
                onClick={() => setOpen(false)} 
                className="block"
              >
                <div className="px-4 py-3 text-[#1DB954] font-black text-sm hover:brightness-125 rounded-lg hover:bg-[#1DB954]/5 cursor-pointer transition-all border border-[#1DB954]/20">
                  ðŸ›¡ï¸ Command Center
                </div>
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-[#1DB954] text-black font-black py-4 rounded-full hover:scale-105 transition uppercase text-xs"
        >
          Logout
        </button>
      </motion.aside>
    </>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\context\AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 1. Initialize from localStorage so data persists on refresh
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  // 2. Updated login function to handle the USER object
  const login = (userData, newToken) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Export the hook separately to help Vite's Fast Refresh
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\AdminPanel.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({ 
    roomId: "", 
    roomPassword: "", 
    status: "UPCOMING",
    matchCategory: "CLASH_SQUAD" 
  });
  const [participantResults, setParticipantResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [viewingMatch, setViewingMatch] = useState(null);

  const fetchTournaments = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage({ text: "SESSION EXPIRED: PLEASE RE-LOGIN", type: "error" });
        return;
      }

      const res = await axios.get("http://localhost:5000/api/admin/tournaments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(res.data);
      setMessage({ text: "", type: "" });
    } catch (err) {
      if (err.response?.status === 401) {
        setMessage({ text: "AUTH FAILED: LOG IN AGAIN", type: "error" });
      } else {
        setMessage({ text: "FAILED TO LOAD TOURNAMENTS", type: "error" });
      }
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedMatch = tournaments.find(t => t._id === id);
    if (selectedMatch) {
      setForm({
        roomId: selectedMatch.roomId || "",
        roomPassword: selectedMatch.roomPassword || "",
        status: selectedMatch.status || "UPCOMING",
        matchCategory: selectedMatch.matchCategory || "CLASH_SQUAD"
      });
      
      const initialResults = (selectedMatch.participants || []).map(p => ({
        ...p,
        kills: p.kills || 0,
        rank: p.rank || 0
      }));
      setParticipantResults(initialResults);
    }
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...participantResults];
    updated[index][field] = Number(value);
    setParticipantResults(updated);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`http://localhost:5000/api/admin/tournaments/${selectedId}/room`, 
        { ...form, participants: participantResults }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage({ text: "ARENA & STATS UPDATED", type: "success" });
      fetchTournaments();
    } catch (err) {
      setMessage({ text: "UPDATE FAILED", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-[#1DB954]">Command Center</h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.4em] uppercase">Control Panel v2.0</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5 h-fit shadow-2xl">
            <h2 className="text-xl font-black italic uppercase mb-6 text-[#1DB954]">Tournament Logic</h2>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Select Match</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-[#1DB954] font-bold text-sm text-white cursor-pointer"
                  onChange={handleSelectChange}
                  value={selectedId}
                  required
                >
                  <option value="">{tournaments.length === 0 ? "Loading Matches..." : "-- Choose Tournament --"}</option>
                  {tournaments.map((t) => (
                    <option key={t._id} value={t._id}>[{t.status}] {t.title}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Scoring Mode</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white"
                  value={form.matchCategory}
                  onChange={(e) => setForm({...form, matchCategory: e.target.value})}
                >
                  <option value="BATTLE_ROYALE">BATTLE ROYALE (Rank 1 = 20pts + Kills)</option>
                  <option value="CLASH_SQUAD">CLASH SQUAD (Kills Only)</option>
                  <option value="LONE_WOLF">LONE WOLF (Kills Only)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Room ID" value={form.roomId} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomId: e.target.value})} />
                <input placeholder="Room Pass" value={form.roomPassword} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomPassword: e.target.value})} />
              </div>

              <select className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white" value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
                <option value="UPCOMING">UPCOMING</option>
                <option value="LIVE">LIVE</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              {selectedId && (form.status === "LIVE" || form.status === "COMPLETED") && (
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h3 className="text-xs font-black uppercase text-white/40 tracking-widest">Performance Data (Kills | Rank)</h3>
                  {participantResults.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs font-bold truncate w-24 italic underline decoration-[#1DB954]">{p.ign}</span>
                      <div className="flex gap-2">
                        <input type="number" value={p.kills} className="w-14 bg-black border border-[#1DB954]/30 p-2 rounded text-xs text-center text-[#1DB954]" onChange={(e) => handleStatChange(idx, 'kills', e.target.value)} />
                        <input type="number" value={p.rank} className="w-14 bg-black border border-white/10 p-2 rounded text-xs text-center" onChange={(e) => handleStatChange(idx, 'rank', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button type="submit" disabled={loading || !selectedId} className={`w-full font-black py-4 rounded-xl uppercase transition-all shadow-lg ${!selectedId ? "bg-white/5 text-white/10" : "bg-[#1DB954] text-black hover:scale-[1.02]"}`}>
                {loading ? "Processing..." : "Push Updates"}
              </button>
              {message.text && <p className={`mt-4 text-center text-[10px] font-black ${message.type === 'error' ? 'text-red-500' : 'text-[#1DB954]'}`}>{message.text}</p>}
            </form>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-xl font-black italic uppercase underline decoration-[#1DB954] underline-offset-8">Live Status Feed</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {tournaments.map(t => (
                <div key={t._id} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className={`text-[8px] font-black uppercase mt-1 ${t.status === 'LIVE' ? 'text-red-500' : 'text-[#1DB954]'}`}>{t.status} - {t.matchCategory}</p>
                    </div>
                    <button onClick={() => setViewingMatch(t)} className="text-[10px] font-black bg-white/5 hover:bg-[#1DB954] hover:text-black px-4 py-2 rounded-lg uppercase">Inspect</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Home.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="flex-1 bg-black min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur-xl border-b border-white/5 p-6 flex justify-between items-center">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl p-2 rounded-full hover:bg-white/10"
        >
          â˜°
        </button>

        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleLogout}
              className="bg-[#1DB954] text-black font-bold px-8 py-2.5 rounded-full hover:scale-105 transition"
            >
              Logout
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="px-8 pt-12">
        <h1 className="text-6xl font-black tracking-tight">
          Welcome to <span className="text-[#1DB954]">Free Fire Arena ðŸ”¥</span>
        </h1>
        <p className="text-[#b3b3b3] mt-4 max-w-xl">
          Your esports journey starts here.
        </p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {[
          { label: "Matches Played", value: 24 },
          { label: "Total Kills", value: 187 },
          { label: "Win Rate", value: "62%" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -8, backgroundColor: "#282828" }}
            className="bg-[#181818] border border-[#282828] rounded-2xl p-8"
          >
            <p className="text-[#b3b3b3] uppercase text-xs">{stat.label}</p>
            <h2 className="text-5xl font-black mt-3">{stat.value}</h2>
          </motion.div>
        ))}
      </section>
    </main>
  );
}



# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Leaderboard.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For the back button functionality

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");
        setPlayers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse text-2xl uppercase tracking-tighter">
          Loading Elites...
        </div>
      </div>
    );
  }

  const topThree = players.slice(0, 3);
  const theRest = players.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Return to Arena
        </button>

        <header className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-2">
            Hall of <span className="text-[#1DB954]">Fame</span>
          </h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.5em] uppercase">
            Global Tournament Rankings
          </p>
        </header>

        {/* PODIUM SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
          {topThree[1] && <PodiumCard player={topThree[1]} rank={2} height="h-52" color="border-gray-400" />}
          {topThree[0] && <PodiumCard player={topThree[0]} rank={1} height="h-72" color="border-[#1DB954]" isGold />}
          {topThree[2] && <PodiumCard player={topThree[2]} rank={3} height="h-44" color="border-amber-700" />}
        </div>

        {/* LIST SECTION */}
        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-5 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-center">Matches</span>
            <span className="text-center">Kills</span>
            <span className="text-right">Total Points</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {theRest.length > 0 ? (
              theRest.map((p, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  key={p._id} 
                  className="grid grid-cols-5 p-6 items-center hover:bg-[#1DB954]/5 transition-colors"
                >
                  <span className="font-black italic text-xl text-white/10">#{index + 4}</span>
                  <div>
                    <p className="font-bold text-sm text-white">{p.ign}</p>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">@{p.username}</p>
                  </div>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalMatches}</span>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalKills}</span>
                  <span className="text-right font-black text-[#1DB954] text-2xl italic">{p.totalPoints}</span>
                </motion.div>
              ))
            ) : (
              players.length < 4 && (
                <div className="p-10 text-center text-white/10 font-black uppercase text-xs tracking-[0.3em]">
                  End of Rankings
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ player, rank, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-[2.5rem] p-6 ${height} justify-center shadow-2xl`}
    >
      <div className={`absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {rank}
      </div>
      <p className="text-[10px] font-black text-white/40 uppercase mb-1 tracking-widest">Global Elite</p>
      
      <h3 className={`text-2xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.ign}
      </h3>
      
      <div className="mt-4 text-center">
        <p className="text-5xl font-black tracking-tighter text-white">{player.totalPoints}</p>
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isGold ? 'text-[#1DB954]' : 'text-white/20'}`}>
          Total Score
        </p>
        <div className="mt-2 flex gap-2 justify-center opacity-40">
           <span className="text-[9px] font-bold uppercase">{player.totalKills} Kills</span>
           <span className="text-[9px] font-bold text-white/50">|</span>
           <span className="text-[9px] font-bold uppercase">{player.totalMatches} Matches</span>
        </div>
      </div>
    </motion.div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // FIX: Pass both user object (which has the role) and the token
      // Your backend returns { token, user: { id, username, role } }
      login(res.data.user, res.data.token);

      if (stayLoggedIn) {
        localStorage.setItem("rememberMe", "true");
      }

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-12">
      
      {/* Brand Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase text-center">
          ðŸ”¥ FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center tracking-tight">
          Log in to continue
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm py-1">
            <label className="flex items-center cursor-pointer text-[#b3b3b3] hover:text-white transition group">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 accent-[#1DB954] bg-[#242424] border-none rounded cursor-pointer"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
              />
              <span className="font-bold">Stay logged in</span>
            </label>
            
            <Link 
              to="/forgot-password" 
              className="text-[#b3b3b3] hover:text-[#1DB954] font-bold transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.95] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm"
          >
            Log In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Don't have an account?{" "}
            <Link to="/register" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4">
              Sign up for FF Arena
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\MatchResults.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function MatchResults() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`);
        setMatch(res.data);
      } catch (err) {
        console.error("Error fetching match results", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse text-2xl uppercase tracking-tighter">
          Compiling Match Data...
        </div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white/40 font-black uppercase tracking-widest">
        Match Records Not Found
      </div>
    );
  }

  // Sort participants safely by their assigned rank
  const rankedPlayers = [...(match.participants || [])].sort((a, b) => {
    if (!a.rank) return 1;
    if (!b.rank) return -1;
    return a.rank - b.rank;
  });

  const topThree = rankedPlayers.slice(0, 3);
  const theRest = rankedPlayers.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate(`/tournaments/view/${id}`)}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Back to Match Details
        </button>

        <header className="text-center mb-16">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
            Official Match Results
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 text-[#1DB954]">
            {match.title}
          </h1>
          <p className="text-white/40 font-black text-xs tracking-[0.4em] uppercase">
            {match.map} â€¢ {match.matchType}
          </p>
        </header>

        {rankedPlayers.length === 0 ? (
          <div className="bg-[#121212] p-20 rounded-[3rem] border border-white/5 text-center">
            <p className="text-white/20 font-black uppercase tracking-[0.3em]">
              Admin has not published results yet.
            </p>
          </div>
        ) : (
          <>
            {/* PODIUM SECTION */}
            <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
              {topThree[1] && <PodiumCard player={topThree[1]} height="h-52" color="border-gray-400" />}
              {topThree[0] && <PodiumCard player={topThree[0]} height="h-72" color="border-[#1DB954]" isGold />}
              {topThree[2] && <PodiumCard player={topThree[2]} height="h-44" color="border-amber-700" />}
            </div>

            {/* LIST SECTION */}
            <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-4 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
                <span>Placement</span>
                <span>Player IGN</span>
                <span className="text-center">UID</span>
                <span className="text-right">Confirmed Kills</span>
              </div>
              
              <div className="divide-y divide-white/5">
                {theRest.length > 0 ? (
                  theRest.map((p) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      key={p._id || p.uid} 
                      className="grid grid-cols-4 p-6 items-center hover:bg-[#1DB954]/5 transition-colors"
                    >
                      <span className="font-black italic text-xl text-white/20">#{p.rank || "-"}</span>
                      <span className="font-bold text-sm text-white">{p.ign}</span>
                      <span className="text-center font-mono text-xs text-white/40">{p.uid}</span>
                      <span className="text-right font-black text-[#1DB954] text-2xl italic">{p.kills || 0}</span>
                    </motion.div>
                  ))
                ) : (
                  topThree.length > 0 && (
                    <div className="p-8 text-center text-white/10 font-black uppercase text-[10px] tracking-[0.3em]">
                      No additional participants
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PodiumCard({ player, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-[2.5rem] p-6 ${height} justify-center shadow-2xl`}
    >
      <div className={`absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.rank || "-"}
      </div>
      
      <h3 className={`text-2xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.ign}
      </h3>
      
      <div className="mt-4 text-center">
        <p className="text-5xl font-black tracking-tighter text-white">{player.kills || 0}</p>
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isGold ? 'text-[#1DB954]' : 'text-white/20'}`}>
          Match Kills
        </p>
      </div>
    </motion.div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\MyMatches.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MyMatches() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("UPCOMING"); // UPCOMING | LIVE | COMPLETED

  useEffect(() => {
    const fetchMyMatches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tournaments");
        
        // Filter matches where the logged-in user is listed as a participant
        const filtered = res.data.filter((match) =>
          match.participants?.some(
            (p) => p.user === user?.id || p.user?._id === user?.id
          )
        );
        setMyMatches(filtered);
      } catch (err) {
        console.error("Error fetching user matches:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) fetchMyMatches();
  }, [user]);

  // Filter current view based on active tab selection
  const displayedMatches = myMatches.filter((m) => m.status === activeTab);

  const tabs = [
    { id: "UPCOMING", label: "My Upcoming", icon: "ðŸ•’" },
    { id: "LIVE", label: "My Live Matches", icon: "âš”ï¸" },
    { id: "COMPLETED", label: "Battle History", icon: "ðŸ" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse tracking-widest">
          LOADING YOUR SCHEDULE...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK TO DASHBOARD */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">
            My <span className="text-[#1DB954]">Hub</span>
          </h1>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
            Your personal combat deployment schedule
          </p>
        </header>

        {/* TABS NAVBAR */}
        <div className="flex gap-2 mb-10 bg-[#121212] p-2 rounded-2xl border border-white/5 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                activeTab === tab.id
                  ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.2)]"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[8px] ${
                activeTab === tab.id ? "bg-black/20" : "bg-white/10"
              }`}>
                {myMatches.filter((m) => m.status === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* TOURAMENTS DISPLAY LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {displayedMatches.length > 0 ? (
              displayedMatches.map((match) => (
                <motion.div
                  key={match._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#121212] border border-white/10 p-6 rounded-[2.5rem] flex flex-col justify-between group transition-all hover:border-[#1DB954]/40"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase ${
                        match.status === "LIVE" ? "bg-red-600 text-white animate-pulse" :
                        match.status === "COMPLETED" ? "bg-white/10 text-white/30" : "bg-[#1DB954]/10 text-[#1DB954]"
                      }`}>
                        {match.status}
                      </span>
                      <span className="text-[10px] font-mono text-white/30">{match.matchCategory}</span>
                    </div>

                    <h2 className="text-xl font-black uppercase italic mb-2 tracking-tight group-hover:text-[#1DB954] transition-colors">
                      {match.title}
                    </h2>
                    <p className="text-white/40 text-xs font-bold uppercase mb-6">
                      Map: {match.map} â€¢ Mode: {match.matchType}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/tournaments/view/${match._id}`)}
                    className={`w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      match.status === "COMPLETED"
                        ? "bg-white/5 text-white/40 hover:bg-white/10"
                        : "bg-white text-black hover:bg-[#1DB954]"
                    }`}
                  >
                    {match.status === "COMPLETED" ? "View Match Results" : "Open Room Lobby"}
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center border-2 border-dashed border-white/5 rounded-[2.5rem]"
              >
                <p className="text-white/20 font-black uppercase text-xs tracking-widest">
                  No registered matches found in this tier
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Profile.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // 1. Fetch Global Stats for Summary
        const leaderRes = await axios.get("http://localhost:5000/api/leaderboard");
        const currentUserStats = leaderRes.data.find(p => p._id === user.id);
        setStats(currentUserStats);

        // 2. Fetch Detailed Tournament History
        // This assumes your backend has a route to get tournaments by participant ID
        const tournamentRes = await axios.get("http://localhost:5000/api/tournaments");
        const myHistory = tournamentRes.data.filter(t => 
          t.participants.some(p => p.user === user.id) && t.status === "COMPLETED"
        );
        setHistory(myHistory);

      } catch (err) {
        console.error("Profile fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchProfileData();
  }, [user]);

  if (loading) return <div className="p-20 text-[#1DB954] font-black animate-pulse uppercase italic">Synchronizing Data...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP NAV */}
        <button onClick={() => navigate("/")} className="mb-8 text-[10px] font-black uppercase text-white/30 hover:text-[#1DB954] transition-colors tracking-widest">
          â† Back to Arena
        </button>

        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-[#121212] p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="w-40 h-40 bg-[#1DB954] rounded-full flex items-center justify-center text-6xl font-black text-black italic shadow-[0_0_50px_rgba(29,185,84,0.3)]">
            {stats?.ign?.charAt(0) || user?.username?.charAt(0)}
          </div>
          
          <div className="text-center md:text-left z-10">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">{stats?.ign || "RECRUIT"}</h1>
            <p className="text-white/30 font-black text-xs uppercase tracking-[0.4em] mb-4">Official ID: {user?.username}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
               <Badge text="VETERAN" />
               <Badge text={`LEVEL ${stats?.totalMatches || 0}`} />
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard label="Total Points" value={stats?.totalPoints || 0} color="text-[#1DB954]" />
          <StatCard label="Confirmed Kills" value={stats?.totalKills || 0} />
          <StatCard label="Matches Played" value={stats?.totalMatches || 0} />
        </div>

        {/* BATTLE HISTORY TABLE */}
        <div className="bg-[#121212] rounded-[2.5rem] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Battle History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase text-white/20 tracking-widest bg-white/[0.02]">
                  <th className="p-6">Tournament</th>
                  <th className="p-6 text-center">Rank</th>
                  <th className="p-6 text-center">Kills</th>
                  <th className="p-6 text-right">Points Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {history.length > 0 ? history.map((match) => {
                  const myPerformance = match.participants.find(p => p.user === user.id);
                  return (
                    <tr key={match._id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <p className="font-bold text-sm group-hover:text-[#1DB954] transition-colors">{match.title}</p>
                        <p className="text-[9px] font-black text-white/20 uppercase mt-1">{match.matchCategory}</p>
                      </td>
                      <td className="p-6 text-center font-black italic text-xl text-white/40">#{myPerformance?.rank}</td>
                      <td className="p-6 text-center font-mono text-sm">{myPerformance?.kills}</td>
                      <td className="p-6 text-right font-black text-[#1DB954] text-xl">
                        {/* Logic: Rank 1 BR gets +20, else just kills */}
                        {(match.matchCategory === "BATTLE_ROYALE" && myPerformance?.rank === 1) 
                          ? myPerformance?.kills + 20 
                          : myPerformance?.kills}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="4" className="p-12 text-center text-white/10 font-black uppercase text-xs tracking-widest">
                      No combat records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-white" }) {
  return (
    <div className="bg-[#121212] p-8 rounded-[2rem] border border-white/5 text-center transition-transform hover:scale-105">
      <p className="text-[10px] font-black uppercase text-white/20 tracking-[0.2em] mb-2">{label}</p>
      <p className={`text-5xl font-black italic tracking-tighter ${color}`}>{value}</p>
    </div>
  );
}

function Badge({ text }) {
  return <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest text-white/60 uppercase">{text}</span>;
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Register.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Connects to your backend auth.routes.js -> register controller
      await axios.post("http://localhost:5000/api/auth/register", form);
      
      // On success, send user to login page
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Flex centering ensures the card doesn't go to the side
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-10">
      
      {/* Branding Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
          ðŸ”¥ FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </motion.div>

      {/* Registration Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 text-center tracking-tight">
          Sign up for free
        </h2>
        <p className="text-[#b3b3b3] text-center text-sm mb-8 font-medium">
          Start your journey in the arena.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Create a username"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4 font-black">
              Log in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\TournamentDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function TournamentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ ign: "", uid: "" });
  const [joining, setJoining] = useState(false);

  const fetchMatch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      setMatch(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatch();
  }, [id]);

  useEffect(() => {
    if (!match || match.status !== "UPCOMING") {
        if (match?.status === "LIVE") setTimeLeft("MATCH IS LIVE");
        if (match?.status === "COMPLETED") setTimeLeft("MATCH ENDED");
        return;
    }

    const timer = setInterval(() => {
      const distance = new Date(match.startTime).getTime() - new Date().getTime();
      
      if (distance < 0) {
        setTimeLeft("MATCH STARTED");
        clearInterval(timer);
        fetchMatch(); 
      } else {
        const h = Math.floor((distance % 86400000) / 3600000);
        const m = Math.floor((distance % 3600000) / 60000);
        const s = Math.floor((distance % 60000) / 1000);
        setTimeLeft(`${h}h ${m}m ${s}s`);

        if (h === 0 && m === 15 && s === 0) {
          fetchMatch();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [match]);

  const handleJoin = async (e) => {
    e.preventDefault();
    setJoining(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/tournaments/${id}/join`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Successfully joined the Arena!");
      setShowModal(false);
      fetchMatch(); 
    } catch (err) {
      alert(err.response?.data?.message || "Failed to join");
    } finally {
      setJoining(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#1DB954] font-black tracking-widest">LOADING ARENA...</div>;
  if (!match) return <div className="p-20 text-white text-center font-bold uppercase">Match Not Found</div>;

  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split('.')[1])).id : null;
  const isJoined = match.participants?.some(p => p.user === userId || p.user?._id === userId);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto mb-8">
        <button onClick={() => navigate(-1)} className="text-xs font-black text-white/40 hover:text-[#1DB954] transition-colors flex items-center gap-2">
          â† ARENA LOBBY
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative h-[300px] md:h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
            <img src={match.banner} alt="banner" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <div className="flex gap-2 mb-4">
                <span className={`text-black text-[10px] font-black px-3 py-1 rounded-full uppercase ${match.status === 'COMPLETED' ? 'bg-white/20 text-white' : 'bg-[#1DB954]'}`}>
                  {match.status}
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">{match.matchCategory}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">{match.title}</h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "PRIZE POOL", val: `â‚¹${match.prizePool}`, color: "text-[#1DB954]" },
              { label: "ENTRY FEE", val: match.entryFee === 0 ? "FREE" : `â‚¹${match.entryFee}` },
              { label: "MAP", val: match.map },
              { label: "VERSION", val: "MOBILE" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#121212] border border-white/5 p-6 rounded-3xl">
                <p className="text-[10px] font-black text-white/40 mb-1 uppercase tracking-widest">{stat.label}</p>
                <p className={`text-xl font-black uppercase italic ${stat.color || "text-white"}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#1DB954] rounded-full" />
              <h2 className="text-xl font-black uppercase italic tracking-tight">OFFICIAL MATCH RULES</h2>
            </div>
            <ul className="space-y-4">
              {match.rules?.map((rule, idx) => (
                <li key={idx} className="flex gap-4 text-sm font-bold text-white/70">
                  <span className="text-[#1DB954]">0{idx + 1}</span> {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <motion.div className={`${match.status === "COMPLETED" ? "bg-white/5" : "bg-[#1DB954]"} p-8 rounded-[3rem] text-white shadow-2xl transition-colors`}>
            <h3 className={`font-black text-4xl uppercase italic mb-1 tracking-tighter ${match.status === "COMPLETED" ? "text-white/20" : "text-black"}`}>
              {match.status === "COMPLETED" ? "MATCH ENDED" : "JOIN ARENA"}
            </h3>
            <p className={`font-black text-[10px] opacity-60 mb-8 uppercase tracking-widest ${match.status === "COMPLETED" ? "text-white/10" : "text-black/60"}`}>
              FINAL SLOTS: {match.participants?.length || 0} / {match.maxPlayers}
            </p>

            {/* âœ… FIXED LOGIC HERE */}
            {match.status === "COMPLETED" ? (
              <button disabled className="w-full bg-white/5 text-white/20 border border-white/10 font-black py-5 rounded-2xl uppercase text-xs">
                ðŸ BATTLE FINISHED
              </button>
            ) : match.status === "LIVE" ? (
                <button disabled className="w-full bg-black/20 text-black/40 font-black py-5 rounded-2xl uppercase text-xs animate-pulse">
                âš”ï¸ MATCH IN PROGRESS
              </button>
            ) : isJoined ? (
              <button disabled className="w-full bg-black/10 text-black border-2 border-black/10 font-black py-5 rounded-2xl uppercase text-xs">
                âœ… REGISTERED
              </button>
            ) : (
              <button onClick={() => setShowModal(true)} className="w-full bg-black text-white font-black py-5 rounded-2xl hover:scale-95 transition-all uppercase text-xs">
                REGISTER NOW â†’
              </button>
            )}
          </motion.div>

          {/* DYNAMIC ROOM ACCESS BOX */}
          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem] text-center shadow-xl">
             {match.status === "COMPLETED" ? (
                <div>
                   <p className="text-[10px] font-black text-white/20 mb-4 uppercase">Match Statistics</p>
                   <button 
                    onClick={() => navigate(`/tournaments/${match._id}/results`)}
                    className="text-[#1DB954] font-black italic uppercase text-lg hover:underline decoration-2 underline-offset-8"
                   >
                     View Final Results ðŸ†
                   </button>
                </div>
             ) : (
               <>
                <p className="text-[10px] font-black text-[#FFD700] mb-4 uppercase flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${match.roomId && match.roomId !== "REVEALING SOON" ? "bg-[#1DB954]" : "bg-[#FFD700]"}`} /> 
                  {match.roomId && match.roomId !== "REVEALING SOON" ? "ROOM IS READY" : "ROOM ACCESS"}
                </p>

                {match.roomId && match.roomId !== "REVEALING SOON" ? (
                  <div className="space-y-4 py-2">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] text-white/40 font-black uppercase mb-1">Room ID</p>
                      <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomId}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] text-white/40 font-black uppercase mb-1">Password</p>
                      <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomPassword}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-4xl font-black italic tracking-tighter mb-2">{timeLeft}</h2>
                    <p className="text-[10px] font-bold text-white/30 uppercase leading-relaxed">
                      {isJoined 
                        ? "ID AND PASSWORD WILL BE REVEALED HERE 15 MINS BEFORE START."
                        : "YOU MUST REGISTER TO ACCESS ROOM DETAILS."}
                    </p>
                  </>
                )}
               </>
             )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#121212] border border-white/10 p-10 rounded-[3rem] max-w-md w-full shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic mb-2 tracking-tight">ARENA ENTRY</h2>
              <form onSubmit={handleJoin} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">In-Game Name (IGN)</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. SKYLORD_07" onChange={(e) => setFormData({...formData, ign: e.target.value})} />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">Player UID</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. 283940122" onChange={(e) => setFormData({...formData, uid: e.target.value})} />
                </div>
                <div className="flex gap-3 pt-6">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-white/5 text-white/40 font-black py-4 rounded-2xl uppercase text-[10px]">CANCEL</button>
                  <button type="submit" disabled={joining} className="flex-1 bg-[#1DB954] text-black font-black py-4 rounded-2xl uppercase text-[10px]">{joining ? "JOINING..." : "CONFIRM ENTRY"}</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Tournaments.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Tournaments() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("UPCOMING");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/tournaments")
      .then((res) => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredMatches = matches.filter((match) => match.status === filter);

  const categories = [
    { id: "LIVE", label: "Live", icon: "âš”ï¸" },
    { id: "UPCOMING", label: "Upcoming", icon: "ðŸ•’" },
    { id: "COMPLETED", label: "Finished", icon: "ðŸ" },
  ];

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center font-black text-[#1DB954] animate-pulse uppercase tracking-[0.3em]">
      Loading Arena...
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Back to Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">
            Arena <span className="text-[#1DB954]">Lobby</span>
          </h1>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Choose your battle phase</p>
        </header>

        {/* MINI NAVBAR / CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#121212] p-2 rounded-2xl border border-white/5 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                filter === cat.id
                  ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.2)]"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[8px] ${
                filter === cat.id ? "bg-black/20" : "bg-white/10"
              }`}>
                {matches.filter(m => m.status === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* TOURNAMENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <motion.div 
                  key={match._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#121212] border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between group transition-all hover:border-[#1DB954]/50"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase ${
                        match.status === "LIVE" ? "bg-red-600 text-white animate-pulse" : 
                        match.status === "COMPLETED" ? "bg-white/10 text-white/40" : "bg-[#1DB954] text-black"
                      }`}>
                        {match.status}
                      </span>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-tighter">{match.matchCategory}</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase italic mb-2 leading-tight group-hover:text-[#1DB954] transition-colors">
                      {match.title}
                    </h2>
                    <p className="text-[#666] text-xs font-bold mb-6 uppercase tracking-widest">
                      {match.map} â€¢ {match.matchType}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/tournaments/view/${match._id}`)}
                    className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      match.status === "COMPLETED" 
                        ? "bg-white/5 text-white/40 hover:bg-white/10" 
                        : "bg-white text-black hover:bg-[#1DB954]"
                    }`}
                  >
                    {match.status === "COMPLETED" ? "View Results" : "Enter Match"}
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                <p className="text-white/10 font-black uppercase italic tracking-[0.5em]">
                  No {filter.toLowerCase()} matches found
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\AdminDashboard.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const [matches, setMatches] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tournaments", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMatches(res.data);
      } catch (err) {
        console.error("Failed to fetch matches", err);
      }
    };
    if (token) fetchMatches();
  }, [token]);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* ðŸš€ NEW: RETURN TO PLAYER HUB BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Return to Player Arena
        </button>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-[#1DB954]">
              Command Center
            </h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
              Admin Match Management Protocol
            </p>
          </div>
          <button 
            onClick={() => navigate("/admin/tournaments/new")}
            className="bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs px-6 py-3 rounded-xl hover:bg-white transition-all"
          >
            + Deploy New Match
          </button>
        </header>

        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">
            <div className="col-span-5">Match Title & Deployment</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Roster</div>
            <div className="col-span-3 text-right">Admin Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {matches.map((match) => (
              <div key={match._id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-white/[0.02] transition-colors">
                <div className="col-span-5">
                  <h3 className="font-black italic uppercase text-lg">{match.title}</h3>
                  <p className="text-white/40 text-xs">
                    {new Date(match.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} â€¢ {match.matchType}
                  </p>
                </div>
                
                <div className="col-span-2 text-center">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                    match.status === 'LIVE' ? 'bg-red-500/10 text-red-500 border-red-500/20 animate-pulse' :
                    match.status === 'COMPLETED' ? 'bg-white/5 text-white/40 border-white/10' :
                    'bg-[#1DB954]/10 text-[#1DB954] border-[#1DB954]/20'
                  }`}>
                    {match.status}
                  </span>
                </div>

                <div className="col-span-2 text-center text-sm font-mono text-white/60">
                  {match.participants?.length || 0} / {match.maxPlayers}
                </div>

                {/* ðŸš€ DYNAMIC BUTTON LOGIC */}
                <div className="col-span-3 flex justify-end">
                  {match.status === "UPCOMING" && (
                    <button 
                      onClick={() => navigate(`/admin/tournaments/${match._id}/room`)}
                      className="text-[#1DB954] border border-[#1DB954]/20 hover:bg-[#1DB954]/10 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all"
                    >
                      Set Room ID
                    </button>
                  )}

                  {match.status === "LIVE" && (
                    <button 
                      onClick={() => navigate(`/admin/tournaments/${match._id}/results`)}
                      className="text-white bg-red-600 hover:bg-red-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    >
                      Publish Results
                    </button>
                  )}

                  {match.status === "COMPLETED" && (
                    <button 
                      onClick={() => navigate(`/tournaments/${match._id}/results`)}
                      className="text-white/60 hover:text-white border border-white/10 hover:border-white/30 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all"
                    >
                      View Results
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\CreateTournament.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateTournament() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    game: "Free Fire",
    matchType: "4v4",
    map: "Bermuda (Remastered)",
    description: "",
    rules: "",
    startTime: "",
    endTime: "",
    prizePool: 0,
    maxPlayers: 8,
    entryFee: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);

    // Format rules from a comma-separated string into an array
    const formattedRules = formData.rules
      ? formData.rules.split(",").map((r) => r.trim())
      : [];

    const payload = {
      ...formData,
      rules: formattedRules,
      prizePool: Number(formData.prizePool),
      maxPlayers: Number(formData.maxPlayers),
      entryFee: Number(formData.entryFee),
      status: "UPCOMING", // Always defaults to UPCOMING on deploy
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/tournaments", payload);
      navigate("/admin"); // Redirect back to Command Center
    } catch (err) {
      console.error("Error creating tournament:", err);
      alert("Deployment failed. Verify backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* BACK TO HUB */}
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Cancel Operational Deployment
        </button>

        <header className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Deploy New <span className="text-[#1DB954]">Match</span>
          </h1>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
            Configure metadata parameters for live deployment
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Tournament Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Clash Squad Afternoon Showdown"
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GAME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Game Title
              </label>
              <input
                type="text"
                name="game"
                value={formData.game}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* MATCH TYPE */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Match Mode
              </label>
              <select
                name="matchType"
                value={formData.matchType}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              >
                <option value="1v1">1v1 Solo Duel</option>
                <option value="4v4">4v4 Clash Squad</option>
                <option value="Full Room">Full Room Battle Royale</option>
              </select>
            </div>

            {/* MAP */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Deployment Map Zone
              </label>
              <select
                name="map"
                value={formData.map}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              >
                <option value="Bermuda (Remastered)">Bermuda (Remastered)</option>
                <option value="Kalahari">Kalahari Desert</option>
                <option value="Purgatory">Purgatory</option>
                <option value="Factory Roof">Factory Roof Only</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* START TIME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Operation Start Time
              </label>
              <input
                type="datetime-local"
                name="startTime"
                required
                value={formData.startTime}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-mono text-white/60 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* END TIME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Operation End Time
              </label>
              <input
                type="datetime-local"
                name="endTime"
                required
                value={formData.endTime}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-mono text-white/60 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PRIZE POOL */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Prize Allocation (INR)
              </label>
              <input
                type="number"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* ENTRY FEE */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Entry Fee Locking
              </label>
              <input
                type="number"
                name="entryFee"
                value={formData.entryFee}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* MAX PLAYERS */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Roster Allocation Cap
              </label>
              <input
                type="number"
                name="maxPlayers"
                value={formData.maxPlayers}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Lobby Description Context
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide strategic operational instructions for the contestants..."
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-[#1DB954] transition-colors resize-none"
            />
          </div>

          {/* RULES */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Combat Engagement Rules (Separate via commas)
            </label>
            <input
              type="text"
              name="rules"
              value={formData.rules}
              onChange={handleChange}
              placeholder="No Hack, No Grenades in 1v1, Emote allowed after kill"
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>

          {/* DEPLOY BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-white disabled:opacity-50 shadow-[0_0_30px_rgba(29,185,84,0.15)]"
          >
            {loading ? "INITIALIZING SECTOR..." : "ðŸš€ Push Match to Live Network"}
          </button>
        </form>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\PublishResults.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublishResults() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const match = res.data;
        setMatchData(match);

        // ðŸ§  GAME LOGIC: Auto-configure slots based on your exact rules
        if (match.matchType === "1v1") {
          // Lone Wolf 1v1: 1 Winner, Kills don't matter for prize
          setWinners([{ rank: "Winner", ign: "", prize: 0 }]); 
        } 
        else if (match.matchCategory === "BATTLE_ROYALE" || match.matchType === "Full Room") {
          // Battle Royale: Top 3 Placements (Rank + Kills matter)
          setWinners([
            { rank: 1, ign: "", kills: 0, prize: 0 },
            { rank: 2, ign: "", kills: 0, prize: 0 },
            { rank: 3, ign: "", kills: 0, prize: 0 },
          ]);
        } 
        else {
          // Clash Squad (4v4): 4 Squad Members (Kills matter for per-kill bounty)
          setWinners([
            { rank: "Squad MVP", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
          ]);
        }
      } catch (err) {
        console.error("Error fetching match:", err);
      }
    };
    
    if (token) fetchMatch();
  }, [id, token]);

  const handleChange = (index, field, value) => {
    const updatedWinners = [...winners];
    updatedWinners[index][field] = value;
    setWinners(updatedWinners);
  };

  const addWinnerSlot = () => {
    const nextRank = winners.length + 1;
    setWinners([...winners, { rank: nextRank, ign: "", kills: 0, prize: 0 }]);
  };

  const removeWinnerSlot = (indexToRemove) => {
    const updatedWinners = winners.filter((_, index) => index !== indexToRemove);
    setWinners(updatedWinners);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        `http://localhost:5000/api/tournaments/${id}/results`,
        { results: winners },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/admin"); 
    } catch (err) {
      console.error("Error publishing results:", err);
      alert("Failed to push results to the server.");
    } finally {
      setLoading(false);
    }
  };

  if (!matchData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-[#1DB954] font-black italic animate-pulse">
        Fetching Secure Match Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Abort Operation
        </button>

        <div className="bg-[#121212] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <header className="mb-8 border-b border-white/10 pb-6 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-[#1DB954] mb-2">
                {matchData.title}
              </h1>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                Mode: {matchData.matchType} â€¢ {matchData.matchCategory || "CUSTOM"}
              </p>
            </div>
            {/* Only show Add Player if it's Battle Royale */}
            {matchData.matchCategory === "BATTLE_ROYALE" && (
              <button 
                onClick={addWinnerSlot}
                type="button"
                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
              >
                + Add Player Slot
              </button>
            )}
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {winners.map((winner, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-white/5 relative group">
                
                {matchData.matchCategory === "BATTLE_ROYALE" && winners.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWinnerSlot(index)}
                    className="absolute top-4 right-4 text-white/20 hover:text-red-500 font-black text-xs transition-colors"
                  >
                    âœ•
                  </button>
                )}

                <h3 className="text-[#1DB954] font-black uppercase tracking-widest text-xs mb-4">
                  {matchData.matchType === "1v1" ? "Lone Wolf Winner" : 
                   matchData.matchCategory === "CLASH_SQUAD" ? winner.rank : 
                   `BR Placement #${winner.rank}`}
                </h3>
                
                <div className={`grid grid-cols-1 ${matchData.matchType === "1v1" ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4`}>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      In-Game Name
                    </label>
                    <input
                      type="text"
                      required
                      value={winner.ign}
                      onChange={(e) => handleChange(index, "ign", e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-white transition-all"
                    />
                  </div>

                  {/* HIDE KILLS INPUT IF IT IS A 1v1 MATCH */}
                  {matchData.matchType !== "1v1" && (
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                        {matchData.matchCategory === "CLASH_SQUAD" ? "Squad Kills" : "Total Kills"}
                      </label>
                      <input
                        type="number"
                        required
                        value={winner.kills}
                        onChange={(e) => handleChange(index, "kills", Number(e.target.value))}
                        className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-white transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Prize Payout (INR)
                    </label>
                    <input
                      type="number"
                      required
                      value={winner.prize}
                      onChange={(e) => handleChange(index, "prize", Number(e.target.value))}
                      className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-[#1DB954] font-black transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-[#1DB954] hover:shadow-[0_0_30px_rgba(29,185,84,0.3)] disabled:opacity-50 mt-8"
            >
              {loading ? "PROCESSING..." : "ðŸ† Finalize Match & Lock Database"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\SetRoomCredentials.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function SetRoomCredentials() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [matchTitle, setMatchTitle] = useState("Loading Match...");
  const [formData, setFormData] = useState({
    roomId: "",
    roomPassword: "",
  });

  // Fetch the match title so the Admin knows which match they are updating
  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`);
        setMatchTitle(res.data.title);
      } catch (err) {
        console.error("Error fetching match details:", err);
        setMatchTitle("Unknown Match");
      }
    };
    fetchMatch();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`http://localhost:5000/api/tournaments/${id}/credentials`, formData);
      navigate("/admin"); // Back to command center on success
    } catch (err) {
      console.error("Error injecting credentials:", err);
      alert("Failed to push credentials to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Abort Operation
        </button>

        <div className="bg-[#121212] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <header className="mb-8">
            <div className="inline-block bg-red-600/20 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 animate-pulse">
              Live Credential Injection
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-[#1DB954] mb-2">
              {matchTitle}
            </h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
              Data will reveal 15m prior to start
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Free Fire Room ID
              </label>
              <input
                type="text"
                name="roomId"
                required
                value={formData.roomId}
                onChange={handleChange}
                placeholder="e.g. 55667788"
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-xl font-mono text-white focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Room Password
              </label>
              <input
                type="text"
                name="roomPassword"
                required
                value={formData.roomPassword}
                onChange={handleChange}
                placeholder="e.g. JOINFAST12"
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-xl font-mono text-white focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-white disabled:opacity-50 mt-4 shadow-[0_0_30px_rgba(29,185,84,0.15)]"
            >
              {loading ? "TRANSMITTING..." : "Push Credentials to Players"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


# FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\utils\auth.js
export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};



====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\index.html
====================================================

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\package.json
====================================================

{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.11.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.18",
    "@tailwindcss/postcss7-compat": "^2.2.17",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\postcss.config.js
====================================================

export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Change this line
    autoprefixer: {},
  },
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\README.md
====================================================

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\tailwind.config.js
====================================================

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spotify: "#1DB954",
        surface: "#121212",
        card: "#181818",
        border: "#282828",
        muted: "#b3b3b3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\vite.config.js
====================================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\public\vite.svg
====================================================

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\App.css
====================================================

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\App.jsx
====================================================

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";

// PUBLIC / PLAYER PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import MyMatches from "./pages/MyMatches";
import Leaderboard from './pages/Leaderboard';
import Profile from "./pages/Profile";
import MatchResults from "./pages/MatchResults";

// ðŸ›¡ï¸ ADMIN PAGES
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateTournament from "./pages/admin/CreateTournament";
import SetRoomCredentials from "./pages/admin/SetRoomCredentials";
import PublishResults from "./pages/admin/PublishResults"; // <-- This was missing!

export default function App() {
  const [open, setOpen] = useState(false);
  const { token, user, loading } = useAuth(); 

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#1DB954] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Helper logic to secure admin routes
  const isAdmin = token && user?.role?.toUpperCase() === "ADMIN";
  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      <main className="flex-1"> 
        <Routes>
          {/* PUBLIC & PLAYER ROUTES */}
          <Route path="/" element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} />
          <Route path="/tournaments" element={<Tournaments setOpen={setOpen} />} />
          <Route path="/tournaments/view/:id" element={<TournamentDetail setOpen={setOpen} />} />
          <Route path="/tournaments/:id/results" element={<MatchResults />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/my-matches" element={token ? <MyMatches setOpen={setOpen} /> : <Navigate to="/login" />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />

          {/* ðŸ›¡ï¸ ADMIN SECURE ROUTES */}
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
          <Route path="/admin/tournaments/new" element={isAdmin ? <CreateTournament /> : <Navigate to="/" />} />
          <Route path="/admin/tournaments/:id/room" element={isAdmin ? <SetRoomCredentials /> : <Navigate to="/" />} />
          
          {/* âœ… THE MISSING ROUTE IS NOW HERE */}
          <Route path="/admin/tournaments/:id/results" element={isAdmin ? <PublishResults /> : <Navigate to="/" />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />

          {/* FALLBACK ROUTE */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\index.css
====================================================

@import "tailwindcss";

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #000000;
  color: white;
  font-family: Inter, system-ui, sans-serif;
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\main.jsx
====================================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\api\axios.js
====================================================

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\api\tournaments.js
====================================================

import axios from "./axios";

export const getTournaments = () =>
  axios.get("/tournaments");


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\assets\react.svg
====================================================

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Layout.jsx
====================================================

import { useState } from "react";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-900 text-white">
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full bg-black transition-all duration-300 ease-in-out
        ${open ? "w-56" : "w-16"} flex flex-col`}
      >
        {/* Logo / Menu */}
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-white transition"
          >
            <Menu size={22} />
          </button>

          {open && (
            <span className="text-green-500 font-bold text-lg transition-opacity">
              FF Arena
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          {["Home", "Tournaments", "Profile"].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 px-4 py-3 cursor-pointer
              hover:bg-neutral-800 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
              {open && (
                <span className="text-gray-300 group-hover:text-white">
                  {item}
                </span>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300
        ${open ? "ml-56" : "ml-16"}`}
      >
        {/* Top Bar */}
        <header className="h-14 bg-neutral-800 flex items-center justify-between px-6">
          <span className="text-sm text-gray-400">
            Welcome to Free Fire Arena
          </span>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <section className="flex-1 p-8 overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Navbar.jsx
====================================================

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "ARENA LOBBY", path: "/lobby" },
    { name: "MY HUB", path: "/my-matches" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100] px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/lobby" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1DB954] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(29,185,84,0.4)]">
            <span className="text-black font-black text-xl italic">A</span>
          </div>
          <span className="font-black italic tracking-tighter text-2xl uppercase">Arena</span>
        </NavLink>

        {/* NAV LINKS */}
        <div className="flex gap-8 md:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? "text-[#1DB954]" : "text-white/40 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DB954] shadow-[0_0_10px_#1DB954]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* PROFILE/LOGOUT placeholder */}
        <button className="hidden md:block text-[9px] font-black border border-white/10 px-5 py-2 rounded-full hover:bg-white/5 transition-all text-white/60">
          PROFILE
        </button>
      </div>
    </nav>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\ProtectedRoute.jsx
====================================================

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\components\Sidebar.jsx
====================================================

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

  // Base navigation for everyone
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Leaderboard", path: "/leaderboard", icon: "ðŸ†" }, // âœ… Added Leaderboard
    { name: "My Hub", path: "/my-matches" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        className="fixed top-0 left-0 z-50 h-full w-72 bg-[#121212] border-r border-[#282828] p-6 flex flex-col"
      >
        <h1 className="text-xl font-black text-[#1DB954] mb-10 uppercase italic tracking-tighter">
          ðŸ”¥ FF Arena
        </h1>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setOpen(false)} 
              className="block"
            >
              <div className="px-4 py-3 text-[#b3b3b3] font-bold text-sm hover:text-white rounded-lg hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-3">
                {item.icon && <span>{item.icon}</span>}
                {item.name}
              </div>
            </Link>
          ))}

          {/* ADMIN ONLY SECTION */}
          {user?.role === "ADMIN" && (
            <div className="pt-4 mt-4 border-t border-white/5">
              <p className="px-4 mb-2 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Management</p>
              <Link 
                to="/admin"
                onClick={() => setOpen(false)} 
                className="block"
              >
                <div className="px-4 py-3 text-[#1DB954] font-black text-sm hover:brightness-125 rounded-lg hover:bg-[#1DB954]/5 cursor-pointer transition-all border border-[#1DB954]/20">
                  ðŸ›¡ï¸ Command Center
                </div>
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-[#1DB954] text-black font-black py-4 rounded-full hover:scale-105 transition uppercase text-xs"
        >
          Logout
        </button>
      </motion.aside>
    </>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\context\AuthContext.jsx
====================================================

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 1. Initialize from localStorage so data persists on refresh
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  // 2. Updated login function to handle the USER object
  const login = (userData, newToken) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Export the hook separately to help Vite's Fast Refresh
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\AdminPanel.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({ 
    roomId: "", 
    roomPassword: "", 
    status: "UPCOMING",
    matchCategory: "CLASH_SQUAD" 
  });
  const [participantResults, setParticipantResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [viewingMatch, setViewingMatch] = useState(null);

  const fetchTournaments = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage({ text: "SESSION EXPIRED: PLEASE RE-LOGIN", type: "error" });
        return;
      }

      const res = await axios.get("http://localhost:5000/api/admin/tournaments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(res.data);
      setMessage({ text: "", type: "" });
    } catch (err) {
      if (err.response?.status === 401) {
        setMessage({ text: "AUTH FAILED: LOG IN AGAIN", type: "error" });
      } else {
        setMessage({ text: "FAILED TO LOAD TOURNAMENTS", type: "error" });
      }
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedMatch = tournaments.find(t => t._id === id);
    if (selectedMatch) {
      setForm({
        roomId: selectedMatch.roomId || "",
        roomPassword: selectedMatch.roomPassword || "",
        status: selectedMatch.status || "UPCOMING",
        matchCategory: selectedMatch.matchCategory || "CLASH_SQUAD"
      });
      
      const initialResults = (selectedMatch.participants || []).map(p => ({
        ...p,
        kills: p.kills || 0,
        rank: p.rank || 0
      }));
      setParticipantResults(initialResults);
    }
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...participantResults];
    updated[index][field] = Number(value);
    setParticipantResults(updated);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`http://localhost:5000/api/admin/tournaments/${selectedId}/room`, 
        { ...form, participants: participantResults }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage({ text: "ARENA & STATS UPDATED", type: "success" });
      fetchTournaments();
    } catch (err) {
      setMessage({ text: "UPDATE FAILED", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-[#1DB954]">Command Center</h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.4em] uppercase">Control Panel v2.0</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5 h-fit shadow-2xl">
            <h2 className="text-xl font-black italic uppercase mb-6 text-[#1DB954]">Tournament Logic</h2>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Select Match</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-[#1DB954] font-bold text-sm text-white cursor-pointer"
                  onChange={handleSelectChange}
                  value={selectedId}
                  required
                >
                  <option value="">{tournaments.length === 0 ? "Loading Matches..." : "-- Choose Tournament --"}</option>
                  {tournaments.map((t) => (
                    <option key={t._id} value={t._id}>[{t.status}] {t.title}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Scoring Mode</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white"
                  value={form.matchCategory}
                  onChange={(e) => setForm({...form, matchCategory: e.target.value})}
                >
                  <option value="BATTLE_ROYALE">BATTLE ROYALE (Rank 1 = 20pts + Kills)</option>
                  <option value="CLASH_SQUAD">CLASH SQUAD (Kills Only)</option>
                  <option value="LONE_WOLF">LONE WOLF (Kills Only)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Room ID" value={form.roomId} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomId: e.target.value})} />
                <input placeholder="Room Pass" value={form.roomPassword} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomPassword: e.target.value})} />
              </div>

              <select className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white" value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
                <option value="UPCOMING">UPCOMING</option>
                <option value="LIVE">LIVE</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              {selectedId && (form.status === "LIVE" || form.status === "COMPLETED") && (
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h3 className="text-xs font-black uppercase text-white/40 tracking-widest">Performance Data (Kills | Rank)</h3>
                  {participantResults.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs font-bold truncate w-24 italic underline decoration-[#1DB954]">{p.ign}</span>
                      <div className="flex gap-2">
                        <input type="number" value={p.kills} className="w-14 bg-black border border-[#1DB954]/30 p-2 rounded text-xs text-center text-[#1DB954]" onChange={(e) => handleStatChange(idx, 'kills', e.target.value)} />
                        <input type="number" value={p.rank} className="w-14 bg-black border border-white/10 p-2 rounded text-xs text-center" onChange={(e) => handleStatChange(idx, 'rank', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button type="submit" disabled={loading || !selectedId} className={`w-full font-black py-4 rounded-xl uppercase transition-all shadow-lg ${!selectedId ? "bg-white/5 text-white/10" : "bg-[#1DB954] text-black hover:scale-[1.02]"}`}>
                {loading ? "Processing..." : "Push Updates"}
              </button>
              {message.text && <p className={`mt-4 text-center text-[10px] font-black ${message.type === 'error' ? 'text-red-500' : 'text-[#1DB954]'}`}>{message.text}</p>}
            </form>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-xl font-black italic uppercase underline decoration-[#1DB954] underline-offset-8">Live Status Feed</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {tournaments.map(t => (
                <div key={t._id} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className={`text-[8px] font-black uppercase mt-1 ${t.status === 'LIVE' ? 'text-red-500' : 'text-[#1DB954]'}`}>{t.status} - {t.matchCategory}</p>
                    </div>
                    <button onClick={() => setViewingMatch(t)} className="text-[10px] font-black bg-white/5 hover:bg-[#1DB954] hover:text-black px-4 py-2 rounded-lg uppercase">Inspect</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Home.jsx
====================================================

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="flex-1 bg-black min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur-xl border-b border-white/5 p-6 flex justify-between items-center">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl p-2 rounded-full hover:bg-white/10"
        >
          â˜°
        </button>

        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleLogout}
              className="bg-[#1DB954] text-black font-bold px-8 py-2.5 rounded-full hover:scale-105 transition"
            >
              Logout
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="px-8 pt-12">
        <h1 className="text-6xl font-black tracking-tight">
          Welcome to <span className="text-[#1DB954]">Free Fire Arena ðŸ”¥</span>
        </h1>
        <p className="text-[#b3b3b3] mt-4 max-w-xl">
          Your esports journey starts here.
        </p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {[
          { label: "Matches Played", value: 24 },
          { label: "Total Kills", value: 187 },
          { label: "Win Rate", value: "62%" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -8, backgroundColor: "#282828" }}
            className="bg-[#181818] border border-[#282828] rounded-2xl p-8"
          >
            <p className="text-[#b3b3b3] uppercase text-xs">{stat.label}</p>
            <h2 className="text-5xl font-black mt-3">{stat.value}</h2>
          </motion.div>
        ))}
      </section>
    </main>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Leaderboard.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For the back button functionality

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");
        setPlayers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse text-2xl uppercase tracking-tighter">
          Loading Elites...
        </div>
      </div>
    );
  }

  const topThree = players.slice(0, 3);
  const theRest = players.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Return to Arena
        </button>

        <header className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-2">
            Hall of <span className="text-[#1DB954]">Fame</span>
          </h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.5em] uppercase">
            Global Tournament Rankings
          </p>
        </header>

        {/* PODIUM SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
          {topThree[1] && <PodiumCard player={topThree[1]} rank={2} height="h-52" color="border-gray-400" />}
          {topThree[0] && <PodiumCard player={topThree[0]} rank={1} height="h-72" color="border-[#1DB954]" isGold />}
          {topThree[2] && <PodiumCard player={topThree[2]} rank={3} height="h-44" color="border-amber-700" />}
        </div>

        {/* LIST SECTION */}
        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-5 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-center">Matches</span>
            <span className="text-center">Kills</span>
            <span className="text-right">Total Points</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {theRest.length > 0 ? (
              theRest.map((p, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  key={p._id} 
                  className="grid grid-cols-5 p-6 items-center hover:bg-[#1DB954]/5 transition-colors"
                >
                  <span className="font-black italic text-xl text-white/10">#{index + 4}</span>
                  <div>
                    <p className="font-bold text-sm text-white">{p.ign}</p>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">@{p.username}</p>
                  </div>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalMatches}</span>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalKills}</span>
                  <span className="text-right font-black text-[#1DB954] text-2xl italic">{p.totalPoints}</span>
                </motion.div>
              ))
            ) : (
              players.length < 4 && (
                <div className="p-10 text-center text-white/10 font-black uppercase text-xs tracking-[0.3em]">
                  End of Rankings
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ player, rank, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-[2.5rem] p-6 ${height} justify-center shadow-2xl`}
    >
      <div className={`absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {rank}
      </div>
      <p className="text-[10px] font-black text-white/40 uppercase mb-1 tracking-widest">Global Elite</p>
      
      <h3 className={`text-2xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.ign}
      </h3>
      
      <div className="mt-4 text-center">
        <p className="text-5xl font-black tracking-tighter text-white">{player.totalPoints}</p>
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isGold ? 'text-[#1DB954]' : 'text-white/20'}`}>
          Total Score
        </p>
        <div className="mt-2 flex gap-2 justify-center opacity-40">
           <span className="text-[9px] font-bold uppercase">{player.totalKills} Kills</span>
           <span className="text-[9px] font-bold text-white/50">|</span>
           <span className="text-[9px] font-bold uppercase">{player.totalMatches} Matches</span>
        </div>
      </div>
    </motion.div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Login.jsx
====================================================

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // FIX: Pass both user object (which has the role) and the token
      // Your backend returns { token, user: { id, username, role } }
      login(res.data.user, res.data.token);

      if (stayLoggedIn) {
        localStorage.setItem("rememberMe", "true");
      }

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-12">
      
      {/* Brand Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase text-center">
          ðŸ”¥ FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center tracking-tight">
          Log in to continue
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm py-1">
            <label className="flex items-center cursor-pointer text-[#b3b3b3] hover:text-white transition group">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 accent-[#1DB954] bg-[#242424] border-none rounded cursor-pointer"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
              />
              <span className="font-bold">Stay logged in</span>
            </label>
            
            <Link 
              to="/forgot-password" 
              className="text-[#b3b3b3] hover:text-[#1DB954] font-bold transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.95] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm"
          >
            Log In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Don't have an account?{" "}
            <Link to="/register" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4">
              Sign up for FF Arena
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\MatchResults.jsx
====================================================

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function MatchResults() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");

const res = await axios.get(
  `http://localhost:5000/api/tournaments/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
        setMatch(res.data);
      } catch (err) {
        console.error("Error fetching match results", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse text-2xl uppercase tracking-tighter">
          Compiling Match Data...
        </div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white/40 font-black uppercase tracking-widest">
        Match Records Not Found
      </div>
    );
  }

  // Sort participants safely by their assigned rank
  // Results are already ordered by admin
  const rankedPlayers = match.results || [];

  const topThree = rankedPlayers.slice(0, 3);
  const theRest = rankedPlayers.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate(`/tournaments/view/${id}`)}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Back to Match Details
        </button>

        <header className="text-center mb-16">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
            Official Match Results
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 text-[#1DB954]">
            {match.title}
          </h1>
          <p className="text-white/40 font-black text-xs tracking-[0.4em] uppercase">
            {match.map} â€¢ {match.matchType}
          </p>
        </header>

        {rankedPlayers.length === 0 ? (
          <div className="bg-[#121212] p-20 rounded-[3rem] border border-white/5 text-center">
            <p className="text-white/20 font-black uppercase tracking-[0.3em]">
              Admin has not published results yet.
            </p>
          </div>
        ) : (
          <>
            {/* PODIUM SECTION */}
            <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
              {topThree[1] && <PodiumCard player={topThree[1]} height="h-52" color="border-gray-400" />}
              {topThree[0] && <PodiumCard player={topThree[0]} height="h-72" color="border-[#1DB954]" isGold />}
              {topThree[2] && <PodiumCard player={topThree[2]} height="h-44" color="border-amber-700" />}
            </div>

            {/* LIST SECTION */}
            <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-4 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
  <span>Placement</span>
  <span>Player IGN</span>
  <span className="text-center">UID</span>
  <span className="text-right">Kills / Prize</span>
</div>
              
              <div className="divide-y divide-white/5">
                {theRest.length > 0 ? (
                  theRest.map((p) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      key={p._id || p.uid} 
                      className="grid grid-cols-4 p-6 items-center hover:bg-[#1DB954]/5 transition-colors"
                    >
                      <span className="font-black italic text-xl text-white/20">{p.rank || "-"}</span>
                      <span className="font-bold text-sm text-white">{p.ign}</span>
                      <span className="text-center font-mono text-xs text-white/40">{p.uid}</span>
                      <span className="text-right flex flex-col items-end">
  <span className="font-black text-[#1DB954] text-2xl italic">
    {p.kills || 0} Kills
  </span>

  <span className="text-white text-sm font-bold">
    â‚¹{p.prize || 0}
  </span>
</span>
                    </motion.div>
                  ))
                ) : (
                  topThree.length > 0 && (
                    <div className="p-8 text-center text-white/10 font-black uppercase text-[10px] tracking-[0.3em]">
                      No additional participants
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PodiumCard({ player, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-[2.5rem] p-6 ${height} justify-center shadow-2xl`}
    >
      <div
  className={`absolute -top-8 min-w-[90px] px-3 py-2 rounded-full flex items-center justify-center font-black text-[10px] border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}
>
  {player.rank || "-"}
</div>
      
      <h3 className={`text-2xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.ign}
      </h3>
      
      <div className="mt-4 text-center">
  <p className="text-5xl font-black tracking-tighter text-white">
    {player.kills || 0}
  </p>

  <p className="text-lg font-bold text-[#1DB954] mt-2">
    â‚¹{player.prize || 0}
  </p>

  <p
    className={`text-[9px] font-black uppercase tracking-[0.2em] ${
      isGold ? 'text-[#1DB954]' : 'text-white/20'
    }`}
  >
    Match Kills
  </p>
</div>
    </motion.div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\MyMatches.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MyMatches() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("UPCOMING"); // UPCOMING | LIVE | COMPLETED

  useEffect(() => {
    const fetchResults = async () => {
      // ðŸ›‘ 1. SAFETY CHECK: Do not fire the request until the token loads!
      if (!token) return; 

      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMatch(res.data);
      } catch (err) {
        console.error("Error fetching match results", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [id, token]); // ðŸ‘ˆ 2. Add 'token' to this dependency array!

  // Filter current view based on active tab selection
  const displayedMatches = myMatches.filter((m) => m.status === activeTab);

  const tabs = [
    { id: "UPCOMING", label: "My Upcoming", icon: "ðŸ•’" },
    { id: "LIVE", label: "My Live Matches", icon: "âš”ï¸" },
    { id: "COMPLETED", label: "Battle History", icon: "ðŸ" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse tracking-widest">
          LOADING YOUR SCHEDULE...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK TO DASHBOARD */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">
            My <span className="text-[#1DB954]">Hub</span>
          </h1>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
            Your personal combat deployment schedule
          </p>
        </header>

        {/* TABS NAVBAR */}
        <div className="flex gap-2 mb-10 bg-[#121212] p-2 rounded-2xl border border-white/5 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                activeTab === tab.id
                  ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.2)]"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[8px] ${
                activeTab === tab.id ? "bg-black/20" : "bg-white/10"
              }`}>
                {myMatches.filter((m) => m.status === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* TOURAMENTS DISPLAY LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {displayedMatches.length > 0 ? (
              displayedMatches.map((match) => (
                <motion.div
                  key={match._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#121212] border border-white/10 p-6 rounded-[2.5rem] flex flex-col justify-between group transition-all hover:border-[#1DB954]/40"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase ${
                        match.status === "LIVE" ? "bg-red-600 text-white animate-pulse" :
                        match.status === "COMPLETED" ? "bg-white/10 text-white/30" : "bg-[#1DB954]/10 text-[#1DB954]"
                      }`}>
                        {match.status}
                      </span>
                      <span className="text-[10px] font-mono text-white/30">{match.matchCategory}</span>
                    </div>

                    <h2 className="text-xl font-black uppercase italic mb-2 tracking-tight group-hover:text-[#1DB954] transition-colors">
                      {match.title}
                    </h2>
                    <p className="text-white/40 text-xs font-bold uppercase mb-6">
                      Map: {match.map} â€¢ Mode: {match.matchType}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/tournaments/view/${match._id}`)}
                    className={`w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      match.status === "COMPLETED"
                        ? "bg-white/5 text-white/40 hover:bg-white/10"
                        : "bg-white text-black hover:bg-[#1DB954]"
                    }`}
                  >
                    {match.status === "COMPLETED" ? "View Match Results" : "Open Room Lobby"}
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center border-2 border-dashed border-white/5 rounded-[2.5rem]"
              >
                <p className="text-white/20 font-black uppercase text-xs tracking-widest">
                  No registered matches found in this tier
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Profile.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // 1. Fetch Global Stats for Summary
        const leaderRes = await axios.get("http://localhost:5000/api/leaderboard");
        const currentUserStats = leaderRes.data.find(p => p._id === user.id);
        setStats(currentUserStats);

        // 2. Fetch Detailed Tournament History
        // This assumes your backend has a route to get tournaments by participant ID
        const tournamentRes = await axios.get("http://localhost:5000/api/tournaments");
        const myHistory = tournamentRes.data.filter(t => 
          t.participants.some(p => p.user === user.id) && t.status === "COMPLETED"
        );
        setHistory(myHistory);

      } catch (err) {
        console.error("Profile fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchProfileData();
  }, [user]);

  if (loading) return <div className="p-20 text-[#1DB954] font-black animate-pulse uppercase italic">Synchronizing Data...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP NAV */}
        <button onClick={() => navigate("/")} className="mb-8 text-[10px] font-black uppercase text-white/30 hover:text-[#1DB954] transition-colors tracking-widest">
          â† Back to Arena
        </button>

        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-[#121212] p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="w-40 h-40 bg-[#1DB954] rounded-full flex items-center justify-center text-6xl font-black text-black italic shadow-[0_0_50px_rgba(29,185,84,0.3)]">
            {stats?.ign?.charAt(0) || user?.username?.charAt(0)}
          </div>
          
          <div className="text-center md:text-left z-10">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">{stats?.ign || "RECRUIT"}</h1>
            <p className="text-white/30 font-black text-xs uppercase tracking-[0.4em] mb-4">Official ID: {user?.username}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
               <Badge text="VETERAN" />
               <Badge text={`LEVEL ${stats?.totalMatches || 0}`} />
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard label="Total Points" value={stats?.totalPoints || 0} color="text-[#1DB954]" />
          <StatCard label="Confirmed Kills" value={stats?.totalKills || 0} />
          <StatCard label="Matches Played" value={stats?.totalMatches || 0} />
        </div>

        {/* BATTLE HISTORY TABLE */}
        <div className="bg-[#121212] rounded-[2.5rem] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Battle History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase text-white/20 tracking-widest bg-white/[0.02]">
                  <th className="p-6">Tournament</th>
                  <th className="p-6 text-center">Rank</th>
                  <th className="p-6 text-center">Kills</th>
                  <th className="p-6 text-right">Points Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {history.length > 0 ? history.map((match) => {
                  const myPerformance = match.participants.find(p => p.user === user.id);
                  return (
                    <tr key={match._id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <p className="font-bold text-sm group-hover:text-[#1DB954] transition-colors">{match.title}</p>
                        <p className="text-[9px] font-black text-white/20 uppercase mt-1">{match.matchCategory}</p>
                      </td>
                      <td className="p-6 text-center font-black italic text-xl text-white/40">#{myPerformance?.rank}</td>
                      <td className="p-6 text-center font-mono text-sm">{myPerformance?.kills}</td>
                      <td className="p-6 text-right font-black text-[#1DB954] text-xl">
                        {/* Logic: Rank 1 BR gets +20, else just kills */}
                        {(match.matchCategory === "BATTLE_ROYALE" && myPerformance?.rank === 1) 
                          ? myPerformance?.kills + 20 
                          : myPerformance?.kills}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="4" className="p-12 text-center text-white/10 font-black uppercase text-xs tracking-widest">
                      No combat records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-white" }) {
  return (
    <div className="bg-[#121212] p-8 rounded-[2rem] border border-white/5 text-center transition-transform hover:scale-105">
      <p className="text-[10px] font-black uppercase text-white/20 tracking-[0.2em] mb-2">{label}</p>
      <p className={`text-5xl font-black italic tracking-tighter ${color}`}>{value}</p>
    </div>
  );
}

function Badge({ text }) {
  return <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest text-white/60 uppercase">{text}</span>;
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Register.jsx
====================================================

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Connects to your backend auth.routes.js -> register controller
      await axios.post("http://localhost:5000/api/auth/register", form);
      
      // On success, send user to login page
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Flex centering ensures the card doesn't go to the side
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-10">
      
      {/* Branding Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
          ðŸ”¥ FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </motion.div>

      {/* Registration Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 text-center tracking-tight">
          Sign up for free
        </h2>
        <p className="text-[#b3b3b3] text-center text-sm mb-8 font-medium">
          Start your journey in the arena.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Create a username"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4 font-black">
              Log in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\TournamentDetail.jsx
====================================================

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function TournamentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ ign: "", uid: "" });
  const [joining, setJoining] = useState(false);

  const fetchMatch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      setMatch(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatch();
  }, [id]);

  useEffect(() => {
    if (!match || match.status !== "UPCOMING") {
        if (match?.status === "LIVE") setTimeLeft("MATCH IS LIVE");
        if (match?.status === "COMPLETED") setTimeLeft("MATCH ENDED");
        return;
    }

    const timer = setInterval(() => {
      const distance = new Date(match.startTime).getTime() - new Date().getTime();
      
      if (distance < 0) {
        setTimeLeft("MATCH STARTED");
        clearInterval(timer);
        fetchMatch(); 
      } else {
        const h = Math.floor((distance % 86400000) / 3600000);
        const m = Math.floor((distance % 3600000) / 60000);
        const s = Math.floor((distance % 60000) / 1000);
        setTimeLeft(`${h}h ${m}m ${s}s`);

        if (h === 0 && m === 15 && s === 0) {
          fetchMatch();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [match]);

  const handleJoin = async (e) => {
    e.preventDefault();
    setJoining(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/tournaments/${id}/join`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Successfully joined the Arena!");
      setShowModal(false);
      fetchMatch(); 
    } catch (err) {
      alert(err.response?.data?.message || "Failed to join");
    } finally {
      setJoining(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#1DB954] font-black tracking-widest">LOADING ARENA...</div>;
  if (!match) return <div className="p-20 text-white text-center font-bold uppercase">Match Not Found</div>;

  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split('.')[1])).id : null;
  const isJoined = match.participants?.some(p => p.user === userId || p.user?._id === userId);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto mb-8">
        {/* ðŸš€ FIX: Replaced navigate(-1) with absolute path navigate("/") */}
        <button onClick={() => navigate("/")} className="text-xs font-black text-white/40 hover:text-[#1DB954] transition-colors flex items-center gap-2">
          â† ARENA LOBBY
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative h-[300px] md:h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
            <img src={match.banner} alt="banner" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <div className="flex gap-2 mb-4">
                <span className={`text-black text-[10px] font-black px-3 py-1 rounded-full uppercase ${match.status === 'COMPLETED' ? 'bg-white/20 text-white' : 'bg-[#1DB954]'}`}>
                  {match.status}
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">{match.matchCategory}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">{match.title}</h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "PRIZE POOL", val: `â‚¹${match.prizePool}`, color: "text-[#1DB954]" },
              { label: "ENTRY FEE", val: match.entryFee === 0 ? "FREE" : `â‚¹${match.entryFee}` },
              { label: "MAP", val: match.map },
              { label: "VERSION", val: "MOBILE" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#121212] border border-white/5 p-6 rounded-3xl">
                <p className="text-[10px] font-black text-white/40 mb-1 uppercase tracking-widest">{stat.label}</p>
                <p className={`text-xl font-black uppercase italic ${stat.color || "text-white"}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#1DB954] rounded-full" />
              <h2 className="text-xl font-black uppercase italic tracking-tight">OFFICIAL MATCH RULES</h2>
            </div>
            <ul className="space-y-4">
              {match.rules?.map((rule, idx) => (
                <li key={idx} className="flex gap-4 text-sm font-bold text-white/70">
                  <span className="text-[#1DB954]">0{idx + 1}</span> {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <motion.div className={`${match.status === "COMPLETED" ? "bg-white/5" : "bg-[#1DB954]"} p-8 rounded-[3rem] text-white shadow-2xl transition-colors`}>
            <h3 className={`font-black text-4xl uppercase italic mb-1 tracking-tighter ${match.status === "COMPLETED" ? "text-white/20" : "text-black"}`}>
              {match.status === "COMPLETED" ? "MATCH ENDED" : "JOIN ARENA"}
            </h3>
            <p className={`font-black text-[10px] opacity-60 mb-8 uppercase tracking-widest ${match.status === "COMPLETED" ? "text-white/10" : "text-black/60"}`}>
              FINAL SLOTS: {match.participants?.length || 0} / {match.maxPlayers}
            </p>

            {match.status === "COMPLETED" ? (
              <button disabled className="w-full bg-white/5 text-white/20 border border-white/10 font-black py-5 rounded-2xl uppercase text-xs">
                ðŸ BATTLE FINISHED
              </button>
            ) : match.status === "LIVE" ? (
                <button disabled className="w-full bg-black/20 text-black/40 font-black py-5 rounded-2xl uppercase text-xs animate-pulse">
                âš”ï¸ MATCH IN PROGRESS
              </button>
            ) : isJoined ? (
              <button disabled className="w-full bg-black/10 text-black border-2 border-black/10 font-black py-5 rounded-2xl uppercase text-xs">
                âœ… REGISTERED
              </button>
            ) : (
              <button onClick={() => setShowModal(true)} className="w-full bg-black text-white font-black py-5 rounded-2xl hover:scale-95 transition-all uppercase text-xs">
                REGISTER NOW â†’
              </button>
            )}
          </motion.div>

          {/* DYNAMIC ROOM ACCESS BOX */}
          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem] text-center shadow-xl">
             {match.status === "COMPLETED" ? (
                <div>
                   <p className="text-[10px] font-black text-white/20 mb-4 uppercase">Match Statistics</p>
                   <button 
                    onClick={() => navigate(`/tournaments/${match._id}/results`)}
                    className="text-[#1DB954] font-black italic uppercase text-lg hover:underline decoration-2 underline-offset-8"
                   >
                     View Final Results ðŸ†
                   </button>
                </div>
             ) : (
                <>
                <p className="text-[10px] font-black text-[#FFD700] mb-4 uppercase flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${match.roomId && match.roomId !== "REVEALING SOON" ? "bg-[#1DB954]" : "bg-[#FFD700]"}`} /> 
                  {match.roomId && match.roomId !== "REVEALING SOON" ? "ROOM IS READY" : "ROOM ACCESS"}
                </p>

                {match.roomId && match.roomId !== "REVEALING SOON" ? (
                  <div className="space-y-4 py-2">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] text-white/40 font-black uppercase mb-1">Room ID</p>
                      <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomId}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[9px] text-white/40 font-black uppercase mb-1">Password</p>
                      <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomPassword}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-4xl font-black italic tracking-tighter mb-2">{timeLeft}</h2>
                    <p className="text-[10px] font-bold text-white/30 uppercase leading-relaxed">
                      {isJoined 
                        ? "ID AND PASSWORD WILL BE REVEALED HERE 15 MINS BEFORE START."
                        : "YOU MUST REGISTER TO ACCESS ROOM DETAILS."}
                    </p>
                  </>
                )}
                </>
             )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#121212] border border-white/10 p-10 rounded-[3rem] max-w-md w-full shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic mb-2 tracking-tight">ARENA ENTRY</h2>
              <form onSubmit={handleJoin} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">In-Game Name (IGN)</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. SKYLORD_07" onChange={(e) => setFormData({...formData, ign: e.target.value})} />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">Player UID</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. 283940122" onChange={(e) => setFormData({...formData, uid: e.target.value})} />
                </div>
                <div className="flex gap-3 pt-6">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-white/5 text-white/40 font-black py-4 rounded-2xl uppercase text-[10px]">CANCEL</button>
                  <button type="submit" disabled={joining} className="flex-1 bg-[#1DB954] text-black font-black py-4 rounded-2xl uppercase text-[10px]">{joining ? "JOINING..." : "CONFIRM ENTRY"}</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\Tournaments.jsx
====================================================

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Tournaments() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("UPCOMING");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/tournaments")
      .then((res) => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredMatches = matches.filter((match) => match.status === filter);

  const categories = [
    { id: "LIVE", label: "Live", icon: "âš”ï¸" },
    { id: "UPCOMING", label: "Upcoming", icon: "ðŸ•’" },
    { id: "COMPLETED", label: "Finished", icon: "ðŸ" },
  ];

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center font-black text-[#1DB954] animate-pulse uppercase tracking-[0.3em]">
      Loading Arena...
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Back to Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">
            Arena <span className="text-[#1DB954]">Lobby</span>
          </h1>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Choose your battle phase</p>
        </header>

        {/* MINI NAVBAR / CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#121212] p-2 rounded-2xl border border-white/5 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                filter === cat.id
                  ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.2)]"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[8px] ${
                filter === cat.id ? "bg-black/20" : "bg-white/10"
              }`}>
                {matches.filter(m => m.status === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* TOURNAMENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <motion.div 
                  key={match._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#121212] border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between group transition-all hover:border-[#1DB954]/50"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase ${
                        match.status === "LIVE" ? "bg-red-600 text-white animate-pulse" : 
                        match.status === "COMPLETED" ? "bg-white/10 text-white/40" : "bg-[#1DB954] text-black"
                      }`}>
                        {match.status}
                      </span>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-tighter">{match.matchCategory}</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase italic mb-2 leading-tight group-hover:text-[#1DB954] transition-colors">
                      {match.title}
                    </h2>
                    <p className="text-[#666] text-xs font-bold mb-6 uppercase tracking-widest">
                      {match.map} â€¢ {match.matchType}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/tournaments/view/${match._id}`)}
                    className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      match.status === "COMPLETED" 
                        ? "bg-white/5 text-white/40 hover:bg-white/10" 
                        : "bg-white text-black hover:bg-[#1DB954]"
                    }`}
                  >
                    {match.status === "COMPLETED" ? "View Results" : "Enter Match"}
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                <p className="text-white/10 font-black uppercase italic tracking-[0.5em]">
                  No {filter.toLowerCase()} matches found
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\AdminDashboard.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const [matches, setMatches] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tournaments", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMatches(res.data);
      } catch (err) {
        console.error("Failed to fetch matches", err);
      }
    };
    if (token) fetchMatches();
  }, [token]);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* ðŸš€ RETURN TO PLAYER HUB BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Return to Player Arena
        </button>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-[#1DB954]">
              Command Center
            </h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
              Admin Match Management Protocol
            </p>
          </div>
          <button 
            onClick={() => navigate("/admin/tournaments/new")}
            className="bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs px-6 py-3 rounded-xl hover:bg-white transition-all"
          >
            + Deploy New Match
          </button>
        </header>

        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">
            <div className="col-span-5">Match Title & Deployment</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Roster</div>
            <div className="col-span-3 text-right">Admin Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {matches.map((match) => (
              <div key={match._id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-white/[0.02] transition-colors">
                <div className="col-span-5">
                  <h3 className="font-black italic uppercase text-lg">{match.title}</h3>
                  <p className="text-white/40 text-xs">
                    {new Date(match.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} â€¢ {match.matchType}
                  </p>
                </div>
                
                <div className="col-span-2 text-center">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                    match.status === 'LIVE' ? 'bg-red-500/10 text-red-500 border-red-500/20 animate-pulse' :
                    match.status === 'COMPLETED' ? 'bg-white/5 text-white/40 border-white/10' :
                    'bg-[#1DB954]/10 text-[#1DB954] border-[#1DB954]/20'
                  }`}>
                    {match.status}
                  </span>
                </div>

                <div className="col-span-2 text-center text-sm font-mono text-white/60">
                  {match.participants?.length || 0} / {match.maxPlayers}
                </div>

                {/* ðŸš€ SMART DYNAMIC BUTTON LOGIC */}
                <div className="col-span-3 flex justify-end">
                  
                  {/* UPCOMING MATCHES */}
                  {match.status === "UPCOMING" && (
                    <button 
                      onClick={() => navigate(`/admin/tournaments/${match._id}/room`)}
                      className="text-[#1DB954] border border-[#1DB954]/20 hover:bg-[#1DB954]/10 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all"
                    >
                      Set Room ID
                    </button>
                  )}

                  {/* SMART PUBLISH LOGIC: Show if LIVE, or if COMPLETED but results are missing! */}
                  {(match.status === "LIVE" || (match.status === "COMPLETED" && (!match.results || match.results.length === 0))) && (
                    <button 
                      onClick={() => navigate(`/admin/tournaments/${match._id}/results`)}
                      className="text-white bg-red-600 hover:bg-red-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    >
                      Publish Results
                    </button>
                  )}

                  {/* SMART VIEW LOGIC: ONLY show if COMPLETED and results actually exist! */}
                  {match.status === "COMPLETED" && match.results?.length > 0 && (
                    <button 
                      onClick={() => navigate(`/tournaments/${match._id}/results`)}
                      className="text-white/60 hover:text-white border border-white/10 hover:border-white/30 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all"
                    >
                      View Results
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\CreateTournament.jsx
====================================================

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateTournament() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    game: "Free Fire",
    matchType: "4v4",
    map: "Bermuda (Remastered)",
    description: "",
    rules: "",
    startTime: "",
    endTime: "",
    prizePool: 0,
    maxPlayers: 8,
    entryFee: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);

    // Format rules from a comma-separated string into an array
    const formattedRules = formData.rules
      ? formData.rules.split(",").map((r) => r.trim())
      : [];

    const payload = {
      ...formData,
      rules: formattedRules,
      prizePool: Number(formData.prizePool),
      maxPlayers: Number(formData.maxPlayers),
      entryFee: Number(formData.entryFee),
      status: "UPCOMING", // Always defaults to UPCOMING on deploy
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/tournaments", payload);
      navigate("/admin"); // Redirect back to Command Center
    } catch (err) {
      console.error("Error creating tournament:", err);
      alert("Deployment failed. Verify backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* BACK TO HUB */}
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Cancel Operational Deployment
        </button>

        <header className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Deploy New <span className="text-[#1DB954]">Match</span>
          </h1>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
            Configure metadata parameters for live deployment
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Tournament Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Clash Squad Afternoon Showdown"
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GAME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Game Title
              </label>
              <input
                type="text"
                name="game"
                value={formData.game}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* MATCH TYPE */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Match Mode
              </label>
              <select
                name="matchType"
                value={formData.matchType}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              >
                <option value="1v1">1v1 Solo Duel</option>
                <option value="4v4">4v4 Clash Squad</option>
                <option value="Full Room">Full Room Battle Royale</option>
              </select>
            </div>

            {/* MAP */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Deployment Map Zone
              </label>
              <select
                name="map"
                value={formData.map}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              >
                <option value="Bermuda (Remastered)">Bermuda (Remastered)</option>
                <option value="Kalahari">Kalahari Desert</option>
                <option value="Purgatory">Purgatory</option>
                <option value="Factory Roof">Factory Roof Only</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* START TIME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Operation Start Time
              </label>
              <input
                type="datetime-local"
                name="startTime"
                required
                value={formData.startTime}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-mono text-white/60 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* END TIME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Operation End Time
              </label>
              <input
                type="datetime-local"
                name="endTime"
                required
                value={formData.endTime}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-mono text-white/60 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PRIZE POOL */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Prize Allocation (INR)
              </label>
              <input
                type="number"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* ENTRY FEE */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Entry Fee Locking
              </label>
              <input
                type="number"
                name="entryFee"
                value={formData.entryFee}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            {/* MAX PLAYERS */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Roster Allocation Cap
              </label>
              <input
                type="number"
                name="maxPlayers"
                value={formData.maxPlayers}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Lobby Description Context
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide strategic operational instructions for the contestants..."
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-[#1DB954] transition-colors resize-none"
            />
          </div>

          {/* RULES */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
              Combat Engagement Rules (Separate via commas)
            </label>
            <input
              type="text"
              name="rules"
              value={formData.rules}
              onChange={handleChange}
              placeholder="No Hack, No Grenades in 1v1, Emote allowed after kill"
              className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-sm font-bold focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>

          {/* DEPLOY BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-white disabled:opacity-50 shadow-[0_0_30px_rgba(29,185,84,0.15)]"
          >
            {loading ? "INITIALIZING SECTOR..." : "ðŸš€ Push Match to Live Network"}
          </button>
        </form>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\PublishResults.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublishResults() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const match = res.data;
        setMatchData(match);

        // ðŸ§  GAME LOGIC: Prioritize matchCategory over matchType to prevent conflicts
        if (match.matchCategory === "CLASH_SQUAD") {
          // Clash Squad (4v4): 4 Squad Members (Kills matter for per-kill bounty)
          setWinners([
            { rank: "Squad MVP", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
            { rank: "Squad Member", ign: "", kills: 0, prize: 0 },
          ]);
        } 
        else if (match.matchCategory === "BATTLE_ROYALE" || match.matchType === "Full Room") {
          // Battle Royale: Top 3 Placements (Rank + Kills matter)
          setWinners([
            { rank: 1, ign: "", kills: 0, prize: 0 },
            { rank: 2, ign: "", kills: 0, prize: 0 },
            { rank: 3, ign: "", kills: 0, prize: 0 },
          ]);
        } 
        else {
          // Lone Wolf 1v1 (Default fallback): 1 Winner, Kills don't matter for prize
          setWinners([{ rank: "Winner", ign: "", prize: 0 }]); 
        }
      } catch (err) {
        console.error("Error fetching match:", err);
      }
    };
    
    if (token) fetchMatch();
  }, [id, token]);

  const handleChange = (index, field, value) => {
    const updatedWinners = [...winners];
    updatedWinners[index][field] = value;
    setWinners(updatedWinners);
  };

  const addWinnerSlot = () => {
    const nextRank = winners.length + 1;
    setWinners([...winners, { rank: nextRank, ign: "", kills: 0, prize: 0 }]);
  };

  const removeWinnerSlot = (indexToRemove) => {
    const updatedWinners = winners.filter((_, index) => index !== indexToRemove);
    setWinners(updatedWinners);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        `http://localhost:5000/api/tournaments/${id}/results`,
        { results: winners },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/admin"); 
    } catch (err) {
      console.error("Error publishing results:", err);
      alert("Failed to push results to the server.");
    } finally {
      setLoading(false);
    }
  };

  if (!matchData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-[#1DB954] font-black italic animate-pulse">
        Fetching Secure Match Data...
      </div>
    );
  }

  // Helper flags for clean rendering
  const isClashSquad = matchData.matchCategory === "CLASH_SQUAD";
  const isBattleRoyale = matchData.matchCategory === "BATTLE_ROYALE" || matchData.matchType === "Full Room";
  const isLoneWolf = !isClashSquad && !isBattleRoyale;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Abort Operation
        </button>

        <div className="bg-[#121212] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <header className="mb-8 border-b border-white/10 pb-6 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-[#1DB954] mb-2">
                {matchData.title}
              </h1>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                Mode: {matchData.matchType} â€¢ {matchData.matchCategory || "CUSTOM"}
              </p>
            </div>
            {/* Only show Add Player if it's Battle Royale */}
            {isBattleRoyale && (
              <button 
                onClick={addWinnerSlot}
                type="button"
                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
              >
                + Add Player Slot
              </button>
            )}
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {winners.map((winner, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-white/5 relative group">
                
                {isBattleRoyale && winners.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWinnerSlot(index)}
                    className="absolute top-4 right-4 text-white/20 hover:text-red-500 font-black text-xs transition-colors"
                  >
                    âœ•
                  </button>
                )}

                <h3 className="text-[#1DB954] font-black uppercase tracking-widest text-xs mb-4">
                  {isLoneWolf ? "Lone Wolf Winner" : 
                   isClashSquad ? winner.rank : 
                   `BR Placement #${winner.rank}`}
                </h3>
                
                <div className={`grid grid-cols-1 ${isLoneWolf ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4`}>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      In-Game Name
                    </label>
                    <input
                      type="text"
                      required
                      value={winner.ign}
                      onChange={(e) => handleChange(index, "ign", e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-white transition-all"
                    />
                  </div>

                  {/* HIDE KILLS INPUT IF IT IS A LONE WOLF MATCH */}
                  {!isLoneWolf && (
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                        {isClashSquad ? "Squad Kills" : "Total Kills"}
                      </label>
                      <input
                        type="number"
                        required
                        value={winner.kills}
                        onChange={(e) => handleChange(index, "kills", Number(e.target.value))}
                        className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-white transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Prize Payout (INR)
                    </label>
                    <input
                      type="number"
                      required
                      value={winner.prize}
                      onChange={(e) => handleChange(index, "prize", Number(e.target.value))}
                      className="w-full bg-[#121212] border border-white/10 rounded-lg p-3 text-sm focus:border-[#1DB954] outline-none text-[#1DB954] font-black transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-[#1DB954] hover:shadow-[0_0_30px_rgba(29,185,84,0.3)] disabled:opacity-50 mt-8"
            >
              {loading ? "PROCESSING..." : "ðŸ† Finalize Match & Lock Database"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\pages\admin\SetRoomCredentials.jsx
====================================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SetRoomCredentials() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [matchTitle, setMatchTitle] = useState("Loading Match...");
  const [formData, setFormData] = useState({
    roomId: "",
    roomPassword: "",
  });

  // Fetch the match title so the Admin knows which match they are updating
  useEffect(() => {
    const fetchMatch = async () => {
      if (!token) return; // ðŸ‘ˆ Safety check! Wait for token to load

      try {
        const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
          headers: { Authorization: `Bearer ${token}` } // ðŸ‘ˆ Attach VIP badge!
        });
        setMatchTitle(res.data.title);
      } catch (err) {
        console.error("Error fetching match details:", err);
        setMatchTitle("Unknown Match");
      }
    };
    fetchMatch();
  }, [id, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`http://localhost:5000/api/tournaments/${id}/credentials`, formData);
      navigate("/admin"); // Back to command center on success
    } catch (err) {
      console.error("Error injecting credentials:", err);
      alert("Failed to push credentials to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            â†
          </div>
          Abort Operation
        </button>

        <div className="bg-[#121212] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <header className="mb-8">
            <div className="inline-block bg-red-600/20 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 animate-pulse">
              Live Credential Injection
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-[#1DB954] mb-2">
              {matchTitle}
            </h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
              Data will reveal 15m prior to start
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Free Fire Room ID
              </label>
              <input
                type="text"
                name="roomId"
                required
                value={formData.roomId}
                onChange={handleChange}
                placeholder="e.g. 55667788"
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-xl font-mono text-white focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Room Password
              </label>
              <input
                type="text"
                name="roomPassword"
                required
                value={formData.roomPassword}
                onChange={handleChange}
                placeholder="e.g. JOINFAST12"
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-xl font-mono text-white focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl transition-all hover:bg-white disabled:opacity-50 mt-4 shadow-[0_0_30px_rgba(29,185,84,0.15)]"
            >
              {loading ? "TRANSMITTING..." : "Push Credentials to Players"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


====================================================
FILE: C:\Users\Lenovo\Desktop\ff\frontend\src\utils\auth.js
====================================================

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
