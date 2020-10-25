

// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Plant = sequelize.define("Plant", {
        // The email cannot be null, and must be a proper email before creation
        symbol: {
            type: DataTypes.STRING,
        },
        synonymSymbol: {
            type: DataTypes.STRING,
        },
        scientificNameWithAuthor: {
            type: DataTypes.STRING,
        },
        commonName: {
            type: DataTypes.STRING,
        },
        familyName: {
            type: DataTypes.STRING,
        }

    });
    return Plant;
};
