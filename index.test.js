import { issueBody, parsedIssue } from "./helpers";
import { parseIssue } from "./issue_validator";

describe("Issue", () => {
  test('can be parsed', () => {

    const expectedBody = parseIssue(issueBody);

    expect(expectedBody).toBe(parsedIssue)
  })
})
