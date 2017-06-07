function organize(regions, rules) {
    // Make a copy so we can check inclusion
    const rulesOriginal = rules.slice();

    return regions.map(region => {
        return rulesOriginal.includes(region) ? rules.shift() : region;
    });
}

module.exports = organize;
