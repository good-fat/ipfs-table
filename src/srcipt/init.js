/*
 * @Author: zhang yu meng
 * @Date: 2022-08-26 17:01:40
 * @LastEditors: dld web2018.com@gmail.con
 * @LastEditTime: 2022-09-08 17:19:29
 * @FilePath: \ipfs-table\src\srcipt\init.js
 * @Description:
 *
 * Copyright (c) 2022 by dld web2018.com@gmail.con, All Rights Reserved.
 */
import { create } from "ipfs-http-client"
import fs from "fs"
/**
 * @description: 匹配变量与类型
 * @param {*} value
 * @param {*} type: Boolean Number String Undefined Null Array Object Function
 * @return {*} boolean
 */
const match_type = (value, type) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
/**
 * @description: 初始化ipfs-table
 * @param {*} args object：url update_level update_type update_interval solve_error_interval check_time password
 * @return {*}
 */
const init = async (args) => {
  let url = "http://127.0.0.1:5001/api/v0"
  //config对象
  let config = {
    _update_channel: "_ipfs_event", //不可指定
    _update_time: 0, //不可指定
    _set_times: 0, //不可指定
    update_level: 3,
    update_type: ["index", "json", "text", "blob"],
    update_interval: 24, //小时 更新次级索引或数据
    solve_error_interval: 60, //秒 检查不同节点数据是否同步，并手动同步
    check_time: 3, //3:00 检查数据错误，删除delete数据
    password: "",
    library: {},
    cache: {
      value: "",
      _update_time: 1661412437
    },
    log: {
      value_list: [],
      _interval: "day", // seconds, minutes, hour, day, month, year
      _update_time: 1661412437
    }
  }
  //合并数据
  if (args.url) {
    url = args.url
  }
  if (args.update_level) {
    config.update_level = args.update_level
  }
  if (args.update_type) {
    config.update_type = args.update_type
  }
  if (args.update_interval) {
    config.update_interval = args.update_interval
  }
  if (args.solve_error_interval) {
    config.solve_error_interval = args.solve_error_interval
  }
  if (args.check_time) {
    config.check_time = args.check_time
  }
  if (args.password) {
    config.password = args.password
  }
  //检查url数据
  if (!match_type(url, "String")) {
    console.error("ipfs-table: url must be String")
    return
  }
  //检查config格式是否正确
  if (!match_type(config.update_level, "Number")) {
    console.error("ipfs-table: update_level's type must be Number")
    return
  } else {
    if (config.update_level < 2) {
      console.error("ipfs-table: update_level must be greater than 2")
      return
    }
  }

  if (!match_type(config.update_type, "Array")) {
    console.error("ipfs-table: update_type must be Array")
    return
  } else {
    const type_list = ["index", "json", "text", "blob"]
    const type_list_set = new Set(type_list)
    let is_error = false
    update_type.map((value) => {
      if (!type_list_set.has(value)) {
        is_error = true
      }
    })
    if (is_error) {
      console.error("ipfs-table: update_type's value must be in index, json, text, blob")
      return
    }
  }

  if (!match_type(config.update_interval, "Number")) {
    console.error("ipfs-table: update_interval's type must be Number")
    return
  } else {
    if (config.update_interval < 1) {
      console.error("ipfs-table: update_interval must be greater than 1")
      return
    }
  }

  if (!match_type(config.solve_error_interval, "Number")) {
    console.error("ipfs-table: solve_error_interval's type must be Number")
    return
  } else {
    if (config.solve_error_interval < 1) {
      console.error("ipfs-table: solve_error_interval must be greater than 1")
      return
    }
  }

  if (!match_type(config.check_time, "Number")) {
    console.error("ipfs-table: check_time's type must be Number")
    return
  } else {
    if (config.check_time < 0 || config.check_time > 23) {
      console.error("ipfs-table: check_time must be between 0 and 23")
      return
    }
  }

  if (!match_type(config.password, "String")) {
    console.error("ipfs-table: password's type must be String")
    return
  }

  if (!match_type(config.library, "Object")) {
    console.error("ipfs-table: library's type must be Object")
    return
  }

  if (!match_type(config.cache, "Object")) {
    console.error("ipfs-table: cache's type must be Object")
    return
  }

  if (!match_type(config.log, "Object")) {
    console.error("ipfs-table: log's type must be Object")
    return
  }
  //ipfs对象
  let ipfs
  try {
    ipfs = create({ url })
    config = JSON.parse(fs.readFileSync(config_path))
  } catch (error) {
    console.error("ipfs-table：init failed", error)
  }
  //
  if (!is_num(config.update_level)) {
    console.error("ipfs-table：init failed, update_level is error!")
    return
  } else {
    if (config.update_level < 2) {
      console.error("ipfs-table：init failed, update_level must be greater than or equal to 2")
    }
  }
  let client = create({ url })
  return {
    data: {},
    message: "ipfs-table：init successfully"
  }
}
export { init }
