import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  fcmToken: string;
  constructor() {
    this.registerNotifications();
    FCM.subscribeTo({ topic: 'all' }).catch((err) => console.log(err));
  }

  private async registerNotifications() {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
    await this.addListeners();
  }

  async addListeners() {
    await PushNotifications.addListener('registration', (token) => {
      this.fcmToken = token.value;
    });
  }

  getFCMToken() {
    return this.fcmToken;
  }

  // async addListeners() {
  // await PushNotifications.addListener('registrationError', (err) => {
  //   console.error('Registration error: ', err.error);
  // });

  // await PushNotifications.addListener(
  //   'pushNotificationReceived',
  //   (notification) => {
  //     console.log('Push notification received: ', notification);
  //   }
  // );

  // await PushNotifications.addListener(
  //   'pushNotificationActionPerformed',
  //   (notification) => {
  //     console.log(
  //       'Push notification action performed',
  //       notification.actionId,
  //       notification.inputValue
  //     );
  //   }
  // );
  // }
}
