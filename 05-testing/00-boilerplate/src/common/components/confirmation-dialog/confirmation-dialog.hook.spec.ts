import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';
import '@testing-library/jest-dom';

describe('Confirmation-dialog specs', () => {
  it('should return empty lookup when onAccept is called', () => {
    // Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    const defaultLookup: Lookup = { id: '', name: '' };
    expect(result.current.itemToDelete).toEqual(defaultLookup);
  });

  it('should return false when onClose is called', () => {
    // Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should return isOpen = true and itemToDelete = defaultLookup when is called', () => {
    // Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    const defaultLookup: Lookup = { id: 'test', name: 'test' };
    act(() => result.current.onOpenDialog(defaultLookup));
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(defaultLookup);
  });
});
