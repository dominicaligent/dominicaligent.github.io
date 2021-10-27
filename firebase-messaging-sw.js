importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "91987202286",
    apiKey: "AIzaSyBZGeBMlUV6JaKNBRljp-MhGS2MNfHUcQk",
    projectId: "test-dominic",
    appId: "1:91987202286:web:e7162b1c035eecf8ce23ff",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    let notification = JSON.parse(payload.data.notification);
    console.log(notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon,
        image: notification.image

    };
    console.log(notificationTitle);
    console.log(notificationOptions);

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
