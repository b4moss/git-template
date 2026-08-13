/**
 * Example public API for the package scaffold.
 * Rename the package and grow this surface for your library.
 */

export type GreeterOptions = {
  name?: string;
  shout?: boolean;
};

export function greet(options: GreeterOptions = {}): string {
  const name = options.name?.trim() || "world";
  const message = `Hello, ${name}!`;
  return options.shout ? message.toUpperCase() : message;
}

export const version = "0.1.0";
