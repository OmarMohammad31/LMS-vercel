require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function listUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('\n--- Registered Accounts in Database ---\n');
    const users = await User.find({}, 'name email isInstructor creditBalance createdAt').sort({ createdAt: -1 });

    if (users.length === 0) {
      console.log('No users found in the database.');
    } else {
      console.table(users.map(u => ({
        ID: u._id.toString(),
        Name: u.name,
        Email: u.email,
        Role: u.isInstructor ? 'Instructor' : 'Student',
        Credits: u.creditBalance,
        Created: u.createdAt ? u.createdAt.toLocaleString() : 'N/A'
      })));
    }
  } catch (err) {
    console.error('Error fetching users:', err.message);
  } finally {
    await mongoose.disconnect();
  }
}

listUsers();
