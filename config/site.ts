/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-02-25 21:30:48
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-02-25 23:34:24
 * @FilePath: /frontend-nav/config/site.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "网络全网独立开发者出海技术栈和工具",

  description: "出海第一步，搞定技术栈, 聚合全网独立开发者出海技术栈和工具",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/weijunext/indie-hacker-tools",
    docs: "",
  },
}
