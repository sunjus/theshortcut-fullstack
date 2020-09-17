import React, { useState, useMemo, useEffect } from "react";
//import { Alert, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import moment from "moment";
import "./eventDetail.css";
import api from "../../services/api";

const EventDetail = ({ history }) => {
  // console.log(user_id)

  // Declare state variables
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageHandler, setMessageHandler] = useState("");
  const [eventsRequests, setEventsRequests] = useState([]);

  const user = localStorage.getItem("user");

  //로그인없이도볼수있음
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async (params) => {
    try {
      const url = params ? `/eventdetail/${params}` : "/dashboard";
      const response = await api.get(url, { headers: { user } });

      console.log(response.data);
      setEvents(response.data.events);
    } catch {
      history.push("/login");
    }
  };

  const myEventsHandler = async () => {
    try {
      const response = await api.get("/user/events", { headers: { user } });
      console.log(response.data.events);
      setEvents(response.data.events);
    } catch (error) {
      history.push("/login");
    }
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
    <ul className="events-list">
      {events.map((event) => (
        <li key={event._id}>
          <header
            style={{ backgroundImage: `url(${event.thumbnail_url})` }}
          ></header>
          <strong>{event.title}</strong>
          <span>Date: {moment(event.date).format("LL")}</span>
          <span>Price: {parseFloat(event.price).toFixed(2)}</span>
          <span>Description: {event.description}</span>
          <span>
            Creator: <a href={`mailto:${event.user.email}`} />
            {event.user.firstName} {event.user.lastName}
          </span>
          <span>Participant: {event.meta.nApproved}</span>
          <button
            className="submit-btn"
            onClick={() => {
              registrationRequestHandler(event);
            }}
          >
            Register
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EventDetail;
