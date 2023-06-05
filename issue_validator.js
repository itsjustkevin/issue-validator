/**
 * Parses a GitHub issue body with markdown headings and converts it into a JSON object.
 * @param {string} body - The GitHub issue body text.
 * @returns {Object} - The parsed JSON object.
 */
function parseGithubIssueMarkdown(body) {
  const lines = body.split('\n');
  const json = {};

  let currentKey = null;

  for (const line of lines) {
    const match = line.match(/^###\s+(.+)/);
    if (match) {
      // Extract the key from the markdown heading
      currentKey = match[1].trim();
    } else if (currentKey && line.trim() !== '') {
      // Set the value for the current key
      json[currentKey] = line.trim();
    }
  }

  return json;
}

/**
 * Validates a parsed GitHub issue JSON object for any missing or invalid values.
 * @param {Object} json - The parsed GitHub issue JSON object.
 * @returns {string[]} - An array of error messages for any missing or invalid values.
 */
function validateGithubIssue(json) {
  const errors = [];

  // Check for missing or empty values for each key
  if (!json.issue_link || json.issue_link.trim() === '') {
    errors.push('Missing or empty value for "issue_link".');
  }

  if (!json['Commit Hash'] || json['Commit Hash'].trim() === '') {
    errors.push('Missing or empty value for "Commit Hash".');
  }

  if (!json.Target || json.Target.trim() === '') {
    errors.push('Missing or empty value for "Target".');
  }

  if (!json.pr_link || json.pr_link.trim() === '') {
    errors.push('Missing or empty value for "pr_link".');
  }

  if (!json['Changelog Description'] || json['Changelog Description'].trim() === '') {
    errors.push('Missing or empty value for "Changelog Description".');
  }

  if (!json['Impacted Users'] || json['Impacted Users'].trim() === '') {
    errors.push('Missing or empty value for "Impacted Users".');
  }

  if (!json['Impact Description'] || json['Impact Description'].trim() === '') {
    errors.push('Missing or empty value for "Impact Description".');
  }

  if (!json.Workaround || json.Workaround.trim() === '') {
    errors.push('Missing or empty value for "Workaround".');
  }

  if (!json.Risk || json.Risk.trim() === '') {
    errors.push('Missing or empty value for "Risk".');
  }

  if (!json['Test Coverage'] || json['Test Coverage'].trim() === '') {
    errors.push('Missing or empty value for "Test Coverage".');
  }

  if (!json['Validation Steps'] || json['Validation Steps'].trim() === '') {
    errors.push('Missing or empty value for "Validation Steps".');
  }

  return errors;
}

module.exports = {
  parseGithubIssueMarkdown,
  validateGithubIssue
}
