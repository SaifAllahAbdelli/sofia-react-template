import React, { useState, useEffect, useMemo } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  FormText,
} from "reactstrap";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  postAdministrativeDocuments,
  setCurrentPost,
  deletePost,
  editPost,
} from "../../actions/posts";

export default function Postes() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, row) => {
    dispatch(setCurrentPost(row));
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [basicModal, setBasicModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { posts, currentposts } = useSelector(
    ({ postsreducer }) => postsreducer
  );

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Text",
      selector: (row) => row.text,
      sortable: true,
    },
    {
      name: "option",
      cell: (row) => {
        return (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, row)}
            >
              <MoreHorizIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-label": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setBasicModal(true);
                  handleClose();
                }}
              >
                <EditSharpIcon /> Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleShowModalDelete();
                  handleClose();
                }}
              >
                <DeleteSharpIcon /> Remove
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (currentposts) {
      setTitle(currentposts.title);
      setDescription(currentposts.description);
      setCategory(currentposts.category);
      setText(currentposts.text);
    }
  }, [dispatch, posts, currentposts]);

  const toggleShow = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setText("");
    setBasicModal(!basicModal);
  };

  const toggleShowModalDelete = () => {
    setIsOpen(!isOpen);
  };

  const addPost = () => {
    let newPost = {
      id: Math.random() * 10,
      title,
      description,
      category,
      text,
    };
    dispatch(postAdministrativeDocuments(newPost));
    dispatch(setCurrentPost(null));
    setBasicModal(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setText("");
  };

  const edit = () => {
    let updatedPost = {
      id: currentposts?.id,
      title,
      description,
      category,
      text,
    };
    dispatch(editPost(updatedPost));
    dispatch(setCurrentPost(null));
    setBasicModal(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setText("");
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataTable
        title="My post"
        columns={columns}
        data={posts}
        actions={
          <MDBBtn color="primary" onClick={toggleShow}>
            ADD
          </MDBBtn>
        }
        pagination
      />
      <MDBModal show={basicModal} setShow={() => setBasicModal} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                {currentposts ? "Modifier" : "ajout"}
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form>
                <FormGroup>
                  <Label for="jobTitle">
                    Titre
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Titre d'emploi"
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />

                  <div className="invalid-feedback">Ce champ est requis!</div>
                </FormGroup>

                <FormGroup>
                  <Label for="jobDescription">
                    Description
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="jobDescription"
                    name="jobDescription"
                    type="textarea"
                    placeholder="Description de l'emploi"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <div className="invalid-feedback">Ce champ est requis!</div>
                </FormGroup>
                <FormGroup>
                  <Label for="catregory">
                    Category
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="catregory"
                    name="catregory"
                    type="textarea"
                    catregory
                    placeholder="Category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                  <div className="invalid-feedback">Ce champ est requis!</div>
                </FormGroup>
                <FormGroup>
                  <Label for="Text">
                    Text
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="text"
                    name="text"
                    type="textarea"
                    catregory
                    placeholder="text"
                    required
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                  <div className="invalid-feedback">Ce champ est requis!</div>
                </FormGroup>
                <FormGroup>
                  <Label for="Text">
                    Photo
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input id="file" type="file" name="file" required />

                  <div className="invalid-feedback">Ce champ est requis!</div>
                </FormGroup>
              </Form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={!currentposts ? () => addPost() : () => edit()}>
              {currentposts ? "Modifier post" : "ajouter post"}
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal
        show={isOpen}
        setShow={() => toggleShowModalDelete}
        tabIndex="-1"
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShowModalDelete}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Vous {currentposts?.title}</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShowModalDelete}>
                Close
              </MDBBtn>
              <MDBBtn
                onClick={() => {
                  dispatch(deletePost(currentposts?.id));
                  dispatch(setCurrentPost(null));
                  toggleShowModalDelete();
                }}
              >
                Delete
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
