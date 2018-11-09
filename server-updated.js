var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");
// GraphQL schema
var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Course {
        id: Int
        title: String
        description: String
        topic: String
        url: String
    }
`);
var coursesData = [
  {
    id: 1,
    title: "Course React Native",
    description: "Learn React Native",
    topic: "React Native",
    url: "https://facebook.github.io/react-native/"
  },
  {
    id: 1,
    title: "Course JAVA",
    description: "Learn JAVA",
    topic: "JAVA",
    url: "https://www.javatpoint.com/java-tutorial"
  }
];
var getCourse = function(args) {
  var id = args.id;
  return coursesData.filter(course => {
    return course.id == id;
  })[0];
};
var getCourses = function(args) {
  if (args.topic) {
    var topic = args.topic;
    return coursesData.filter(course => course.topic === topic);
  } else {
    return coursesData;
  }
};

var root = {
  course: getCourse,
  courses: getCourses
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
