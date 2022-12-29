function StatusNotif({ status, userName, comment, isRead, time }) {
  switch (status) {
    case "react":
      return (
        <>
          <p className="">
            <a href="#user" className="userName">
              {userName}
            </a>{" "}
            reacted to your recent post{" "}
            <a href="#react" className="comment">
              {comment}
            </a>{" "}
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    case "follow":
      return (
        <>
          <p>
            <a href="#user" className="userName">
              {userName}
            </a>{" "}
            followed you <span className="comment">{comment}</span>
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    case "join-group":
      return (
        <>
          <p>
            <a href="#user" className="userName">
              {userName}
            </a>{" "}
            has joined your group{" "}
            <a className="comment club" href="#club">
              {comment}
            </a>
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    case "dm":
      return (
        <>
          <div className="dm">
            <p>
              <a href="#user" className="userName">
                {userName}
              </a>{" "}
              sent you a private message
            </p>
            <p>{time} ago</p>
            <div className="dm-body">
              <p>{comment}</p>
            </div>
            {!isRead ? <div className="unread"></div> : ""}
          </div>
        </>
      );
    case "comment":
      return (
        <>
          <div className="media">
            <p>
              <a href="#user" className="userName">
                {userName}
              </a>{" "}
              commented on your picture{" "}
            </p>
            <img src={comment} alt="" aria-hidden="true" />
            {!isRead ? <div className="unread"></div> : ""}
            <p>{time} ago</p>
          </div>
        </>
      );
    case "left-group":
      return (
        <>
          <p>
            <a href="#user" className="userName">
              {userName}
            </a>{" "}
            left the group{" "}
            <a className="comment club" href="#club">
              {comment}
            </a>
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    default:
      break;
  }
}

function NotificationItem({ userName, status, avatar, time, comment, isRead }) {
  return (
    <div className={`notification-item ${isRead ? "read" : ""}`}>
      <div className="notification-item__avatar">
        <img src={avatar} alt="" aria-hidden="true" />
      </div>
      <div className="notification-item__body">
        <StatusNotif
          status={status}
          userName={userName}
          comment={comment}
          isRead={isRead}
          time={time}
        />
      </div>
    </div>
  );
}

export default NotificationItem;
