import {Entity, model, property} from '@loopback/repository';

@model()
export class Proyecto extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombreProyecto: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idProyecto?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionProyecto: string;

  @property({
    type: 'string',
    required: true,
  })
  linkProyecto: string;

  @property({
    type: 'number',
  })
  idUsuario?: number;

  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;
