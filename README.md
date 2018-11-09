# graphQL-express

#### 1. npm install

#### 2a. node server.js

#### 3. open browser at : "http://localhost:4000/graphql"

#### 3a. Type {message} in ist tab of browser

#### 4. play

#### 2b. node server-updated.js

#### 3b(i). Type

#### ========================================

`query getSingleCourse($courseID: Int!) { course(id: $courseID) { title author description topic url } }`

#### ========================================

#### in ist tab of browser

#### 3b(ii). Press bottom button of query variable in browser

#### type

#### ========================================

`{ "courseID": 1 || 2}`

#### ========================================
