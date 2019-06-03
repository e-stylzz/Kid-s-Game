workflow "Deploy to Azure" {
  on = "push"
  resolves = ["Deploy to Azure Webapp"]
}

action "NPM Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "NG Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["NPM Install"]
  args = "\"build:prod\": \"ng build --prod\""
}

action "Azure Login" {
  uses = "Azure/github-actions/login@master"
  needs = ["NG Build"]
  env = {
    AZURE_SUBSCRIPTION = "a9c4c43a-04a1-48d7-b3ff-0ec22704b989"
  }
  secrets = [
    "AZURE_SERVICE_APP_ID",
    "AZURE_SERVICE_TENANT",
    "AZURE_SERVICE_PASSWORD",
  ]
}

action "Deploy to Azure Webapp" {
  uses = "Azure/github-actions/webapp@master"
  needs = ["Azure Login"]
  env = {
    AZURE_APP_NAME = "KidsGame"
    AZURE_APP_PACKAGE_LOCATION = "dist"
  }
}
