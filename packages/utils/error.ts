class RadiumVueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RadiumVueError';
  }
}

export default function warn(scope: string, message: string) {
  new RadiumVueError(`[${scope}${message}]`);
}
