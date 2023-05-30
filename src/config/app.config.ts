export const AppConfig = () => ({
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT || 3000,
    defaultLimit: process.env.DEFAULT_LIMIT || 5
});
