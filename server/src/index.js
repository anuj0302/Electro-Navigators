import "./loadENV.js";

import app from "./app.js";
import ConnectToMongoDB from "./db/db.js";

const PORT = process.env.PORT || 5000;

console.log("Starting the server!!");

ConnectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error!", err);
  });
 