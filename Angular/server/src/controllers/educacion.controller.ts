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
import {Educacion} from '../models';
import {EducacionRepository} from '../repositories';

export class EducacionController {
  constructor(
    @repository(EducacionRepository)
    public educacionRepository : EducacionRepository,
  ) {}

  @post('/educacions')
  @response(200, {
    description: 'Educacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Educacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Educacion, {
            title: 'NewEducacion',
            exclude: ['idEducacion'],
          }),
        },
      },
    })
    educacion: Omit<Educacion, 'idEducacion'>,
  ): Promise<Educacion> {
    return this.educacionRepository.create(educacion);
  }

  @get('/educacions/count')
  @response(200, {
    description: 'Educacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Educacion) where?: Where<Educacion>,
  ): Promise<Count> {
    return this.educacionRepository.count(where);
  }

  @get('/educacions')
  @response(200, {
    description: 'Array of Educacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Educacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Educacion) filter?: Filter<Educacion>,
  ): Promise<Educacion[]> {
    return this.educacionRepository.find(filter);
  }

  @patch('/educacions')
  @response(200, {
    description: 'Educacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Educacion, {partial: true}),
        },
      },
    })
    educacion: Educacion,
    @param.where(Educacion) where?: Where<Educacion>,
  ): Promise<Count> {
    return this.educacionRepository.updateAll(educacion, where);
  }

  @get('/educacions/{id}')
  @response(200, {
    description: 'Educacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Educacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Educacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Educacion>
  ): Promise<Educacion> {
    return this.educacionRepository.findById(id, filter);
  }

  @patch('/educacions/{id}')
  @response(204, {
    description: 'Educacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Educacion, {partial: true}),
        },
      },
    })
    educacion: Educacion,
  ): Promise<void> {
    await this.educacionRepository.updateById(id, educacion);
  }

  @put('/educacions/{id}')
  @response(204, {
    description: 'Educacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() educacion: Educacion,
  ): Promise<void> {
    await this.educacionRepository.replaceById(id, educacion);
  }

  @del('/educacions/{id}')
  @response(204, {
    description: 'Educacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.educacionRepository.deleteById(id);
  }
}
