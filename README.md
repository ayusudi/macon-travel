# ProjectWeek1P2

```html
server:
http://localhost:3000/
```

## **List of hacktivGit Routes**

 HTTP     | Routes                    | Headers  | Body           | Query Params                     | Description                                 |
| ---     | -----                     | ---      | ---            | ---                              | ---                                         |
| POST    | /user/login               | none     | id_token       | none                             | Login user                                  |
| GET     | /wikipedia/all/:country   | none     | none           | none                             | Get wikipedia article country               |
| GET     | /weather                  | none     | none           | city, country                    | Get starred repository                      |

---
# **Getting Started**
```
1. npm install
2. open terminal in file server
3. nodemon app.js
4. open terminal (new tab) in file client
5. live-server --host=localhost
6. open localhost:8080
```

# **Link API**
No | Name              | Link                                    | Auth   | CORS | HTTPS | Descriptiopn
-- | ---               | ---                                     | ---    | ---  | ---   | ---
0  | Google            | https://developers.google.com/ (doc)    | apiKey | No   | No    | For sign in 
1  | Unsplash           | https://api.unsplash.com/               | apiKey | No   | No    | Get picture
2  | Wikipedia         | https://en.wikipedia.org/w/api.ph       | none   | Yes  | No    | Get article
3  | Open Weather Map  | http://api.openweathermap.org/data/2.5/ | apiKey | Yes  | No    | Get cordinate 
4  | Darksky           | https://api.darksky.net/forecast/       | apiKey | Yes  | No    | Get weather from cordinate ( from openweather API)

---
