const express = require('express');
const router = express.Router();
const controller = require('../../controller/CognitiveEnhancersClinicalController.js');

router.route('/')
    .get(controller.getData)
    .post(controller.drugData); 

router.route('/update')
    .post(controller.updateData);

router.route('/delete/:Description')
    .delete(controller.drugDelete);

module.exports = router;
