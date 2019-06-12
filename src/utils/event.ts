/**
 *  @desc EventEmitter类，用于实现sub/pub模式
 */

import { ICallback } from "./global";

export default class EventEmitter {
  // 1. 创建一个eventMap，用于存储事件名和函数的映射关系
  private _eventMap = new Map();

  /**
   * on
   * @param {String} type     事件名称
   * @param {Function} fn     绑定函数
   */
  on(type: string, fn: ICallback) {
    // 2. 实现 on 事件监听方法
    // 2.1 如果 eventMap 有此方法，则维护多个方法，push到方法数组中, emit的时候批量执行
    // 2.2 如果 enentMap 没有此方法， 则 set 这个事件函数
    if (this._eventMap.has(type)) {
      const cbs = this._eventMap.get(type);
      cbs.push(fn);
    } else {
      this._eventMap.set(type, [fn]);
    }
    return this;
  }

  /**
   * emit
   * @param {String} type  事件名称
   * @param args
   */
  emit(type: string, ...args: any[]): boolean {
    // 3. 实现 emit 事件订阅方法
    // 3.1 如果 event 中有此方法，则批量执行，同时通过Apply 绑定当前作用域执行。
    if (this._eventMap.has(type)) {
      const cbs = this._eventMap.get(type);
      for (const fn of cbs) {
        fn.apply(this, args);
      }
      return true;
    } else {
      return false;
    }
  }
}
