import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import moment from "moment";
import api from "../../services/api";
import Comments from "../../components/Comments";

const EventDetail = ({ history, match }) => {
  // Declare state variables
  const [event, setEvent] = useState({});
  const [eventOwner, setEventOwner] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageHandler, setMessageHandler] = useState("");
  const [eventsRequests, setEventsRequests] = useState([]);

  const user = localStorage.getItem("user");

  const eventId = match.params.eventId;

  //로그인없이도볼수있음
  useEffect(() => {
    getEvent(eventId);
  }, [eventId]);

  const getEvent = async (eventId) => {
    let event = {};
    let owner = {};
    try {
      let response = await api.get(`/event/${eventId}`, {
        headers: { user },
      });
      event = response.data.event;
      console.log(event);
      console.log(typeof event.user);
      response = await api.get(`/user/${event.user}`, { headers: { user } });
      owner = response.data;
    } catch {
      history.push("/"); // TODO better to show error page(404)
    }
    setEvent(event);
    setEventOwner(owner);
  };

  const registrationRequestHandler = async (event) => {
    console.log("Clicked");
    try {
      await api.post(`/registration/${event.id}`, {}, { headers: { user } });
      setSuccess(true);
      setMessageHandler(`Successfully registered to event ${event.title}`);
      console.log("Registered");
      setTimeout(() => {
        setSuccess(false);
        setMessageHandler("");
      }, 2000);
    } catch (error) {
      setError(true);
      setMessageHandler(`Could not register to event ${event.title}`);
      console.log("Failed");
      setTimeout(() => {
        setError(false);
        setMessageHandler("");
      }, 2000);
    }
  };

  return (
    <div>
      <Card className="event-detail" key={event._id}>
        <CardTitle tag="h3">{event.title}</CardTitle>

        <CardImg src={event.thumbnail_url} />
        <CardBody>
          <CardText>Date: {moment(event.date).format("LL")}</CardText>
          <CardText>Price: {parseFloat(event.price).toFixed(2)}</CardText>
          <CardText>Description: {event.description}</CardText>
          <CardText>
            Creator:{" "}
            <CardLink href={`mailto:${eventOwner.email}`}>
              {eventOwner.firstName} {eventOwner.lastName}
            </CardLink>
          </CardText>
          <CardText>Participant: {(event.meta || {}).nApproved || 0}</CardText>
          <CardText></CardText>
          <Button
            className="submit-btn"
            onClick={() => {
              registrationRequestHandler(event);
            }}
          >
            Register
          </Button>
          <CardText></CardText>
          <Comments history={history} eventId={event._id}></Comments>
        </CardBody>
      </Card>
      {error ? (
        <Alert color="danger" className="event-validation">
          {messageHandler}
        </Alert>
      ) : (
        ""
      )}
      {success ? (
        <Alert color="success" className="event-validation">
          {messageHandler}
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventDetail;
