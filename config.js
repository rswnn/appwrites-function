const config = [
  {
    path: "/deeplink",
    targets: {
      android: {
        appName: "twitter",
        appPackage: "com.twitter.android",
        appPath: "user?screen_name=appwrite",
        fallback: "https://play.google.com/store/apps/details?id=com.twitter.android"
      },
      ios: {
        appName: "twitter",
        appPath: "https://twitter.com/appwrite",
        fallback: "https://www.apple.com/id/app-store/"
      },
      default: "https://twitter.com/appwrite"
    }
  },
  {
    path: "/coba",
    targets: {
      android: {
        appName: "twitter",
        appPackage: "com.twitter.android",
        appPath: "user?screen_name=appwrite",
        fallback: "https://play.google.com/store/apps/details?id=com.twitter.android"
      },
      ios: {
        appName: "twitter",
        appPath: "https://twitter.com/appwrite",
        fallback: "https://apps.apple.com/us/app/twitter/id333903271"
      },
      default: "https://twitter.com/appwrite"
    },
  },
  {
    path: "/verify",
    targets: {
      android: {
        appName: "dots.app",
        appPackage: "com.dots",
        appPath: "user?screen_name=appwrite",
        fallback: "https://play.google.com/store/apps/details?id=com.twitter.android"
      },
      ios: {
        appName: "twitter",
        appPath: "user?screen_name=appwrite",
        fallback: "https://apps.apple.com/us/app/twitter/id333903271"
      },
      default: "https://twitter.com/appwrite"
    },
  }
]

export default config