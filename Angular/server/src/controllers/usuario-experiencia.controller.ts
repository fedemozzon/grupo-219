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
  Experiencia,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioExperienciaController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/experiencias', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Experiencia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Experiencia)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Experiencia>,
  ): Promise<Experiencia[]> {
    return this.usuarioRepository.experiencias(id).find(filter);
  }

  @post('/usuarios/{id}/experiencias', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Experiencia)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuario.prototype.idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiencia, {
            title: 'NewExperienciaInUsuario',
            exclude: ['idExperiencia'],
            optional: ['idUsuario']
          }),
        },
      },
    }) experiencia: Omit<Experiencia, 'idExperiencia'>,
  ): Promise<Experiencia> {
    return this.usuarioRepository.experiencias(id).create(experiencia);
  }

  @patch('/usuarios/{id}/experiencias', {
    responses: {
      '200': {
        description: 'Usuario.Experiencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiencia, {partial: true}),
        },
      },
    })
    experiencia: Partial<Experiencia>,
    @param.query.object('where', getWhereSchemaFor(Experiencia)) where?: Where<Experiencia>,
  ): Promise<Count> {
    return this.usuarioRepository.experiencias(id).patch(experiencia, where);
  }

  @del('/usuarios/{id}/experiencias', {
    responses: {
      '200': {
        description: 'Usuario.Experiencia DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Experiencia)) where?: Where<Experiencia>,
  ): Promise<Count> {
    return this.usuarioRepository.experiencias(id).delete(where);
  }
}
