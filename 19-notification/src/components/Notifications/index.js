import NotificationItem from "../NotificationItem";

function Notifications({ data }) {
  return (
    <div className="notifications">
      {data.map((item) => (
        <NotificationItem
          userName={item.userName}
          status={item.status}
          comment={item.message}
          key={item.id}
          avatar={item.userImage}
          time={item.time}
          isRead={item.isRead}
        />
      ))}
    </div>
  );
}

export default Notifications;
