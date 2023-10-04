// rajatrathaurmatrix :- username
// w1s1TXWFmtVPlZdk :-password
//'mongodb+srv://rajatrathaurmatrix:w1s1TXWFmtVPlZdk@pc-builder-cluster1.vte5idg.mongodb.net/?retryWrites=true&w=majority'
import User from './models/user.js';

const newUser = {
    Name: "John Doe gupta",
    Email: "john.dodfdsfdsfdsce@example.com"
};

export const addSampleUser = async () => {
    try {
        const user = new User(newUser);
        const savedUser = await user.save();
        return {
            success: true,
            data: savedUser
        };
    } catch (error) {
        return {
            success: false,
            message: `Failed to add user: ${error.message}`
        };
    }
};

// Here, you can add more CRUD functions as needed.

// Here, you can add more CRUD functions as needed (e.g., updateUser, deleteUser, getUser, etc.)
