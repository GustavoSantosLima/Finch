import express from 'express'
import mongooseRestfulCrud from 'mongoose-restful-crud'
import Bill from './../../schemas/Bill'

const router = express.Router();
const opts = {
    // select: {},
    // filter: {},
    // sort: {},
    // page: 1,
    // perPage: 20,
    // population: null,
};
const crud = mongooseRestfulCrud(Bill, opts);

router.get('/', crud.get);
router.post('/', crud.post);
router.delete('/:id', crud.delete);

module.exports =  router;