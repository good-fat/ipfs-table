<!--
 * @Author: zhang yu meng
 * @Date: 2022-09-21 17:09:12
 * @LastEditors: dld web2018.com@gmail.con
 * @LastEditTime: 2022-09-23 16:01:24
 * @FilePath: \ipfs-table\READMEV2.md
 * @Description:
 *
 * Copyright (c) 2022 by dld web2018.com@gmail.con, All Rights Reserved.
-->

# ipfs-link

## 定位：

私人，天地混合，保存数据与文件，天然容灾与备份，内网穿透

## 常驻服务：

- web2 link web3 服务（对外网络）- 系统级
- kv 存储服务 - 系统级
- sql 存储服务 - 系统级
- 扩展记录服务 - 系统级
- 数据同步服务 - 系统级

## 元数据格式解析

- 下划线开头是私有属性，对外不可见
- backup_type：system（所有节点备份）, normal（如果填写备份节点，按节点备份，如果没填写不备份）, none（不备份）
- 数据更新频次，数据库有变化时更新，元数据每分钟同步一次

## API

### sql 存储服务

- 创建数据库：POST /api/sql/create_db
- 删除数据库：POST /api/sql/delete_db
- 修改数据库设置：POST /api/sql/update_db
- 执行 sql：POST /api/sql/execute_sql
- 顺序执行 sql：POST /api/sql/execute_sqls
- 查询 sql：POST /api/sql/query_sql
- 单行查询 POST /api/sql/get_sql

### 获取数据

### 更新数据

### 删除数据

### 发送事件

### 接收事件并调用回调函数

## 缓存接口

### 获取缓存数据

### 更新缓存数据

### 删除缓存数据

## 定时器和订阅

### 通过事件更新 top.json

### 通过定时器更新数据

### 每天定时检测数据并操作

### 每隔 60 秒校验一次动态数据
