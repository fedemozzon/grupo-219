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
import {Experiencia} from '../models';
import {ExperienciaRepository} from '../repositories';

export class ExperienciaController {
  constructor(
    @repository(ExperienciaRepository)
    public experienciaRepository : ExperienciaRepository,
  ) {}

  @post('/experiencias')
  @response(200, {
    description: 'Experiencia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Experiencia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiencia, {
            title: 'NewExperiencia',
            exclude: ['idExperiencia'],
          }),
        },
      },
    })
    experiencia: Omit<Experiencia, 'idExperiencia'>,
  ): Promise<Experiencia> {
    return this.experienciaRepository.create(experiencia);
  }

  @get('/experiencias/count')
  @response(200, {
    description: 'Experiencia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Experiencia) where?: Where<Experiencia>,
  ): Promise<Count> {
    return this.experienciaRepository.count(where);
  }

  @get('/experiencias')
  @response(200, {
    description: 'Array of Experiencia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Experiencia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Experiencia) filter?: Filter<Experiencia>,
  ): Promise<Experiencia[]> {
    return this.experienciaRepository.find(filter);
  }

  @patch('/experiencias')
  @response(200, {
    description: 'Experiencia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiencia, {partial: true}),
        },
      },
    })
    experiencia: Experiencia,
    @param.where(Experiencia) where?: Where<Experiencia>,
  ): Promise<Count> {
    return this.experienciaRepository.updateAll(experiencia, where);
  }

  @get('/experiencias/{id}')
  @response(200, {
    description: 'Experiencia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Experiencia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Experiencia, {exclude: 'where'}) filter?: FilterExcludingWhere<Experiencia>
  ): Promise<Experiencia> {
    return this.experienciaRepository.findById(id, filter);
  }

  @patch('/experiencias/{id}')
  @response(204, {
    description: 'Experiencia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiencia, {partial: true}),
        },
      },
    })
    experiencia: Experiencia,
  ): Promise<void> {
    await this.experienciaRepository.updateById(id, experiencia);
  }

  @put('/experiencias/{id}')
  @response(204, {
    description: 'Experiencia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() experiencia: Experiencia,
  ): Promise<void> {
    await this.experienciaRepository.replaceById(id, experiencia);
  }

  @del('/experiencias/{id}')
  @response(204, {
    description: 'Experiencia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.experienciaRepository.deleteById(id);
  }
}
