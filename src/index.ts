import { upperCase } from 'lodash'

export default function hello() {
  return upperCase('hello world')
}

export class Hello {
  name: string

  constructor() {
    this.name = 'hello'
  }

  say() {
    return upperCase('hello world')
  }
}
