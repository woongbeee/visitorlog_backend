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
                count: args.count,
                firstname: args.firstname,
                lastname: args.lastname,
                mobile: args.mobile
            });
            await newVisitor.save();
            return newVisitor;
        },

        deleteVisitor: async (root, args) => {
            await Visitors.findByIdAndDelete(args._id);
            return "Deleted.";
        },

        updateVisitor: async (root, args) => {
            const { _id, firstname, lastname, mobile } = args;
            const updateVisitor = {};
            if (firstname !== undefined) {
                updateVisitor.firstname = firstname;
            }
            if (lastname !== undefined) {
                updateVisitor.lastname = lastname;
            }
            if (mobile !== undefined) {
                updateVisitor.mobile = mobile;
            }

            const visitor = await Visitors.findByIdAndUpdate(_id, updateVisitor, { new: true });
            return visitor;
        },
    }
}

export default resolvers;