import {Entity, model, property} from '@loopback/repository';

@model()
export class Educacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idEducacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreDelCurso: string;

  @property({
    type: 'string',
    required: true,
  })
  tituloObtenido: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaDeExpedicion: string;

  @property({
    type: 'string',
    required: true,
  })
  infoExtra: string;

  @property({
    type: 'number',
  })
  idUsuario?: number;

  constructor(data?: Partial<Educacion>) {
    super(data);
  }
}

export interface EducacionRelations {
  // describe navigational properties here
}

export type EducacionWithRelations = Educacion & EducacionRelations;
