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
  Educacion,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioEducacionController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/educacions', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Educacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Educacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Educacion>,
  ): Promise<Educacion[]> {
    return this.usuarioRepository.educacions(id).find(filter);
  }

  @post('/usuarios/{id}/educacions', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Educacion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuario.prototype.idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Educacion, {
            title: 'NewEducacionInUsuario',
            exclude: ['idEducacion'],
            optional: ['idUsuario']
          }),
        },
      },
    }) educacion: Omit<Educacion, 'idEducacion'>,
  ): Promise<Educacion> {
    return this.usuarioRepository.educacions(id).create(educacion);
  }

  @patch('/usuarios/{id}/educacions', {
    responses: {
      '200': {
        description: 'Usuario.Educacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Educacion, {partial: true}),
        },
      },
    })
    educacion: Partial<Educacion>,
    @param.query.object('where', getWhereSchemaFor(Educacion)) where?: Where<Educacion>,
  ): Promise<Count> {
    return this.usuarioRepository.educacions(id).patch(educacion, where);
  }

  @del('/usuarios/{id}/educacions', {
    responses: {
      '200': {
        description: 'Usuario.Educacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Educacion)) where?: Where<Educacion>,
  ): Promise<Count> {
    return this.usuarioRepository.educacions(id).delete(where);
  }
}
