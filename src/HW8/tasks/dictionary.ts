// Узагальнений словник
//
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта

export class Dictionary<K, V> {
  readonly dictionary = new Map<K, V>();

  constructor(private entries?: [K, V][]) {
    if (entries) {
      for (const [key, value] of entries) {
        this.dictionary.set(key, value);
      }
    }
  }

  set(key: K, value: V): void {
    this.dictionary.set(key, value);
  }

  has(key: K): boolean {
    return this.dictionary.has(key);
  }

  get(key: K): V | null {
    return this.dictionary.get(key) ?? null;
  }
}
