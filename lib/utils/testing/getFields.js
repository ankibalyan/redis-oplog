import run from '../getFields';

describe('Unit # getFields', function () {
    it('Should work', function () {
        let fields = run({
            $set: {
                a: {
                    d: 1
                },
                'profile.test': 1
            },
            $inc: {
                b: 1
            }
        });

        assert.lengthOf(fields, 3);
        assert.include(fields, 'a');
        assert.include(fields, 'b');
        assert.include(fields, 'profile.test');

        fields = run({
            a: {
                d: 1
            },
            'profile.test': 1,
            b: 1,
        });

        assert.lengthOf(fields, 3);
        assert.include(fields, 'a');
        assert.include(fields, 'b');
        assert.include(fields, 'profile.test');
    })
});