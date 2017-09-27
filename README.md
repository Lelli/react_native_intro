# React Native Intro
To run the app follow these steps:
1. Run `yarn`
2. Run `react-native run-ios` to run the iOS app or `react-native run-android` to run the android app

## Voting service
For use during the demo, the voting service has been deployed to `https://nameless-depths-10115.herokuapp.com`.
Available endpoints are:
1. POST `/vote/{id}` - Vote on specific destination
2. GET `/results` - Get an array with all results
3. POST `/reset` - Resets the results
