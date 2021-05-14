'use strict';

module.exports = (err, req, res, next) => {
    res.status(500).json({
        err: err,
        msg: `something goes wrong, ${err.message}`,
        path: req.path
    });
}