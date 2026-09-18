require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const { hashPassword } = require('./utils/password');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({}); // clean slate each run

  const passwordHash = await hashPassword('password123');

  await User.create([
    { name: 'Instructor One', email: 'instructor@test.com', passwordHash, isInstructor: true },
    { name: 'Student One', email: 'student1@test.com', passwordHash },
    { name: 'Student Two', email: 'student2@test.com', passwordHash },
    { name: 'Student Three', email: 'student3@test.com', passwordHash },
  ]);

  console.log('Seeded 1 instructor + 3 students (password: password123)');
  await mongoose.disconnect();
}

seed();
