const { seedVillagers } = require('./seed-villagers');

const seedDatabase = async () => {
    await seedVillagers();
};

seedDatabase();
