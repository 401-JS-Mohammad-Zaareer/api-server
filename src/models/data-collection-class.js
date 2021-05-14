'use strict';

class ModelCollection {
    constructor(model) {
        this.model = model;
    }

    read(_id) {
        if (_id) {
            return this.model.findById(_id);
        } else {
            return this.model.find({});
        }
    }

    readBy(obj) {
        return this.model.find(obj);
    }

    create(obj) {
        let newRecord = new this.model(obj);
        return newRecord.save();
    }

    update(_id, obj) {
        return this.model.findByIdAndUpdate(_id, obj, { new: true });
    }

    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}

module.exports = ModelCollection;