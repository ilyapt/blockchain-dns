module.exports = {
    mocha: {
        enableTimeouts: false
    },
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        }
    }
};
