const { model1, model2 } = require('./mongo.js');

//problem here......................................
async function saveData(eid1, pass1) {
    try {
        const newData = new model1({
            eid1,
            pass1,

        });
        
        console.log("function is called")
        const savedData = await newData.save();
        console.log(savedData);
    
    } catch (error) {
        console.error(error)
    }
} 
// async function finddata(eid2, pass2) {
//     try {
//         const user = await model1.findOne({ eid1: eid2 });
//         if (user && await user.authenticate(pass2)) {
//             //how to hide passwords and then store in database???
//             console.log("Data found");
//             return true;
//         } else {
//             console.log("Not Found!");         
//             return false;
//         }
//     } catch (err) {
//         console.log("error message")
//         console.error(err);
//     }
// }

async function finddata(eid2, pass2) {
    try {
        const user = await model1.findOne({ eid1: eid2 });
        if (user && await user.authenticate(pass2)) {
            //how to hide passwords and then store in database???
            console.log("Data found");
            return true;
        } else {
            console.log("Not Found!");         
            return false;
        }
    } catch (err) {
        console.log("error message")
        console.error(err);
    }
}
async function submitQuote(post, color) {
    try {
        const date1 = new Date().toJSON().slice(0, 10).split('-').reverse().join('/')
        const subquote = new model2({
            post,
            color,
            date: date1
        });

        const x = await subquote.save();
        console.log(x);
    } catch (error) {
        console.error(error);
    }
}
async function getdata() {
    const data = await model2.find();
    return data;
}
module.exports = {
    saveData,
    finddata,
    submitQuote,
    getdata
}

// Load hash from your password DB.
//bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
//});
//bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
//});