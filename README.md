## URL-Shortner

- Used Node JS, Express JS and MongoDB to create a URL shortner

- ### Created 3 API's:

  - ##### POST - `/url`

    To create a short url / short Id for any url passed (e.g.https://www.google.com)

  - ##### GET - `/:shortId`

    To redirect to the original site using shortened url (e.g. http://urlshortener/CVPCZFK0y) where `CVPCZFK0y` is the `short id`

  - ##### GET - `/analytics/:shortId`

    To get the analytics like, how many times the url was visited and all the data related to that particular `shortId`

### Used tools and libraries:

- npm i shortid
- const shortid = require("shortid");
- const shortId = shortid.generate();

- node
- express
- mongo db
