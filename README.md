# pinky
A app for managing rodent records

Named after the show I used to love watching as a kid Pinky and the Brain and because people always spell my name wrong and call me Brain

![Pinky Logo](pinky.png)

# Deploy To Amplify Easy Button

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/the-nerdy-python/pinky.git)

## Getting Started

1. Clone project and install dependencies

```bash
$ git clone https://github.com/the-nerdy-python/pinky.git
$ cd pinky
$ yarn install
```

2. Copy your `aws-exports` file into the src directory or initialize a new AWS Amplify CLI Project:

```bash
$ yarn global add @aws-amplify/cli

$ amplify init
```

You can say no here and enter a name, I use the name of my branches to keep different versions in AWS that match the corresponding branch.

```
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? No
? Enter a name for the environment develop
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

Now we can push the services from the project into our AWS amplify account

```
$ amplify push

Current Environment: develop

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Auth     | pinky85bccb95 | Create    | awscloudformation |
| Api      | pinky         | Create    | awscloudformation |
? Are you sure you want to continue? (Y/n) Y

GraphQL schema compiled successfully.
Edit your schema at pinky/amplify/backend/api/pinky/schema.graphql or place .graphql files in a directory at pinky/amplify/backend/api/pinky/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
```

When complete it will give you a link to the graphQL endpoint which can also be found in the AWS console at https://console.aws.amazon.com/appsync

3. Start the project

```bash
$ yarn start
```
Check http://localhost:3000/