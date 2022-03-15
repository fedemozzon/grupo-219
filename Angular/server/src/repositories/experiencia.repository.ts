import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Experiencia, ExperienciaRelations} from '../models';

export class ExperienciaRepository extends DefaultCrudRepository<
  Experiencia,
  typeof Experiencia.prototype.idExperiencia,
  ExperienciaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Experiencia, dataSource);
  }
}
