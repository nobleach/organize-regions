const test = require('ava');
const organize = require('../src/organize');

test('Sanity check', t => {
    t.pass();
});

test('replaces array with correct order', t => {
    const regions = [
        'h1',
        'hero',
        'featured', // coOpFeatured
        'featuredSEO', // featured
        'featuredInitiatives',
        'coOpFeatured', // featuredSEO
        'coOpDeluxe',
        'seoblurb'
    ];

    const rules = ['coOpFeatured', 'featured', 'featuredSEO'];

    // Run unit
    const result = organize(regions, rules);

    // Verify expectations
    const expected = [
        'h1',
        'hero',
        'coOpFeatured',
        'featured',
        'featuredInitiatives',
        'featuredSEO',
        'coOpDeluxe',
        'seoblurb'
    ];

    t.deepEqual(result, expected);
})

