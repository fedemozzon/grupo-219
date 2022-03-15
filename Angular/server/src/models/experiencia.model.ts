import {Entity, model, property} from '@loopback/repository';

@model()
export class Experiencia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idExperiencia?: number;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionActividades: string;

  @property({
    type: 'number',
  })
  idUsuario?: number;

  constructor(data?: Partial<Experiencia>) {
    super(data);
  }
}

export interface ExperienciaRelations {
  // describe navigational properties here
}

export type ExperienciaWithRelations = Experiencia & ExperienciaRelations;
