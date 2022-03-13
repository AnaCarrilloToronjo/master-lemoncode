import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('Project mapper spec', () => {
  it('should return empty object when it feeds projects equals undefined', () => {
    //Arrange
    const project: apiModel.Project = undefined;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual({
      comments: '',
      employees: [],
      externalId: '',
      id: '',
      isActive: false,
      name: '',
    });
  });

  it('should return the same employee', () => {
    //Arrange
    const project: apiModel.Project = {
      employees: [{ employeeName: 'Daniel Perez', id: '1', isAssigned: true }],
      externalId: '1234',
      id: '1',
      isActive: true,
      name: 'Nombre',
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual({
      employees: [{ employeeName: 'Daniel Perez', id: '1', isAssigned: true }],
      externalId: '1234',
      id: '1',
      isActive: true,
      name: 'Nombre',
    });
  });

  it('should return array empty when employees is undefined', () => {
    //Arrange
    const project: apiModel.Project = {
      employees: undefined,
      externalId: '1234',
      id: '1',
      isActive: true,
      name: 'Nombre',
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual({
      employees: [],
      externalId: '1234',
      id: '1',
      isActive: true,
      name: 'Nombre',
    });
  });
});
