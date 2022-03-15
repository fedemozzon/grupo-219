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
  Proyecto,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioProyectoController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/proyectos', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Proyecto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proyecto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Proyecto>,
  ): Promise<Proyecto[]> {
    return this.usuarioRepository.proyectos(id).find(filter);
  }

  @post('/usuarios/{id}/proyectos', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Proyecto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuario.prototype.idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyecto, {
            title: 'NewProyectoInUsuario',
            exclude: ['idProyecto'],
            optional: ['idUsuario']
          }),
        },
      },
    }) proyecto: Omit<Proyecto, 'idProyecto'>,
  ): Promise<Proyecto> {
    return this.usuarioRepository.proyectos(id).create(proyecto);
  }

  @patch('/usuarios/{id}/proyectos', {
    responses: {
      '200': {
        description: 'Usuario.Proyecto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyecto, {partial: true}),
        },
      },
    })
    proyecto: Partial<Proyecto>,
    @param.query.object('where', getWhereSchemaFor(Proyecto)) where?: Where<Proyecto>,
  ): Promise<Count> {
    return this.usuarioRepository.proyectos(id).patch(proyecto, where);
  }

  @del('/usuarios/{id}/proyectos', {
    responses: {
      '200': {
        description: 'Usuario.Proyecto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Proyecto)) where?: Where<Proyecto>,
  ): Promise<Count> {
    return this.usuarioRepository.proyectos(id).delete(where);
  }
}
