import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Usuario,
  Habilidad,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioHabilidadController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/habilidads', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Habilidad',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Habilidad)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Habilidad>,
  ): Promise<Habilidad[]> {
    return this.usuarioRepository.habilidads(id).find(filter);
  }

  @post('/usuarios/{id}/habilidads', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Habilidad)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuario.prototype.idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habilidad, {
            title: 'NewHabilidadInUsuario',
            exclude: ['idHabilidad'],
            optional: ['idUsuario']
          }),
        },
      },
    }) habilidad: Omit<Habilidad, 'idHabilidad'>,
  ): Promise<Habilidad> {
    return this.usuarioRepository.habilidads(id).create(habilidad);
  }

  @patch('/usuarios/{id}/habilidads', {
    responses: {
      '200': {
        description: 'Usuario.Habilidad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habilidad, {partial: true}),
        },
      },
    })
    habilidad: Partial<Habilidad>,
    @param.query.object('where', getWhereSchemaFor(Habilidad)) where?: Where<Habilidad>,
  ): Promise<Count> {
    return this.usuarioRepository.habilidads(id).patch(habilidad, where);
  }

  @del('/usuarios/{id}/habilidads', {
    responses: {
      '200': {
        description: 'Usuario.Habilidad DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Habilidad)) where?: Where<Habilidad>,
  ): Promise<Count> {
    return this.usuarioRepository.habilidads(id).delete(where);
  }
}
