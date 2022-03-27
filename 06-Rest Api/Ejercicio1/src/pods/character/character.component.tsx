import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: character;
  onSave: (character: character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      //validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled />
          <TextFieldComponent name="status" label="Status" disabled />
          <TextFieldComponent name="species" label="Species" disabled />
          <TextFieldComponent name="type" label="Type" disabled />
          <TextFieldComponent name="gender" label="Gender" disabled />
        </Form>
      )}
    </Formik>
  );
};
