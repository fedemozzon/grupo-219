import {Entity, model, property, hasMany} from '@loopback/repository';
import {Educacion} from './educacion.model';
import {Proyecto} from './proyecto.model';
import {Habilidad} from './habilidad.model';
import {Experiencia} from './experiencia.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idUsuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  tituloDeDesarrollador: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @hasMany(() => Educacion, {keyTo: 'idUsuario'})
  educacions: Educacion[];

  @hasMany(() => Proyecto, {keyTo: 'idUsuario'})
  proyectos: Proyecto[];

  @hasMany(() => Habilidad, {keyTo: 'idUsuario'})
  habilidads: Habilidad[];

  @hasMany(() => Experiencia, {keyTo: 'idUsuario'})
  experiencias: Experiencia[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
