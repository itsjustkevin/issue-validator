export const issueBody = ```
### issue_link

https://github.com/flutter/flutter/issues/127506

### Commit Hash

edf4a91f5f4854be12de4622ef4401be5ef14af9

### Target

beta

### pr_link

https://github.com/flutter/flutter/pull/127530

### Impacted Users

release engineering team

### Impact Description

Without this fix Linux build_tests_3_3 will fail in release candidate branches for both cherry-picks and post-submit.

### Workaround

N/A

### Risk

low

### Test Coverage

yes

### Validation Steps

Validated on presubmit, postsubmit and manual runs.
```

export const parsedIssue = {
  issue_link: "https://github.com/flutter/flutter/issues/127506",
  commit_hash: "edf4a91f5f4854be12de4622ef4401be5ef14af9",
  target: "beta",
  pr_link: "https://github.com/flutter/flutter/pull/127530",
  impacted_users: "release engineering team",
  impact_description: "Without this fix Linux build_tests_3_3 will fail in release candidate branches for both cherry-picks and post-submit.",
  workaround: "N/A",
  risk: "low",
  test_coverage: "yes",
  validation_steps: "Validated on presubmit, postsubmit and manual runs."
}
