import React, { useState } from "react";

import { Form, FormGroup, Label, Input, Row, Col, FormText } from "reactstrap";

function FormBody({ pfe }) {
  // Global input state
  const [state, setState] = useState({
    title: "",
    category: "",
    description: "",
    picture:"",
    addedBy:"",
    dateOfCreation:"",
  });

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // Input states if touched
  const [tileIsTouched, setTitleIsTouched] = useState(false);
  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);
  const [requiredSkillsIsTouched, setRequiredSkillsIsTouched] = useState(false);
  const [experienceYearsIsTouched, setExperienceYearsIsTouched] =
    useState(false);
  const [workingTimeFromIsTouched, setWorkingTimeFromIsTouched] =
    useState(false);
  const [workingTimeToIsTouched, setWorkingTimeToIsTouched] = useState(false);
  const [keyWordsIsTouched, setKeyWordsIsTouched] = useState(false);
  const [salaryIsTouched, setSalaryIsTouched] = useState(false);

  return (
    <Form>
      <FormGroup>
        <Label for="title">
          Titre d'emploi <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="Titre d'emploi"
          type="text"
          required
          value={state.title}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setTitleIsTouched(true)}
          className={!state.title && tileIsTouched ? "is-invalid" : ""}
        />

        <div className="invalid-feedback">Ce champ est requis!</div>
      </FormGroup>

      <FormGroup>
        <Label for="category">
          Sélectionnez le type de travail{" "}
          <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="category"
          name="category"
          type="select"
          required
          value={state.category}
          onChange={(event) => changeCreds(event)}
        >
          <option>Job</option>
          <option>PFE</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="description">
          Description de l'emploi <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="description"
          name="description"
          type="textarea"
          placeholder="Description de l'emploi"
          required
          value={state.description}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setDescriptionIsTouched(true)}
          className={
            !state.description && descriptionIsTouched ? "is-invalid" : ""
          }
        />
        <div className="invalid-feedback">Ce champ est requis!</div>
      </FormGroup>

      <FormGroup>
        <Label for="requiredSkillz">
          Compétences requises <strong className="text-danger">*</strong>
        </Label>
        <Input
          id="requiredSkillz"
          name="requiredSkillz"
          type="textarea"
          placeholder="ReactJS,NodeJS..."
          required
          value={state.requiredSkillz}
          onChange={(event) => changeCreds(event)}
          onFocus={() => setRequiredSkillsIsTouched(true)}
          className={
            !state.requiredSkillz && requiredSkillsIsTouched ? "is-invalid" : ""
          }
        />
        <div className="invalid-feedback">Ce champ est requis!</div>

        <FormText>
          Séparez la compétence par une <b>virgule (,)</b>
        </FormText>
      </FormGroup>

      {!pfe && (
        <FormGroup>
          <Label for="experienceYears">
            Années d'expérience <strong className="text-danger">*</strong>
          </Label>
          <Input
            id="experienceYears"
            name="experienceYears"
            type="text"
            placeholder="Experience years"
            required
            value={state.experienceYears}
            onChange={(event) => changeCreds(event)}
            onFocus={() => setExperienceYearsIsTouched(true)}
            className={
              (!state.experienceYears || state.experienceYears < 0) &&
              experienceYearsIsTouched
                ? "is-invalid"
                : ""
            }
          />
          <div className="invalid-feedback">Ce champ est requis!</div>

          <FormText>
            Séparez la compétence par une <b>virgule (,)</b>
          </FormText>
        </FormGroup>
      )}

      <FormGroup>
        <Row>
          <Col>
            <Label>Temps de travail:</Label>
          </Col>
        </Row>

        <Row>
          <Col>
            <Label for="workingTimeFrom">
              De <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="workingTimeFrom"
              name="workingTimeFrom"
              type="time"
              required
              value={state.workingTimeFrom}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setWorkingTimeFromIsTouched(true)}
              className={
                !state.workingTimeFrom && workingTimeFromIsTouched
                  ? "is-invalid"
                  : ""
              }
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
          </Col>

          <Col>
            <Label for="workingTimeTo">
              A <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="workingTimeTo"
              name="workingTimeTo"
              type="time"
              required
              value={state.workingTimeTo}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setWorkingTimeToIsTouched(true)}
              className={
                !state.workingTimeTo && workingTimeToIsTouched
                  ? "is-invalid"
                  : ""
              }
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col>
            <Label>Informations générales:</Label>
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="mb-2">
            <Label for="keyWords">
              Mots clés <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="keyWords"
              name="keyWords"
              type="textarea"
              placeholder="Frontend,Backend,React..."
              required
              value={state.keyWords}
              onChange={(event) => changeCreds(event)}
              onFocus={() => setKeyWordsIsTouched(true)}
              className={
                !state.keyWords && keyWordsIsTouched ? "is-invalid" : ""
              }
            />
            <div className="invalid-feedback">Ce champ est requis!</div>
            <FormText>
              Séparez les mots clés par une <b>virgule (,)</b>
            </FormText>
          </Col>

          <Col>
            <Label for="workingDays">
              Jours de travail <strong className="text-danger">*</strong>
            </Label>
            <Input
              id="workingDays"
              name="workingDays"
              type="select"
              required
              value={state.workingDays}
              onChange={(event) => changeCreds(event)}
            >
              <option>L-V (Bureau)</option>
              <option>L-Mer (Bureau)</option>
              <option>L-V (A distance)</option>
              <option>Weekends (A distance)</option>
            </Input>
          </Col>

          {!pfe && (
            <Col>
              <Label for="salary">
                Salaire <strong className="text-danger">*</strong>
              </Label>
              <Input
                id="salary"
                name="salary"
                type="number"
                min={0}
                required
                value={state.salary}
                onChange={(event) => changeCreds(event)}
                onFocus={() => setSalaryIsTouched(true)}
                className={
                  (!state.salary || state.salary < 0) && salaryIsTouched
                    ? "is-invalid"
                    : ""
                }
              />
              <div className="invalid-feedback">Ce champ est requis!</div>
            </Col>
          )}
        </Row>
      </FormGroup>
    </Form>
  );
}

export default FormBody;
