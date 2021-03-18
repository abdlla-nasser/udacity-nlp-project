// TODO: import the url check function
import { isValidHttpUrl } from "../checkUrl";

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
      expect(isValidHttpUrl).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
      expect(isValidHttpUrl("jibberish")).toBeFalsy()
    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
      expect(isValidHttpUrl("https://overreacted.io/the-wet-codebase/")).toBeTruthy()
    })
})
