'use strict'

import express from 'express';
import models from '../models';
import logger from '../logger'

const router = express.Router();

// list
router.get('/users/', function(req, res){
  models.users.findAll()
    .then(function(users){
      res.json(users.map(user => user.toJSON()));
    }).catch(function(e){
      logger.error('error fetching users', e);
      res.status(500).json({});
    });
});
// create

// delete

export default router;
