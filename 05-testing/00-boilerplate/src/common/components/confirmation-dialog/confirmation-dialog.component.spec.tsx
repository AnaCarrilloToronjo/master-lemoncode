import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Confirmation-dialog specs', () => {
  it('should display dialog', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'title name',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const element = screen.getByRole('presentation');

    //Assert
    expect(element).toBeInTheDocument();
  });

  it('should call the accept function when the button is clicked', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(), //spy
      onClose: () => {},
      title: 'title name',
      labels: {
        closeButton: 'cancelar',
        acceptButton: 'aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('presentation');
    userEvent.click(dialog);

    const dialogAccept = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });
    userEvent.click(dialogAccept);

    //Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call the cancel function when the button is clicked', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(), //spy
      onClose: jest.fn(), //spy
      title: 'title name',
      labels: {
        closeButton: 'cancelar',
        acceptButton: 'aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('presentation');
    userEvent.click(dialog);

    const dialogCancel = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    userEvent.click(dialogCancel);

    //Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
