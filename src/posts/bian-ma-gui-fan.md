---
date: 2023-11-1
category:
  - 项目规范
---

# VO、DTO、Entity的区别

Entity是实体类，对应数据库表中的字段和属性。

DTO是数据传输对象，对应实际需要传输的字段，是用来将Entity转换为VO（或者VO转化为Entity）过程中需要的中间对象，因为不是所有的接口，都需要数据库表中的所有字段，如果用Entity会造成资源的消耗，也会有安全问题。

VO是对应前端的HTML，有一部分字段后端数据库表是没有的。