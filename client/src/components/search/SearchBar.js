import React, { useState } from "react";
import { connect } from "react-redux";
import { search } from "../../actions/searchActions";
import { Button, InputGroup, Modal } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";
import "./SearchBar.css";

const SearchBar = ({ search }) => {
  const [showModal, setModalState] = useState(false);
  const [formData, setFormData] = useState({ keyword: "" });
  const { keyword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ keyword });
    search({ keyword });
    setModalState(true);
  };

  const close = () => {
    setModalState(false);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <InputGroup
          style={{
            backgroundColor: "#EDEEF6",
            marginBottom: "20px",
            borderRadius: "10px 5px 5px 10px",
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search for queues or users..."
            style={{
              backgroundColor: "#EDEEF6",
              border: 0,
              height: "calc(1.6em + 1.875rem + 2px)",
              paddingLeft: "20px",
            }}
            name="keyword"
            value={keyword}
            onChange={(e) => onChange(e)}
            required
          />

          <InputGroup.Append>
            <Button
              style={{
                paddingRight: "20px",
                backgroundColor: "transparent",
                border: "0",
              }}
              type="submit"
            >
              <div style={{ color: "#A6A8AE" }}>
                <FiSearch size={20} />
              </div>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <Modal show={showModal} onHide={close}>
        <Modal.Header closeButton>
          <h5 className="font-weight-bold">Search results for '{keyword}'</h5>
        </Modal.Header>
        <Modal.Body>
          <SearchModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default connect(null, { search })(SearchBar);
