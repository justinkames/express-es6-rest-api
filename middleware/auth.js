'use strict';

import {Router} from 'express';

export default function() {
	let router = Router();
	router.use('/api', (req, res, next) => {
		// check headers
		next();
	});
	return router;
}
