import React from "react";
import { Card, Button } from "react-bootstrap";

const ProfileCard = (props) => {
  return (
    <Card style={{ marginTop: "20px", border: 0 }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          {/* Avatar */}
          <div className="d-flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHUzSweS0rn2IJYSRYlh07ZfaBbg8o_mx_ljxCRxF5NQhNo1j&usqp=CAU"
              alt=""
              style={{
                verticalAlign: "middle",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <div className="align-self-center">
              <h6 className="mb-0" style={{ paddingBottom: "6px" }}>
                {props.user.fullname}
              </h6>
              <small className="text-muted">{props.user.username}</small>
            </div>
          </div>

          <Button variant="primary" size="sm" style={{ fontWeight: "bold" }}>
            Follow
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
