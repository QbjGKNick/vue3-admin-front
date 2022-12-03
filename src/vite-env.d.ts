/*
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-11-16 09:26:22
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-02 19:56:13
 * @FilePath: /vue3-admin-front/src/vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "css-color-function" {
  export function convert(color: string): string;
}
