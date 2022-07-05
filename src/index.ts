export default function hello() {
  return 'hello world'
}

export class Hello {
  name: string

  constructor() {
    this.name = 'hello'
  }

  say() {
    return 'hello world'
  }
}
