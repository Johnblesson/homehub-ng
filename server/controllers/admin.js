import Apartments from "../models/apartments.js";
import User from "../models/auth.js";
import Applications from "../models/apply.js";
import Agents from "../models/agents.js";

export const mainAdmin = async (req, res) => {
    try {
        // Fetch counts for each entity
        const apartmentsCount = await Apartments.countDocuments();
        const usersCount = await User.countDocuments();
        const applicationsCount = await Applications.countDocuments();
        const agentsCount = await Agents.countDocuments();

        // Fetch counts for specific user roles
        const adminCount = await User.countDocuments({ role: 'admin' });
        const userCount = await User.countDocuments({ role: 'user' });
        const agentCount = await User.countDocuments({ role: 'agent' });

        const user = req.isAuthenticated() ? req.user : null;

        // Fetch user data from the session or request object (assuming req.user is set by the authentication middleware)
        const sudo = user && user.sudo ? user.sudo : false;

        // Fetch user data from the session or request object (assuming req.user is set by the authentication middleware)
        const accountant = user && user.accountant ? user.accountant : false;

        // Fetch user data from the session or request object (assuming req.user is set by the authentication middleware)
        const manager = user && user.manager ? user.manager : false;

        // Render the administrator template and pass counts as data
        res.render('administrator', { 
            apartmentsCount, 
            usersCount, 
            applicationsCount, 
            agentsCount,
            adminCount, 
            userCount,
            agentCount,
            user, 
            sudo, 
            accountant, 
            manager 
        });
    } catch (error) {
        console.log(error);
        // Handle errors appropriately, such as sending an error response
        res.status(500).json({ error: 'Internal server error' });
    }
}
