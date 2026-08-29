import type { VNode } from "vue";

/** Flatten Vue VNode trees to plain text (SSR-safe, no DOM). */
export function vnodeToText(input: unknown): string {
  if (input == null || typeof input === "boolean") {
    return "";
  }
  if (typeof input === "string" || typeof input === "number") {
    return String(input);
  }
  if (Array.isArray(input)) {
    return input.map(vnodeToText).join("");
  }
  if (typeof input === "object") {
    const node = input as VNode & { children?: unknown };
    if ("children" in node) {
      return vnodeToText(node.children);
    }
  }
  return "";
}
