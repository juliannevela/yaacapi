// seed villagers into the database
const villagers = require('../villagers.json');
const pool = require('../../lib/utils/pool');

const seedVillagers = async () => {
    villagers.forEach((villager) => {
        await pool.query(
            `
      INSERT INTO villagers (villager_id, name, personality, birthday, species, hobby, catchphrase, saying, image, icon, bubble_color, text_color)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
            [
                villager.id,
                villager.name['name-USen'],
                villager.personality,
                villager['birthday-string'],
                villager.species,
                villager.hobby,
                villager['catch-phrase'],
                villager.saying,
                villager.image_uri,
                villager.icon_uri,
                villager['bubble-color'],
                villager['text-color'],
            ]
        );
    });
};

module.exports = seedVillagers;
