import assert from 'assert';
import * as crypto from '../app/crypto';

describe('crypto', function () {
    it('should convert string into array of char code', function () {
        var uint8Array = crypto.string2Uint8Array('ab');
        assert.equal(97, uint8Array[0]);
        assert.equal(98, uint8Array[1]);
        assert.equal('a', String.fromCharCode(uint8Array[0]));
    });

    it('should get a template based on modulo of the index', function () {
        var templates = ['template1', 'template2', 'template3'];
        assert.equal('template2', crypto.getTemplate(templates, 4));
        assert.equal('template2', crypto.getTemplate(templates, 10));
    });

    it('should return char inside template based on modulo of the indexes', function () {
        var template = '0123456789';
        assert.equal('01', crypto.encode(template, [20, 11]));
        assert.equal('01', crypto.encode(template, [20, 21]));
        assert.equal('29', crypto.encode(template, [12, 19]));
    });
});