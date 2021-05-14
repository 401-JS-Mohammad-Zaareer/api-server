'use strict';

require('@code-fellows/supergoose');
const server = require('../src/server.js');
const supertest = require('supertest');
const serverRequest = supertest(server.app);
const animalModel = require('../src/models/animal.js')
const ModelCollection = require('../src/models/data-collection-class.js');
const gameModel = require('../src/models/game.js')

const animal = new ModelCollection(animalModel);
const game = new ModelCollection(gameModel);

describe('Testing server', () => {
    it('bad route', async() => {
        const res = await serverRequest.get('/anything');
        expect(res.status).toEqual(404);
    });

    it('bad method', async() => {
        const res1 = await serverRequest.post('/');
        const res2 = await serverRequest.put('/');
        const res3 = await serverRequest.delete('/');
        expect(res1.status).toEqual(404);
        expect(res2.status).toEqual(404);
        expect(res3.status).toEqual(404);
    });

});

describe('Tesing routes of animal model', () => {
    const obj1 = { name: 'mealworm', class: 'Invertebrates', age: 1 };
    const obj2 = { name: 'falcon', class: 'Birds', age: 1 };
    it('returns status of 200 on reading all records', async() => {
        const res = await serverRequest.get('/animal');
        expect(res.status).toEqual(200);
    });
    let res1;
    it('returns status of 200 on reading a specific record', async() => {
        res1 = await animal.create(obj1);
        const res2 = await serverRequest.get(`/animal/${res1._id}`);
        expect(res2.status).toEqual(200);
    });
    it('returns status of 200 on adding a new record', async() => {
        const res = await serverRequest.post('/animal').send(obj2);
        expect(res.status).toEqual(200);
    });
    it('returns status of 200 on updating a record', async() => {
        const res = await serverRequest.put(`/animal/${res1._id}`).send({
            name: 'mealworm',
            class: 'Invertebrates',
            age: 3
        });
        expect(res.status).toEqual(200);
    });
    it('returns status of 200 on deleteing a record', async() => {
        const res = await serverRequest.delete(`/animal/${res1._id}`);
        expect(res.status).toEqual(200);
    });
});


describe('Testing REST routs for animal model', () => {
    const obj1 = { name: 'shark', class: 'Fish', age: 2 };
    const obj2 = { name: 'crocodile', class: 'Reptiles', age: 6 };
    const obj3 = { name: 'frog', class: 'Amphibians', age: 1 };

    it('insert a new record', async() => {
        const res = await animal.create(obj1);
        Object.keys(obj1).forEach(key => {
            expect(res[key]).toEqual(obj1[key]);
        })
    });
    it('read a specific record', async() => {
        const res1 = await animal.create(obj2);
        const res2 = await animal.read(res1._id);
        Object.keys(obj2).forEach(key => {
            expect(res2[key]).toEqual(obj2[key]);
        })
    });
    it('read all records', async() => {
        const res = await animal.read();
        Object.keys(obj1).forEach(key => {
            expect(res[1][key]).toEqual(obj1[key]);
        });
        Object.keys(obj2).forEach(key => {
            expect(res[2][key]).toEqual(obj2[key]);
        });
    });
    it('update a record', async() => {
        const res1 = await animal.create(obj3);
        const res2 = await animal.update(res1._id, { name: 'frog', class: 'Amphibians', age: 2 });
        expect(res2.age).toEqual(2);
    });
    it('delete a record', async() => {
        const res1 = await animal.read();
        const res2 = await animal.delete(res1[0]._id);
        expect(res2).toBeTruthy();
    });
});

describe('Tesing routes of game model', () => {
    const obj1 = { name: "Call of Duty", size: 50, level: 100 };
    const obj2 = { name: "GTA", size: 5, level: 6 };
    it('returns status of 200 on reading all records', async() => {
        const res = await serverRequest.get('/game');
        expect(res.status).toEqual(200);
    });
    let res1;
    it('returns status of 200 on reading a specific record', async() => {
        res1 = await game.create(obj1);
        const res2 = await serverRequest.get(`/game/${res1._id}`);
        expect(res2.status).toEqual(200);
    });
    it('returns status of 200 on adding a new record', async() => {
        const res = await serverRequest.post('/game').send(obj2);
        expect(res.status).toEqual(200);
    });
    it('returns status of 200 on updating a record', async() => {
        const res = await serverRequest.put(`/game/${res1._id}`).send({
            name: 'Call of Duty',
            size: 50,
            level: 70
        });
        expect(res.status).toEqual(200);
    });
    it('returns status of 200 on deleteing a record', async() => {
        const res = await serverRequest.delete(`/game/${res1._id}`);
        expect(res.status).toEqual(200);
    });
});

describe('Testing REST routs for game model', () => {
    const obj1 = { name: "IGI", size: 2, level: 5 };
    const obj2 = { name: "PUBG", size: 15, level: 6 };
    const obj3 = { name: "FireFly", size: 10, level: 4 };

    it('insert a new record', async() => {
        const res = await game.create(obj1);
        Object.keys(obj1).forEach(key => {
            expect(res[key]).toEqual(obj1[key]);
        })
    });
    it('read a specific record', async() => {
        const res1 = await game.create(obj2);
        const res2 = await game.read(res1._id);
        Object.keys(obj2).forEach(key => {
            expect(res2[key]).toEqual(obj2[key]);
        })
    });
    it('read all records', async() => {
        const res = await game.read();
        Object.keys(obj1).forEach(key => {
            expect(res[1][key]).toEqual(obj1[key]);
        });
        Object.keys(obj2).forEach(key => {
            expect(res[2][key]).toEqual(obj2[key]);
        });
    });
    it('update a record', async() => {
        const res1 = await game.create(obj3);
        const res2 = await game.update(res1._id, { name: 'FireFly', size: 20, level: 13 });
        expect(res2.level).toEqual(13);
    });
    it('delete a record', async() => {
        const res1 = await game.read();
        const res2 = await game.delete(res1[0]._id);
        expect(res2).toBeTruthy();
    });
});