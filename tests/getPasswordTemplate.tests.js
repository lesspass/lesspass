import test from 'ava';
import lesspass from '../src/lesspass2';

test('should get default template', t => {
    t.is('vcVCns', lesspass._getPasswordTemplate({
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    }));
});

test('should get template from password setting', t => {
    t.is('vc', lesspass._getPasswordTemplate({
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false
    }));
    t.is('VC', lesspass._getPasswordTemplate({
        lowercase: false,
        uppercase: true,
        numbers: false,
        symbols: false
    }));
    t.is('n', lesspass._getPasswordTemplate({
        lowercase: false,
        uppercase: false,
        numbers: true,
        symbols: false
    }));
    t.is('s', lesspass._getPasswordTemplate({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: true
    }));
});

test('should concatenate template if two password settings', t => {
    t.is('vcVC', lesspass._getPasswordTemplate({
        lowercase: true,
        uppercase: true,
        numbers: false,
        symbols: false
    }));
    t.is('vcns', lesspass._getPasswordTemplate({
        lowercase: true,
        uppercase: false,
        numbers: true,
        symbols: true
    }));
});
