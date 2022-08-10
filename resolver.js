import Visitors from './model/visitors.js';

const resolvers = {
    Query: {
        getVisitors: async () => {
            const visitors = await Visitors.find();
            return visitors;
        },
    },
    Mutation: {
        addVisitor: async (root, args) => {
            const newVisitor = new Visitors({
                firstname: args.firstname,
                lastname: args.lastname,
                mobile: args.mobile,
                createAt: args.createAt,
            });
            await newVisitor.save();
            return console.log("Success");
        },

        deleteVisitor: async (root, args) => {
            await Visitors.findByIdAndDelete(args._id);
            return console.log("Deleted");
        },

        updateVisitor: async (root, args) => {
            const { _id, firstname, lastname, mobile } = args;
            const updateVisitor = {};
            if (firstname !== undefined) {
                updateVisitor.firstname = firstname;
            }
            if (lastname !== undefined) {
                updateVisitor.lastname = lastname;
            }dud
            if (mobile !== undefined) {
                updateVisitor.mobile = mobile;
            }
            const visitor = await Visitors.findByIdAndUpdate(_id, updateVisitor, { new: true });
    
            return console.log("Updated!");
        },
    }
}

export default resolvers;