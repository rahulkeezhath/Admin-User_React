const adminCredential = require('../model/adminCredentialModel')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')

const adminLogin = async (req, res) => {
    let { username, password } = req.body;
    try {
        const admin = await adminCredential.findOne({ username });
        if (admin) {
            console.log("admin Found");
            const validPassword = await bcrypt.compare(password, admin.password);
            if (validPassword) {
                const token = jwt.sign({
                    username: admin.username
                },
                'sgrr'
                )


                res.status(201).json({admin,token});
                console.log("Correct");
            }else{
                console.log("Password Wrong");
            }
        }else{
            console.log("No User");
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    adminLogin
}