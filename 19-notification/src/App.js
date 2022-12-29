import "./App.scss";
import Header from "./components/Header";

import avatarMark from "./assets/images/avatar-mark-webber.webp";
import avatarAngela from "./assets/images/avatar-angela-gray.webp";
import avatarAnna from "./assets/images/avatar-anna-kim.webp";
import imageChess from "./assets/images/image-chess.webp";
import avatarRizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp";
import avatarKim from "./assets/images/avatar-kimberly-smith.webp";
import avatarNathan from "./assets/images/avatar-nathan-peterson.webp";
import Notifications from "./components/Notifications";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const notificationsData = [
    {
      id: 1,
      userName: "Mark Webber",
      userImage: avatarMark,
      isRead: false,
      status: "react",
      message: "My first tournament today!",
      time: "1m",
    },
    {
      id: 2,
      userName: "Angela Gray",
      userImage: avatarAngela,
      isRead: false,
      status: "follow",
      message: "",
      time: "5m",
    },
    {
      id: 3,
      userName: "Jacob Thompson",
      userImage: avatarJacob,
      isRead: false,
      status: "join-group",
      message: "Chess Club",
      time: "1 day",
    },
    {
      id: 4,
      userName: "Rizky Hasanuddin",
      userImage: avatarRizky,
      isRead: true,
      status: "dm",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days",
    },
    {
      id: 5,
      userName: "Kimberly Smith",
      userImage: avatarKim,
      isRead: true,
      status: "comment",
      message: imageChess,
      time: "1 week",
    },
    {
      id: 6,
      userName: "Nathan Peterson",
      userImage: avatarNathan,
      isRead: true,
      status: "react",
      message: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
    },
    {
      id: 7,
      userName: "Anna Kim",
      userImage: avatarAnna,
      isRead: true,
      status: "left-group",
      message: "Chess Club",
      time: "2 weeks",
    },
  ];

  const [notifData, setNotifData] = useState(notificationsData);

  let unread = notifData.filter((item) => !item.isRead).length;

  const readHanler = () => {
    const newNotif = notifData.map((item) => {
      if (!item.isRead) {
        item.isRead = true;
        return item;
      }
      return item;
    });
    setNotifData(newNotif);
  };

  return (
    <div className="App">
      <main>
        <Header read={unread} onMarkClick={readHanler} />
        <Notifications data={notifData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
