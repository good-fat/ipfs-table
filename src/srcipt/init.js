/*
 * @Author: zhang yu meng
 * @Date: 2022-08-26 17:01:40
 * @LastEditors: dld web2018.com@gmail.con
 * @LastEditTime: 2022-08-31 10:52:22
 * @FilePath: \ipfs-table\src\srcipt\init.js
 * @Description:
 *
 * Copyright (c) 2022 by dld web2018.com@gmail.con, All Rights Reserved.
 */
import { create } from "ipfs-http-client"
import fs from "fs"
const is_num = (value) => {
  return typeof value === "number" && !isNaN(value)
}

const init = async (args) => {
  let url = "http://127.0.0.1:5001/api/v0"
  //config对象
  let config = {
    _update_channel: "_ipfs_event", //不可指定
    update_level: 3,
    update_type: ["index", "json", "text", "blob"],
    update_time: 0,
    update_interval: 24, //小时 更新次级索引或数据
    solve_error_interval: 60, //秒 检查不同节点数据是否同步，并手动同步
    check_time: 3, //3:00 检查数据错误，删除delete数据
    set_times: 0,
    password: "",
    library: {},
    cache: {
      value: "",
      update_time: 1661412437
    },
    log: {
      value_list: [],
      interval: "day", // seconds, minutes, hour, day, month, year
      update_time: 1661412437
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
  //检查config格式是否正确
  if (!is_num(config.update_level) || config.update_level < 2 ) {
    console.error("ipfs-table: config.update_level is error")
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
