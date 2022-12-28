function StatusNotif({ status, userName, comment, isRead, time }) {
  switch (status) {
    case "react":
      return (
        <>
          <p className="">
            <span className="userName">{userName}</span> reacted to your recent
            post <span className="comment">{comment}</span>{" "}
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    case "follow":
      return (
        <>
          <p>
            <span className="userName">{userName}</span> followed you{" "}
            <span className="comment">{comment}</span>
            {!isRead ? <div className="unread"></div> : ""}
          </p>
          <p>{time} ago</p>
        </>
      );
    case "join-group":
      return (
        <>
          <p>
            <span className="userName">{userName}</span> has joined your group{" "}
            <a className="comment" href="#club">
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
              <span className="userName">{userName}</span> sent your a private
              message
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
              <span className="userName">{userName}</span> commented on your
              picture{" "}
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
            <span className="userName">{userName}</span> left the group{" "}
            <a className="comment" href="#club">
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
