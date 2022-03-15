import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Habilidad, HabilidadRelations} from '../models';

export class HabilidadRepository extends DefaultCrudRepository<
  Habilidad,
  typeof Habilidad.prototype.idHabilidad,
  HabilidadRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Habilidad, dataSource);
  }
}
