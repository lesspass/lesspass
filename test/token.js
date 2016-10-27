import test from 'ava';
import Token from '../src/api/token';

test('token is near the end', t => {
    const token = new Token('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTQzNzAxODU4M30.NmMv7sXjM1dW0eALNXud8LoXknZ0mH14GtnFclwJv0s');
    t.true(token.expiresInMinutes(15, new Date(1437018283 * 1000)));
    t.false(token.expiresInMinutes(5, new Date(1437018283 * 1000)));
});

test('token still valid', t => {
    const token = new Token('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTc1NzkyODQzNH0.KzEBhVgm3xa51jsBklB0Ib9DDwAkvynOnkwLLJoD5AU');
    t.true(token.stillValid());
});

test('token still valid check payload date', t => {
    const token = new Token('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTQzNzAxODU4M30.NmMv7sXjM1dW0eALNXud8LoXknZ0mH14GtnFclwJv0s');
    t.true(token.stillValid(new Date(1437018283 * 1000)));
});

test('token expired', t => {
    const token = new Token('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTQzNzAxODU4M30.NmMv7sXjM1dW0eALNXud8LoXknZ0mH14GtnFclwJv0s');
    t.false(token.stillValid());
});

test('token invalid does not raise an error', t => {
    const token = new Token('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
    t.false(token.stillValid());
});
