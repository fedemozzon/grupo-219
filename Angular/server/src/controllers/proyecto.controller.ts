import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Proyecto} from '../models';
import {ProyectoRepository} from '../repositories';

export class ProyectoController {
  constructor(
    @repository(ProyectoRepository)
    public proyectoRepository : ProyectoRepository,
  ) {}

  @post('/proyectos')
  @response(200, {
    description: 'Proyecto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Proyecto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyecto, {
            title: 'NewProyecto',
            exclude: ['idProyecto'],
          }),
        },
      },
    })
    proyecto: Omit<Proyecto, 'idProyecto'>,
  ): Promise<Proyecto> {
    return this.proyectoRepository.create(proyecto);
  }

  @get('/proyectos/count')
  @response(200, {
    description: 'Proyecto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Proyecto) where?: Where<Proyecto>,
  ): Promise<Count> {
    return this.proyectoRepository.count(where);
  }

  @get('/proyectos')
  @response(200, {
    description: 'Array of Proyecto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Proyecto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Proyecto) filter?: Filter<Proyecto>,
  ): Promise<Proyecto[]> {
    return this.proyectoRepository.find(filter);
  }

  @patch('/proyectos')
  @response(200, {
    description: 'Proyecto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyecto, {partial: true}),
        },
      },
    })
    proyecto: Proyecto,
    @param.where(Proyecto) where?: Where<Proyecto>,
  ): Promise<Count> {
    return this.proyectoRepository.updateAll(proyecto, where);
  }

  @get('/proyectos/{id}')
  @response(200, {
    description: 'Proyecto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Proyecto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Proyecto, {exclude: 'where'}) filter?: FilterExcludingWhere<Proyecto>
  ): Promise<Proyecto> {
    return this.proyectoRepository.findById(id, filter);
  }

  @patch('/proyectos/{id}')
  @response(204, {
    description: 'Proyecto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyecto, {partial: true}),
        },
      },
    })
    proyecto: Proyecto,
  ): Promise<void> {
    await this.proyectoRepository.updateById(id, proyecto);
  }

  @put('/proyectos/{id}')
  @response(204, {
    description: 'Proyecto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proyecto: Proyecto,
  ): Promise<void> {
    await this.proyectoRepository.replaceById(id, proyecto);
  }

  @del('/proyectos/{id}')
  @response(204, {
    description: 'Proyecto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proyectoRepository.deleteById(id);
  }
}
