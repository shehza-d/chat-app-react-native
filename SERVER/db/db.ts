import mongoose from "mongoose";

//MongoDB
const dbURI ="mongodb+srv://shehzad:LMLMLM@cluster0.wclhhvn.mongodb.net/e-commerce?retryWrites=true&w=majority"
// process.env.MongoDBURI ||
 
await mongoose.connect(dbURI);

// MongoDB(dbURI)

// //for status of DB
// ////////////////mongodb connected disconnected events///////////
mongoose.connection.on(
  "connected",
  () => console.log("Mongoose is connected")
  // process.exit(1); 
);

//disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
  process.exit(1);
});

//any error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", () => {
  //this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events\\\\\\\\\\\\\\