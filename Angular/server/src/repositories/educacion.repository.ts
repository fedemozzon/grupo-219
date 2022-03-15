import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Educacion, EducacionRelations} from '../models';

export class EducacionRepository extends DefaultCrudRepository<
  Educacion,
  typeof Educacion.prototype.idEducacion,
  EducacionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Educacion, dataSource);
  }
}
