import {Entity, model, property} from '@loopback/repository';

@model()
export class Habilidad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idHabilidad?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreHabilidad: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeDeConocimiento: number;

  @property({
    type: 'string',
  })
  descripcionHabilidad?: string;

  @property({
    type: 'number',
  })
  idUsuario?: number;

  constructor(data?: Partial<Habilidad>) {
    super(data);
  }
}

export interface HabilidadRelations {
  // describe navigational properties here
}

export type HabilidadWithRelations = Habilidad & HabilidadRelations;
