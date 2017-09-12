'use strict';

import express from 'express';
import models from '../models';
import logger from '../logger';

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
router.post('/users/', function(req, res){
  logger.info('creating user', JSON.stringify(req.body));

  models.users.create(req.body)
    .then(function(user){
      res.status(201).json(user.toJSON());
    }).catch(function(e){
      logger.error('error creating user', e);
      res.status(500).json();
    });
});
// delete

export default router;
