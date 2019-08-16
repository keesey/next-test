const EventItem = ({
    eventName,
    genre,
    imageUrl,
    localStartDateStr
}) => (
  <li style={{ alignItems: "center", display: "flex", marginBottom: "1rem" }}>
      <img src={imageUrl} alt={eventName} width="128" height="72" />
      <div style={{ marginLeft: "1rem "}}>
          <strong>{genre}</strong>
          {" - "}
          {eventName}
          {" "}
          ({localStartDateStr})
      </div>
  </li>  
);
export default EventItem;
