export default class AsyncHelpers {
  static sleep(ms: number = 0): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}