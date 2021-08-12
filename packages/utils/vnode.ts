import { Fragment } from 'react';
import { VNode } from 'vue';
import { VNodeChild } from 'vue';

const TEMPLATE = 'template';

export enum PatchFlags {
  // 动态文字内容
  TEXT = 1,
  // 动态 class
  CLASS = 1 << 1,
  // 动态样式
  STYLE = 1 << 2,
  // 动态 props
  PROPS = 1 << 3,
  // 有动态的key，也就是说props对象的key不是确定的
  FULL_PROPS = 1 << 4,
  // 合并事件
  HYDRATE_EVENTS = 1 << 5,
  // children 顺序确定的 fragment
  STABLE_FRAGMENT = 1 << 6,
  // children中有带有key的节点的fragment
  KEYED_FRAGMENT = 1 << 7,
  // 没有key的children的fragment
  UNKEYED_FRAGMENT = 1 << 8,
  // 只有非props需要patch的，比如`ref`
  NEED_PATCH = 1 << 9,
  // 动态的插槽
  DYNAMIC_SLOTS = 1 << 10,
  // SPECIAL FLAGS -------------------------------------------------------------
  // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag
  // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
  HOISTED = -1,
  // 用来表示一个节点的diff应该结束
  BAIL = -2,
}

export const isFragement = (node: VNodeChild) =>
  (node as VNode).type === Fragment;

export const isText = (node: VNodeChild) => (node as VNode).type === Text;

export const isComment = (node: VNodeChild) => (node as VNode).type === Comment;

export const isTemplate = (node: VNodeChild) =>
  (node as VNode).type === TEMPLATE;

export function getFirstValidNode(nodes: VNodeChild, depth: number) {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0] as VNode, depth);
  } else {
    return getChildren(nodes as VNode, depth);
  }
}

function getChildren(node: VNode, depth: number) {
  if (isComment(node)) return;
  if (isFragement(node) || isTemplate(node)) {
    return depth > 0
      ? getFirstValidNode(node.children as VNodeChild, depth - 1)
      : undefined;
  }
  return node;
}
