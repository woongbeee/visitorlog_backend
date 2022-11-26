import Visitors from './model/visitors.js';

const resolvers = {
    Query: {
        getVisitors: async () => {
            const visitors = await Visitors.find();
            return visitors;
        },
    },
    Mutation: {
        addVisitor: async (_, args) => {
            try {
                const newVisitor = new Visitors({
                    firstname: args.firstname,
                    lastname: args.lastname,
                    mobile: args.mobile,
                    createAt: args.createAt,
                });
                if (newVisitor) {
                    await newVisitor.save();
                    return newVisitor;
                }
            } catch (error) {
                console.log('Error occured!')
            } 
            
        },

        deleteVisitor: async (_, args) => {
            try {
                const deletedVisitor = await Visitors.findByIdAndDelete(args._id);
                if (deletedVisitor) {
                    return deletedVisitor
                }
            } catch (error) { 
                console.loe('Error occured')
            }
        },

        updateVisitor: async (_, args) => {
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
            try {
                const visitor = await Visitors.findByIdAndUpdate(_id, updateVisitor, { new: true });
                if (visitor) {
                    return visitor
                }
            } catch (error) {
                console.log('Error occured')
            }
        },
    }
}

export default resolvers;