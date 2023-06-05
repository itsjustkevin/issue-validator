const { parseGithubIssueMarkdown, validateGithubIssue } = require('./issue_validator');

describe('ParseGithubIssueMarkdown', () => {
  test('should parse GitHub issue body with markdown headings into JSON', () => {

    const parsedJson = parseGithubIssueMarkdown(issueBody);

    expect(parsedJson).toEqual(expectedJson);
  })
})

describe('validateGithubIssue', () => {
  test('should return an empty array for a valid GitHub issue', () => {
    const issue = {
      issue_link: 'https://github.com/flutter/flutter/issues/126403',
      'Commit Hash': 'efe19b26a1a5812c4861c0cbdd62833d35bbe257',
      Target: 'stable',
      pr_link: 'https://github.com/flutter/flutter/pull/126963',
      'Changelog Description': 'Adds [`namespace` configuration](https://developer.android.com/build/configure-app-module#set-namespace) to module `build.gradle` file templates that is required when using >= Gradle 8.0.',
      'Impacted Users': 'Flutter devs using add-to-app on Android wanting to use Gradle 8.0+',
      'Impact Description': 'Flutter developers generating Flutter modules to use for android-add-to-app with an Android app using Gradle 8.0+ will receive a vague error describing an issue with `namespace` in its `build.gradle` configuration files as described in https://github.com/flutter/flutter/issues/126403#issue-1703425186.',
      Workaround: 'A developer may work around the issue by adding the `namespace` configuration manually to the module\'s `build.gradle` configuration files.',
      Risk: 'low',
      'Test Coverage': 'yes',
      'Validation Steps': 'Once you checkout my fix, you need to find an existing Android app or create one to use for testing. Modify it if necessary to use Gradle 8.0+. Then, create a Flutter module to add to an existing Android app using the command listed [here](https://docs.flutter.dev/add-to-app/android/project-setup#create-a-flutter-module). Finally, try running the app or building the apk and verify that it is successful.'
    };

    const errors = validateGithubIssue(issue);

    expect(errors).toEqual([]);
  });
});

const issueBody = `
### issue_link

https://github.com/flutter/flutter/issues/126403

### Commit Hash

31a665c

### Target

stable

### pr_link

https://github.com/flutter/flutter/pull/126963

### Changelog Description

Adds [\`namespace\` configuration](https://developer.android.com/build/configure-app-module#set-namespace) to module \`build.gradle\` file templates that is required when using >= Gradle 8.0.

### Impacted Users

Flutter devs using add-to-app on Android wanting to use Gradle 8.0+

### Impact Description

Flutter developers generating Flutter modules to use for android-add-to-app with an Android app using Gradle 8.0+ will receive a vague error describing an issue with \`namespace\` in its \`build.gradle\` configuration files as described in https://github.com/flutter/flutter/issues/126403#issue-1703425186.

### Workaround

A developer may work around the issue by adding the \`namespace\` configuration manually to the module's \`build.gradle\` configuration files.

### Risk

low

### Test Coverage

yes

### Validation Steps

Once you checkout my fix, you need to find an existing Android app or create one to use for testing. Modify it if necessary to use Gradle 8.0+. Then, create a Flutter module to add to an existing Android app using the command listed [here](https://docs.flutter.dev/add-to-app/android/project-setup#create-a-flutter-module). Finally, try running the app or building the apk and verify that it is successful.
`;

const expectedJson = {
  "issue_link": "https://github.com/flutter/flutter/issues/126403",
  "Commit Hash": "31a665c",
  "Target": "stable",
  "pr_link": "https://github.com/flutter/flutter/pull/126963",
  "Changelog Description": "Adds [`namespace` configuration](https://developer.android.com/build/configure-app-module#set-namespace) to module `build.gradle` file templates that is required when using >= Gradle 8.0.",
  "Impacted Users": "Flutter devs using add-to-app on Android wanting to use Gradle 8.0+",
  "Impact Description": "Flutter developers generating Flutter modules to use for android-add-to-app with an Android app using Gradle 8.0+ will receive a vague error describing an issue with `namespace` in its `build.gradle` configuration files as described in https://github.com/flutter/flutter/issues/126403#issue-1703425186.",
  "Workaround": "A developer may work around the issue by adding the `namespace` configuration manually to the module's `build.gradle` configuration files.",
  "Risk": "low",
  "Test Coverage": "yes",
  "Validation Steps": "Once you checkout my fix, you need to find an existing Android app or create one to use for testing. Modify it if necessary to use Gradle 8.0+. Then, create a Flutter module to add to an existing Android app using the command listed [here](https://docs.flutter.dev/add-to-app/android/project-setup#create-a-flutter-module). Finally, try running the app or building the apk and verify that it is successful."
};
