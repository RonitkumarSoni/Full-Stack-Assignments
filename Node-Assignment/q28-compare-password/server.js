const bcrypt = require("bcrypt");

const comparePassword = async ()=> {
    const plainPassword = "ronit123";

    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log("Hashed Password :",hashedPassword);
    

    const isMatch = await bcrypt.compare(plainPassword,hashedPassword);

    console.log("Password Match:",isMatch);
    
};

comparePassword();