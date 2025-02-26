const mongoose=require('mongoose');


// const mongoURI="mongodb://localhost:27017/jobportallatest?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const mongoURI="mongodb://localhost:27017/jobguru?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// const mongoURI="mongodb+srv://jenil123:jenil123@cluster0.x3mcc.mongodb.net/JobPortal";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
         console.log("Connected to Mongo Successfully");
    })
}

module.exports=connectToMongo;