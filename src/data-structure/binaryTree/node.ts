export class Node<T> {
  public value: T | null;
  public left: Node<T> | null;
  public right: Node<T> | null;
  public level: number;
  public constructor(value: T | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = null;
  }
}
