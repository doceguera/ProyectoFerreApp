import Constant from "expo-constants";
const ENV = {
  dev: {
    apiKey: "AIzaSyCSYbabd-PfOpVCJkyRZriAgo6zFeTxJtk",
    authDomain: "ferrito-inv-app.firebaseapp.com",
    projectId: "ferrito-inv-app",
    storageBucket: "ferrito-inv-app.appspot.com",
    messagingSenderId: "453479640414",
    appId: "1:453479640414:web:3a28ef248a4fc5d15273cf"
  },
  production: {
    apiKey: "AIzaSyCSYbabd-PfOpVCJkyRZriAgo6zFeTxJtk",
    authDomain: "ferrito-inv-app.firebaseapp.com",
    projectId: "ferrito-inv-app",
    storageBucket: "ferrito-inv-app.appspot.com",
    messagingSenderId: "453479640414",
    appId: "1:453479640414:web:3a28ef248a4fc5d15273cf"
  },
};
const getEnvVars = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVars;