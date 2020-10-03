/*
 * @Author: doramart 
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: doramart
 * @Last Modified time: 2020-08-15 09:52:20
 */

'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

// general是一个公共库，可用可不用
const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
} = require(path.join(process.cwd(), 'app/service/general'));


class ProjectConfigurationService extends Service {

    async find(payload = {}, {
        query = {},
        searchKeys = [],
        include = [],
        attributes = null
    } = {}) {

        let listdata = _list(this, this.ctx.model.ProjectConfiguration, payload, {
            query,
            searchKeys: !_.isEmpty(searchKeys) ? searchKeys : ['tableName'],
        });
        return listdata;

    }

    async count(params = {}) {
        return _count(this, this.ctx.model.ProjectConfiguration, params);
    }

    async create(payload) {
        return _create(this, this.ctx.model.ProjectConfiguration, payload);
    }

    async removes(values, key = 'id') {
        return _removes(this, this.ctx.model.ProjectConfiguration, values, key);
    }

    async update(id, payload) {
        return _update(this, this.ctx.model.ProjectConfiguration, id, payload);
    }

    async item({
        query = {},
        include = [],
        attributes = null
    } = {}) {
        return _item(this, this.ctx.model.ProjectConfiguration, {
            query,
        })
    }

}

module.exports = ProjectConfigurationService;