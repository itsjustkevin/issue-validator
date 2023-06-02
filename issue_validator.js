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

module.exports = { parseGithubIssueMarkdown }
