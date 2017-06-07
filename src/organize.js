function organize(regions, rules) {
    // Make a copy so we can check inclusion
    const rulesCopy = rules.slice();

    return regions.map(region => {
        return rules.includes(region) ? rulesCopy.shift() : region;
    });
}

module.exports = organize;
